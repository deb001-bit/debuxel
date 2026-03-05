"use client";

import { useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
    Loader2,
    Copy,
    Check,
    Download,
    AlertCircle,
    Info,
    type LucideIcon,
} from "lucide-react";
import { toast } from "sonner";

interface ToolField {
    name: string;
    label: string;
    type: "textarea" | "input" | "select";
    placeholder: string;
    options?: { value: string; label: string }[];
}

interface AIToolLayoutProps {
    slug: string;
    title: string;
    description: string;
    icon: LucideIcon;
    iconColor: string;
    iconBg: string;
    fields: ToolField[];
    submitLabel: string;
    outputLabel?: string;
}

export function AIToolLayout({
    slug,
    title,
    description,
    icon: Icon,
    iconColor,
    iconBg,
    fields,
    submitLabel,
    outputLabel = "Output",
}: AIToolLayoutProps) {
    const [values, setValues] = useState<Record<string, string>>({});
    const [output, setOutput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    const handleChange = (name: string, value: string) => {
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        const inputString = Object.values(values).join("\n---\n");
        if (!inputString.trim()) {
            toast.error("Please provide some input.");
            return;
        }

        setIsLoading(true);
        setOutput("");
        setError(null);

        try {
            // Get client-side auth token
            const supabase = createBrowserClient(
                process.env.NEXT_PUBLIC_SUPABASE_URL!,
                process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
            );
            const { data: { session } } = await supabase.auth.getSession();

            const res = await fetch(`/api/ai/${slug}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    input: inputString,
                    accessToken: session?.access_token
                }),
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                if (res.status === 429) {
                    setError("You have reached your limit of 5 free tool uses for today.");
                    toast.error("Daily limit reached! (5/day)");
                } else if (res.status === 401) {
                    setError("Please log in to use this tool.");
                    toast.error("Authentication required.");
                } else {
                    setError(errorData.error || "Something went wrong.");
                    toast.error(errorData.error || "AI service error.");
                }
                setIsLoading(false);
                return;
            }

            // Read plain text response
            const text = await res.text();
            setOutput(text);

            toast.success("AI Generation complete!");
        } catch (err: any) {
            console.error("Streaming error:", err);
            setError("AI service is currently unavailable.");
            toast.error("Failed to connect to AI service.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleCopy = () => {
        if (!output) return;
        navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownload = () => {
        if (!output) return;
        const blob = new Blob([output], { type: "text/markdown" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${slug}-output.md`;
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="max-w-4xl">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <div
                    className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center`}
                >
                    <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-text-900">
                        {title}
                    </h1>
                    <p className="text-sm text-text-700">{description}</p>
                </div>
            </div>

            {/* AI Disclaimer */}
            <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-amber-50/80 border border-amber-200/50 mb-6">
                <Info className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <p className="text-xs text-amber-700 leading-relaxed">
                    <span className="font-semibold">Heads up:</span> AI-generated results may contain errors or inaccuracies. Always review and verify the output before using it in production.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Input Panel */}
                <div className="bg-surface/60 border border-subtle-border/30 rounded-2xl p-5 h-fit">
                    <h2 className="text-sm font-semibold text-text-900 mb-4">Input</h2>
                    <div className="space-y-4">
                        {fields.map((field) => (
                            <div key={field.name}>
                                <label className="text-xs font-medium text-text-700 mb-1.5 block">
                                    {field.label}
                                </label>
                                {field.type === "textarea" ? (
                                    <Textarea
                                        placeholder={field.placeholder}
                                        rows={8}
                                        className="rounded-xl border-subtle-border/50 bg-bg-100 font-mono text-sm resize-none"
                                        value={values[field.name] || ""}
                                        onChange={(e) => handleChange(field.name, e.target.value)}
                                    />
                                ) : field.type === "select" ? (
                                    <select
                                        className="w-full h-12 rounded-xl border border-subtle-border/50 bg-bg-100 px-4 pr-10 text-sm text-text-900 appearance-none cursor-pointer transition-all duration-200 hover:border-subtle-border focus:outline-none focus:ring-2 focus:ring-accent-purple/20 focus:border-accent-purple/50"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'right 12px center',
                                        }}
                                        value={values[field.name] || ""}
                                        onChange={(e) => handleChange(field.name, e.target.value)}
                                    >
                                        <option value="" disabled>{field.placeholder}</option>
                                        {field.options?.map((opt) => (
                                            <option key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <Input
                                        placeholder={field.placeholder}
                                        className="h-12 rounded-xl border-subtle-border/50 bg-bg-100"
                                        value={values[field.name] || ""}
                                        onChange={(e) => handleChange(field.name, e.target.value)}
                                    />
                                )}
                            </div>
                        ))}
                        <Button
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className="w-full h-12 rounded-xl bg-d-black text-white hover:bg-d-black/90 font-semibold transition-all duration-[180ms] hover:-translate-y-0.5"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    Generating...
                                </>
                            ) : (
                                submitLabel
                            )}
                        </Button>
                    </div>
                </div>

                {/* Output Panel */}
                <div className="bg-surface/60 border border-subtle-border/30 rounded-2xl p-5 min-h-[500px] flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-sm font-semibold text-text-900">
                            {outputLabel}
                        </h2>
                        {output && (
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 px-3 text-xs"
                                    onClick={handleCopy}
                                >
                                    {copied ? (
                                        <Check className="w-3 h-3 mr-1" />
                                    ) : (
                                        <Copy className="w-3 h-3 mr-1" />
                                    )}
                                    {copied ? "Copied!" : "Copy"}
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 px-3 text-xs"
                                    onClick={handleDownload}
                                >
                                    <Download className="w-3 h-3 mr-1" />
                                    Download
                                </Button>
                            </div>
                        )}
                    </div>
                    <div className="flex-1 rounded-xl bg-bg-100 border border-subtle-border/30 p-4 overflow-hidden relative">
                        {error && (
                            <div className="absolute inset-0 bg-red-50/90 flex items-center justify-center p-6 z-10 rounded-xl">
                                <div className="text-center">
                                    <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
                                    <p className="text-sm font-semibold text-red-900 mb-1">Error</p>
                                    <p className="text-xs text-red-700 leading-relaxed">{error}</p>
                                </div>
                            </div>
                        )}

                        {isLoading && !output ? (
                            <div className="flex items-center justify-center h-full min-h-[300px]">
                                <div className="text-center">
                                    <Loader2 className="w-8 h-8 animate-spin text-accent-purple mx-auto mb-3" />
                                    <p className="text-sm text-muted-text">
                                        AI is thinking...
                                    </p>
                                </div>
                            </div>
                        ) : output ? (
                            <div className="h-full overflow-auto custom-scrollbar">
                                <pre className="whitespace-pre-wrap text-sm text-text-700 font-mono leading-relaxed bg-transparent border-none p-0">
                                    {output}
                                </pre>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-full min-h-[300px]">
                                <div className="text-center opacity-30">
                                    <Icon className="w-10 h-10 text-muted-text mx-auto mb-3" />
                                    <p className="text-sm text-muted-text">
                                        Output will appear here
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
