"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    items?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
    {
        question: "Is Debuxel really free to use?",
        answer: "Yes! All AI tools on Debuxel are completely free with unlimited access. No credit card required, no hidden fees. We sustain the platform through sponsorships and affiliate partnerships.",
    },
    {
        question: "What AI models power Debuxel's tools?",
        answer: "Debuxel uses Google's Gemini models to power all its tools, providing state-of-the-art AI capabilities for bug fixing, code explanation, documentation generation, and more.",
    },
    {
        question: "How accurate are the AI-generated results?",
        answer: "Our tools leverage the latest AI models and are optimized for developer workflows. While AI suggestions should always be reviewed, our tools consistently provide high-quality, actionable output that saves hours of manual work.",
    },
    {
        question: "Can I use Debuxel for commercial projects?",
        answer: "Absolutely. There are no restrictions on using Debuxel's output for commercial, open-source, or personal projects. The generated code, documentation, and analysis are yours to use however you need.",
    },
    {
        question: "What programming languages are supported?",
        answer: "Debuxel supports all major programming languages including JavaScript, TypeScript, Python, Java, Go, Rust, C++, and many more. The AI models understand context across languages and frameworks.",
    },
    {
        question: "Is my code secure when using Debuxel?",
        answer: "Your code stays private. We don't store your inputs or share data with third parties. All processing happens in real-time, and your code is never used to train AI models.",
    },
    {
        question: "How is Debuxel different from ChatGPT or Copilot?",
        answer: "Debuxel is purpose-built for specific developer workflows — not general chat. Each tool is optimized for its task (debugging, documentation, API design, etc.) with structured inputs and outputs, giving you better results faster.",
    },
];

export function FAQSection({ items = defaultFAQs }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="max-w-3xl mx-auto">
            {items.map((item, i) => (
                <div key={i} className="faq-item">
                    <button
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="w-full flex items-center justify-between py-5 text-left group"
                    >
                        <span className="text-base font-medium text-text-900 pr-8 group-hover:text-accent-blue transition-colors duration-200">
                            {item.question}
                        </span>
                        <span className="shrink-0 w-6 h-6 rounded-full border border-subtle-border/50 flex items-center justify-center">
                            {openIndex === i ? (
                                <Minus className="w-3.5 h-3.5 text-text-700" />
                            ) : (
                                <Plus className="w-3.5 h-3.5 text-text-700" />
                            )}
                        </span>
                    </button>
                    <div
                        className={`faq-answer ${openIndex === i ? "open" : ""}`}
                    >
                        <p className="text-sm text-text-700 leading-relaxed pb-5">
                            {item.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
