import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { tools } from "@/lib/tools-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
    return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const tool = tools.find((t) => t.slug === slug);
    if (!tool) return { title: "Tool Not Found – Debuxel" };
    return {
        title: `${tool.name} – Debuxel`,
        description: tool.longDescription,
    };
}

export default async function ToolPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const tool = tools.find((t) => t.slug === slug);
    if (!tool) notFound();

    const Icon = tool.icon;

    return (
        <>
            <Navbar />
            <main className="pt-20">
                {/* Back link */}
                <div className="container-main pt-8">
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-1 text-sm text-text-700 hover:text-text-900 transition-colors duration-200"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        All Tools
                    </Link>
                </div>

                {/* Hero */}
                <section className="py-12 md:py-20 relative overflow-hidden">
                    <div className="gradient-blob-blue w-[400px] h-[400px] -right-20 top-0" />
                    <div className="gradient-blob-pink w-[300px] h-[300px] -left-20 bottom-0" />
                    <div className="container-main relative z-10">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className={`w-14 h-14 rounded-2xl ${tool.bgColor} flex items-center justify-center`}
                                >
                                    <Icon className={`w-7 h-7 ${tool.color}`} />
                                </div>
                                <Badge
                                    variant="secondary"
                                    className="text-xs uppercase tracking-wider font-semibold"
                                >
                                    {tool.priority}
                                </Badge>
                            </div>

                            <h1 className="text-4xl md:text-[56px] font-bold text-text-900 leading-[1.1] tracking-tight mb-4">
                                {tool.name}
                            </h1>
                            <p className="text-lg text-text-700 leading-relaxed mb-8">
                                {tool.longDescription}
                            </p>

                            <Button
                                size="lg"
                                className="h-12 px-8 rounded-xl btn-primary-gradient text-base font-semibold"
                                asChild
                            >
                                <Link href="/auth/signup">
                                    Try {tool.shortName} Free
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Features & How it works */}
                <section className="py-16 md:py-24 bg-bg-90">
                    <div className="container-main">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                            {/* Features */}
                            <div className="glass-card rounded-2xl p-8">
                                <h2 className="text-2xl font-bold text-text-900 mb-6">
                                    Features
                                </h2>
                                <ul className="space-y-4">
                                    {tool.features.map((f) => (
                                        <li key={f} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                            <span className="text-sm text-text-700">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* User Flow */}
                            <div className="glass-card rounded-2xl p-8">
                                <h2 className="text-2xl font-bold text-text-900 mb-6">
                                    How it works
                                </h2>
                                <ol className="space-y-4">
                                    {tool.userFlow.map((step, i) => (
                                        <li key={step} className="flex items-start gap-3">
                                            <span className="w-7 h-7 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0 text-xs font-bold text-accent-blue">
                                                {i + 1}
                                            </span>
                                            <span className="text-sm text-text-700 pt-1">
                                                {step}
                                            </span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 md:py-24 relative overflow-hidden">
                    <div className="gradient-blob-purple w-[300px] h-[300px] left-1/2 -translate-x-1/2 top-0" />
                    <div className="container-main relative z-10 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-text-900 mb-4">
                            Ready to try {tool.name}?
                        </h2>
                        <p className="text-base text-text-700 mb-8 max-w-md mx-auto">
                            Start using {tool.shortName} for free. No credit card required.
                        </p>
                        <Button
                            size="lg"
                            className="h-12 px-8 rounded-xl btn-primary-gradient text-base font-semibold"
                            asChild
                        >
                            <Link href="/auth/signup">
                                Get Started Free
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
