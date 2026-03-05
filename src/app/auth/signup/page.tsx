"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import { useState } from "react";

import { signupWithEmail, loginWithOAuth } from "../actions";

const signupSchema = z
    .object({
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.string().email("Please enter a valid email"),
        password: z.string().min(8, "Password must be at least 8 characters"),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords don't match",
    });

type SignupForm = z.infer<typeof signupSchema>;

export default function SignupPage() {
    const [error, setError] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignupForm>({
        resolver: zodResolver(signupSchema),
    });

    const onSubmit = async (data: SignupForm) => {
        setError("");
        try {
            const formData = new FormData();
            formData.append("email", data.email);
            formData.append("password", data.password);
            formData.append("name", data.name);

            const result = await signupWithEmail(formData);
            if (result?.error) {
                setError(result.error);
            }
        } catch {
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-bg-100 relative overflow-hidden py-8">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent-warm/10 rounded-full blur-3xl" />

            <div className="w-full max-w-md mx-4 relative z-10">
                <Link
                    href="/"
                    className="flex items-center gap-2 justify-center mb-10"
                >
                    <Image src="/logo.png" alt="Debuxel" width={40} height={40} />
                    <span className="text-2xl font-bold text-text-900 tracking-tight">
                        Debuxel
                    </span>
                </Link>

                <div className="bg-surface/60 border border-subtle-border/30 rounded-2xl p-8">
                    <h1 className="text-2xl font-bold text-text-900 text-center mb-1">
                        Create your account
                    </h1>
                    <p className="text-sm text-text-700 text-center mb-8">
                        Start using developer tools for free
                    </p>

                    {/* OAuth */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        <Button
                            variant="outline"
                            className="h-12 rounded-xl border-subtle-border/50 hover:bg-surface font-medium text-sm"
                            onClick={() => loginWithOAuth("google")}
                        >
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Google
                        </Button>
                        <Button
                            variant="outline"
                            className="h-12 rounded-xl border-subtle-border/50 hover:bg-surface font-medium text-sm"
                            onClick={() => loginWithOAuth("github")}
                        >
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                        </Button>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                        <Separator className="flex-1" />
                        <span className="text-xs text-muted-text">or continue with</span>
                        <Separator className="flex-1" />
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {error && (
                            <div className="text-sm text-red-500 text-center bg-red-50 rounded-xl py-2">
                                {error}
                            </div>
                        )}
                        <div>
                            <label htmlFor="name" className="text-sm font-medium text-text-900 mb-1.5 block">
                                Full Name
                            </label>
                            <Input
                                id="name"
                                placeholder="John Doe"
                                className="h-14 rounded-xl border-subtle-border/50 bg-bg-100"
                                {...register("name")}
                            />
                            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                        </div>
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
                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-text-900 mb-1.5 block">
                                Password
                            </label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="h-14 rounded-xl border-subtle-border/50 bg-bg-100"
                                {...register("password")}
                            />
                            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="text-sm font-medium text-text-900 mb-1.5 block">
                                Confirm Password
                            </label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="••••••••"
                                className="h-14 rounded-xl border-subtle-border/50 bg-bg-100"
                                {...register("confirmPassword")}
                            />
                            {errors.confirmPassword && <p className="text-xs text-red-500 mt-1">{errors.confirmPassword.message}</p>}
                        </div>
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-12 rounded-xl bg-d-black text-white hover:bg-d-black/90 font-semibold transition-all duration-[180ms] hover:-translate-y-0.5"
                        >
                            {isSubmitting ? "Creating account..." : "Create Account"}
                        </Button>
                    </form>

                    <p className="text-sm text-text-700 text-center mt-6">
                        Already have an account?{" "}
                        <Link href="/auth/login" className="font-medium text-text-900 hover:underline">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
