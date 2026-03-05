"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const feedbackSchema = z.object({
    type: z.enum(["Bug Report", "Feature Request", "General Feedback", "Other"]),
    email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
    message: z.string().min(10, "Message must be at least 10 characters long"),
});

type FeedbackForm = z.infer<typeof feedbackSchema>;

export default function FeedbackPage() {
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FeedbackForm>({
        resolver: zodResolver(feedbackSchema),
        defaultValues: {
            type: "General Feedback",
        },
    });

    const onSubmit = async (data: FeedbackForm) => {
        setSubmitError("");
        try {
            const res = await fetch("/api/feedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.error || "Failed to submit feedback");
            }

            setSubmitted(true);
            reset();
        } catch (err: any) {
            setSubmitError(err.message);
        }
    };

    return (
        <>
            <Navbar />
            <main className="pt-16 min-h-screen bg-bg-100 relative overflow-hidden flex flex-col items-center justify-center">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl opacity-50" />

                <div className="container-main py-16 md:py-24 relative z-10 w-full max-w-2xl">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-text-900 leading-[1.15] tracking-tight mb-4">
                            Help us improve Debuxel
                        </h1>
                        <p className="text-base text-text-700 max-w-lg mx-auto">
                            Found a bug? Have a feature request? Let us know. Your feedback goes directly to our team.
                        </p>
                    </div>

                    <div className="bg-surface/60 border border-subtle-border/30 rounded-2xl p-6 md:p-8 shadow-sm">
                        {submitted ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-text-900 mb-2">Thank you!</h2>
                                <p className="text-text-700 mb-8 max-w-md mx-auto">
                                    Your feedback has been received. We appreciate you taking the time to help us improve Debuxel.
                                </p>
                                <Button
                                    onClick={() => setSubmitted(false)}
                                    variant="outline"
                                    className="rounded-xl border-subtle-border/50 text-text-900 font-medium"
                                >
                                    Send another message
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                {submitError && (
                                    <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm border border-red-100">
                                        {submitError}
                                    </div>
                                )}

                                <div>
                                    <label className="text-sm font-medium text-text-900 mb-1.5 block">
                                        Feedback Type
                                    </label>
                                    <select
                                        {...register("type")}
                                        className="w-full h-12 px-4 pr-10 rounded-xl border border-subtle-border/50 bg-bg-100 text-sm text-text-900 appearance-none cursor-pointer transition-all duration-200 hover:border-subtle-border focus:outline-none focus:ring-2 focus:ring-accent-purple/20 focus:border-accent-purple/50"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'right 16px center',
                                        }}
                                    >
                                        <option value="Bug Report">Bug Report</option>
                                        <option value="Feature Request">Feature Request</option>
                                        <option value="General Feedback">General Feedback</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-text-900 mb-1.5 block">
                                        Email address (Optional)
                                    </label>
                                    <Input
                                        {...register("email")}
                                        type="email"
                                        placeholder="you@example.com"
                                        className="h-12 rounded-xl border-subtle-border/50 bg-bg-100"
                                    />
                                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-text-900 mb-1.5 block">
                                        Your message <span className="text-red-500">*</span>
                                    </label>
                                    <Textarea
                                        {...register("message")}
                                        placeholder="Tell us what's on your mind..."
                                        className="min-h-[150px] resize-y rounded-xl border-subtle-border/50 bg-bg-100 p-4"
                                    />
                                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-12 rounded-xl bg-d-black text-white hover:bg-d-black/90 font-semibold transition-all duration-[180ms] hover:-translate-y-0.5"
                                >
                                    {isSubmitting ? "Sending..." : "Send Feedback"}
                                </Button>

                                <p className="text-xs text-center text-muted-text mt-4">
                                    Messages are sent directly to the development team&apos;s inbox.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
