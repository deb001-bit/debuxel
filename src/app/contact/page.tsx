"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    subject: z.string().min(3, "Subject must be at least 3 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ContactForm>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactForm) => {
        await new Promise((r) => setTimeout(r, 1000));
        console.log("Contact form:", data);
        setSubmitted(true);
    };

    return (
        <>
            <Navbar />
            <main className="pt-20">
                <section className="py-16 md:py-24 relative overflow-hidden">
                    <div className="gradient-blob-blue w-[400px] h-[400px] -right-20 -top-10" />
                    <div className="gradient-blob-pink w-[300px] h-[300px] -left-20 bottom-0" />
                    <div className="container-main relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                            {/* Left */}
                            <div>
                                <p className="text-xs font-semibold text-accent-blue uppercase tracking-widest mb-3">
                                    Get in Touch
                                </p>
                                <h1 className="text-4xl md:text-[48px] font-bold text-text-900 leading-[1.1] tracking-tight mb-4">
                                    Get in touch
                                </h1>
                                <p className="text-base text-text-700 leading-relaxed mb-8">
                                    Have a question, feedback, or just want to say hi? We&apos;d
                                    love to hear from you.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0">
                                            <Mail className="w-5 h-5 text-accent-blue" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-text-900 mb-1">
                                                Email
                                            </h3>
                                            <p className="text-sm text-text-700">
                                                hello.debuxel@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0">
                                            <MessageSquare className="w-5 h-5 text-accent-blue" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-text-900 mb-1">
                                                Community
                                            </h3>
                                            <p className="text-sm text-text-700">
                                                Join our developer community on{" "}
                                                <a
                                                    href="https://discord.gg/99UtsJ4n"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-accent-blue hover:underline font-medium"
                                                >
                                                    Discord
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right – Form */}
                            <div className="glass-card rounded-2xl p-6 md:p-8">
                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                                            <Send className="w-6 h-6 text-green-500" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-text-900 mb-2">
                                            Message sent!
                                        </h3>
                                        <p className="text-sm text-text-700">
                                            We&apos;ll get back to you as soon as possible.
                                        </p>
                                    </div>
                                ) : (
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="space-y-5"
                                    >
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="text-sm font-medium text-text-900 mb-1.5 block"
                                            >
                                                Name
                                            </label>
                                            <Input
                                                id="name"
                                                placeholder="Your name"
                                                className="h-11 rounded-xl border-subtle-border/50 bg-bg-100"
                                                {...register("name")}
                                            />
                                            {errors.name && (
                                                <p className="text-xs text-red-500 mt-1">
                                                    {errors.name.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="text-sm font-medium text-text-900 mb-1.5 block"
                                            >
                                                Email
                                            </label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="you@example.com"
                                                className="h-11 rounded-xl border-subtle-border/50 bg-bg-100"
                                                {...register("email")}
                                            />
                                            {errors.email && (
                                                <p className="text-xs text-red-500 mt-1">
                                                    {errors.email.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="subject"
                                                className="text-sm font-medium text-text-900 mb-1.5 block"
                                            >
                                                Subject
                                            </label>
                                            <Input
                                                id="subject"
                                                placeholder="What's this about?"
                                                className="h-11 rounded-xl border-subtle-border/50 bg-bg-100"
                                                {...register("subject")}
                                            />
                                            {errors.subject && (
                                                <p className="text-xs text-red-500 mt-1">
                                                    {errors.subject.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="text-sm font-medium text-text-900 mb-1.5 block"
                                            >
                                                Message
                                            </label>
                                            <Textarea
                                                id="message"
                                                placeholder="Tell us more..."
                                                rows={4}
                                                className="rounded-xl border-subtle-border/50 bg-bg-100 resize-none"
                                                {...register("message")}
                                            />
                                            {errors.message && (
                                                <p className="text-xs text-red-500 mt-1">
                                                    {errors.message.message}
                                                </p>
                                            )}
                                        </div>
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full h-11 rounded-xl btn-primary-gradient font-semibold"
                                        >
                                            {isSubmitting ? "Sending..." : "Send Message"}
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
