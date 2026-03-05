import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
    BookOpen,
    Code2,
    Zap,
    Shield,
    Terminal,
    ArrowRight,
    ExternalLink,
} from "lucide-react";

const sections = [
    {
        icon: Zap,
        title: "Getting Started",
        description:
            "Learn the basics of Debuxel and start using AI-powered developer tools in minutes.",
        items: [
            "Create a free account to access all tools",
            "Navigate to the Dashboard and pick any tool",
            "Paste your code, error, or project description",
            "Review the AI-generated output and iterate",
        ],
    },
    {
        icon: Terminal,
        title: "Available Tools",
        description: "Debuxel offers 7 developer-focused AI tools:",
        items: [
            "Bug Fixer — Paste error messages and get instant fix suggestions",
            "Code Explainer — Understand any code snippet line by line",
            "README Generator — Create professional GitHub READMEs",
            "API Generator — Design REST API structures and endpoints",
            "Stack Recommender — Get tech stack suggestions for your project",
            "Reverse Engineer — Analyze codebases and understand architecture",
            "Architecture Generator — Design scalable system architectures",
        ],
    },
    {
        icon: Shield,
        title: "Usage Limits & Plans",
        description: "Understand how usage limits work on the platform.",
        items: [
            "Free tier: 5 AI generations per day per user",
            "Usage resets daily at midnight (server time)",
            "Pro plan coming soon with unlimited generations",
            "Your code is never stored — we only process it in real-time",
        ],
    },
    {
        icon: Code2,
        title: "Tips for Best Results",
        description:
            "Get the most out of Debuxel's AI tools with these tips.",
        items: [
            "Provide as much context as possible (full error stack traces, relevant code)",
            "Specify the programming language when using Bug Fixer or Code Explainer",
            "For README generation, describe your project features and tech stack",
            "Always review AI output before using in production — AI can make mistakes",
        ],
    },
];

export default function DocsPage() {
    return (
        <>
            <Navbar />
            <main className="pt-16">
                <section className="py-16 md:py-24 relative overflow-hidden">
                    <div className="absolute top-10 left-1/4 w-80 h-80 bg-accent-purple/15 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent-teal/10 rounded-full blur-3xl" />

                    <div className="container-main relative z-10">
                        {/* Header */}
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/20 mb-6">
                                <BookOpen className="w-4 h-4 text-accent-purple" />
                                <span className="text-xs font-medium text-accent-purple">
                                    Documentation
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-[48px] font-bold text-text-900 leading-[1.1] tracking-tight mb-4">
                                Learn how to use Debuxel
                            </h1>
                            <p className="text-base md:text-lg text-text-700 leading-relaxed max-w-xl mx-auto">
                                Everything you need to know about using our
                                AI-powered developer tools effectively.
                            </p>
                        </div>

                        {/* Sections */}
                        <div className="max-w-3xl mx-auto space-y-8">
                            {sections.map((section) => {
                                const SectionIcon = section.icon;
                                return (
                                    <div
                                        key={section.title}
                                        className="bg-surface/60 border border-subtle-border/30 rounded-2xl p-6 md:p-8"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center">
                                                <SectionIcon className="w-5 h-5 text-accent-purple" />
                                            </div>
                                            <h2 className="text-xl font-bold text-text-900">
                                                {section.title}
                                            </h2>
                                        </div>
                                        <p className="text-sm text-text-700 leading-relaxed mb-4">
                                            {section.description}
                                        </p>
                                        <ul className="space-y-2.5">
                                            {section.items.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-3 text-sm text-text-700"
                                                >
                                                    <span className="w-5 h-5 rounded-full bg-accent-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                                                        <span className="text-[10px] font-bold text-accent-teal">
                                                            {i + 1}
                                                        </span>
                                                    </span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <div className="max-w-3xl mx-auto mt-12 text-center">
                            <div className="bg-surface/60 border border-subtle-border/30 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-text-900 mb-2">
                                    Need more help?
                                </h3>
                                <p className="text-sm text-text-700 mb-6">
                                    Reach out to us and we&apos;ll get back to
                                    you as soon as possible.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-d-black text-white text-sm font-semibold hover:bg-d-black/90 transition-all duration-[180ms] hover:-translate-y-0.5"
                                    >
                                        Contact Support
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <a
                                        href="mailto:hello.debuxel@gmail.com"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-subtle-border/50 text-sm font-medium text-text-700 hover:bg-surface/50 transition-all duration-[180ms]"
                                    >
                                        hello.debuxel@gmail.com
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
