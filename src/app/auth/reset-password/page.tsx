"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

import { resetPassword } from "../actions";

const resetSchema = z.object({
    email: z.string().email("Please enter a valid email"),
});

type ResetForm = z.infer<typeof resetSchema>;

export default function ResetPasswordPage() {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ResetForm>({
        resolver: zodResolver(resetSchema),
    });

    const onSubmit = async (data: ResetForm) => {
        setError("");
        try {
            const formData = new FormData();
            formData.append("email", data.email);

            const result = await resetPassword(formData);
            if (result?.error) {
                setError(result.error);
                return;
            }
            setSubmitted(true);
        } catch {
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-bg-100 relative overflow-hidden">
            <div className="absolute top-0 left-1/3 w-80 h-80 bg-accent-warm/10 rounded-full blur-3xl" />

            <div className="w-full max-w-md mx-4 relative z-10">
                <Link href="/" className="flex items-center gap-2 justify-center mb-10">
                    <Image src="/logo.png" alt="Debuxel" width={40} height={40} />
                    <span className="text-2xl font-bold text-text-900 tracking-tight">Debuxel</span>
                </Link>

                <div className="bg-surface/60 border border-subtle-border/30 rounded-2xl p-8">
                    {submitted ? (
                        <div className="text-center py-6">
                            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-bold text-text-900 mb-2">Check your email</h2>
                            <p className="text-sm text-text-700 mb-6">
                                We&apos;ve sent you a password reset link. Check your inbox and follow the instructions.
                            </p>
                            <Button variant="ghost" className="text-sm font-medium text-text-700" asChild>
                                <Link href="/auth/login">
                                    <ArrowLeft className="w-4 h-4 mr-1" /> Back to login
                                </Link>
                            </Button>
                        </div>
                    ) : (
                        <>
                            <h1 className="text-2xl font-bold text-text-900 text-center mb-1">
                                Reset your password
                            </h1>
                            <p className="text-sm text-text-700 text-center mb-8">
                                Enter your email and we&apos;ll send you a reset link.
                            </p>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                {error && (
                                    <div className="text-sm text-red-500 text-center bg-red-50 rounded-xl py-2">
                                        {error}
                                    </div>
                                )}
                                <div>
                                    <label htmlFor="email" className="text-sm font-medium text-text-900 mb-1.5 block">
                                        Email
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className="h-14 rounded-xl border-subtle-border/50 bg-bg-100"
                                        {...register("email")}
                                    />
                                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                                </div>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-12 rounded-xl bg-d-black text-white hover:bg-d-black/90 font-semibold transition-all duration-[180ms] hover:-translate-y-0.5"
                                >
                                    {isSubmitting ? "Sending..." : "Send Reset Link"}
                                </Button>
                            </form>

                            <p className="text-sm text-text-700 text-center mt-6">
                                <Link href="/auth/login" className="inline-flex items-center gap-1 font-medium text-text-900 hover:underline">
                                    <ArrowLeft className="w-3 h-3" /> Back to login
                                </Link>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
