import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { tools } from "@/lib/tools-data";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products – Debuxel",
    description:
        "Explore all developer tools: Bug Fixer, Code Explainer, README Generator, API Generator, and more.",
};

export default function ProductsPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                {/* Hero */}
                <section className="py-16 md:py-24 relative overflow-hidden">
                    <div className="gradient-blob-blue w-[400px] h-[400px] -right-20 -top-20" />
                    <div className="gradient-blob-pink w-[300px] h-[300px] -left-20 bottom-0" />
                    <div className="container-main relative z-10">
                        <div className="max-w-2xl">
                            <p className="text-xs font-semibold text-accent-blue uppercase tracking-widest mb-3">
                                All Tools
                            </p>
                            <h1 className="text-4xl md:text-[56px] font-bold text-text-900 leading-[1.1] tracking-tight mb-4">
                                Tools for Every Developer
                            </h1>
                            <p className="text-lg text-text-700 leading-relaxed">
                                A comprehensive suite of tools designed to accelerate
                                your development workflow. All free, forever.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Tools Grid */}
                <section className="pb-20 md:pb-28">
                    <div className="container-main">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {tools.map((tool) => {
                                const Icon = tool.icon;
                                return (
                                    <Link
                                        key={tool.slug}
                                        href={`/tools/${tool.slug}`}
                                        className="group"
                                    >
                                        <div className="glass-card card-hover rounded-2xl p-6 h-full flex flex-col">
                                            <div className="flex items-start justify-between mb-4">
                                                <div
                                                    className={`w-12 h-12 rounded-xl ${tool.bgColor} flex items-center justify-center`}
                                                >
                                                    <Icon className={`w-6 h-6 ${tool.color}`} />
                                                </div>
                                                <Badge
                                                    variant="secondary"
                                                    className="text-[10px] uppercase tracking-wider font-semibold"
                                                >
                                                    {tool.priority}
                                                </Badge>
                                            </div>
                                            <h3 className="text-lg font-semibold text-text-900 mb-2">
                                                {tool.name}
                                            </h3>
                                            <p className="text-sm text-text-700 leading-relaxed mb-4 flex-1">
                                                {tool.description}
                                            </p>
                                            <ul className="space-y-1.5 mb-4">
                                                {tool.features.slice(0, 3).map((f) => (
                                                    <li
                                                        key={f}
                                                        className="text-xs text-muted-text flex items-center gap-2"
                                                    >
                                                        <span className="w-1 h-1 rounded-full bg-accent-blue" />
                                                        {f}
                                                    </li>
                                                ))}
                                            </ul>
                                            <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-blue group-hover:gap-2 transition-all duration-200">
                                                Learn more <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
