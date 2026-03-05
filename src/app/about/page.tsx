import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Zap, Target, Users, Heart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About – Debuxel",
    description:
        "Debuxel is a developer productivity platform. Learn about our mission to help developers build faster.",
};

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                {/* Hero */}
                <section className="py-16 md:py-24 relative overflow-hidden">
                    <div className="gradient-blob-purple w-[400px] h-[400px] -left-20 -top-10" />
                    <div className="gradient-blob-blue w-[300px] h-[300px] right-0 bottom-0" />
                    <div className="container-main relative z-10">
                        <div className="max-w-2xl">
                            <p className="text-xs font-semibold text-accent-blue uppercase tracking-widest mb-3">
                                About Us
                            </p>
                            <h1 className="text-4xl md:text-[56px] font-bold text-text-900 leading-[1.1] tracking-tight mb-6">
                                Built for developers,{" "}
                                <span className="gradient-text">by a developer</span>
                            </h1>
                            <p className="text-lg text-text-700 leading-relaxed">
                                Debuxel is a developer productivity platform that
                                provides instant tools for coding, debugging, documentation, API
                                creation, and system design.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mission */}
                <section className="py-16 md:py-24 bg-bg-90">
                    <div className="container-main">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
                            <div className="glass-card rounded-2xl p-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-text-900 leading-[1.1] mb-4">
                                    Our Mission
                                </h2>
                                <p className="text-base text-text-700 leading-relaxed mb-4">
                                    Developers spend enormous amounts of time on repetitive tasks
                                    — debugging errors, understanding unfamiliar codebases,
                                    writing documentation, and researching technology stacks.
                                </p>
                                <p className="text-base text-text-700 leading-relaxed">
                                    We believe AI can eliminate these bottlenecks. Debuxel
                                    centralizes the tools developers need most, powered by
                                    cutting-edge AI, so they can focus on what actually matters:
                                    building great software.
                                </p>
                            </div>
                            <div className="glass-card rounded-2xl p-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-text-900 leading-[1.1] mb-4">
                                    Our Vision
                                </h2>
                                <p className="text-base text-text-700 leading-relaxed">
                                    Debuxel will evolve into a full AI development ecosystem where
                                    developers can design, debug, build, and deploy applications
                                    faster using smart tools. We&apos;re building the
                                    developer platform of the future.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="py-16 md:py-24 relative overflow-hidden">
                    <div className="gradient-blob-pink w-[300px] h-[300px] -right-20 top-10" />
                    <div className="container-main relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-text-900 leading-[1.1] mb-10 text-center">
                            What drives us
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {[
                                {
                                    icon: Zap,
                                    title: "Speed",
                                    desc: "Every feature is designed for maximum developer velocity.",
                                },
                                {
                                    icon: Target,
                                    title: "Focus",
                                    desc: "We solve real problems that developers face every day.",
                                },
                                {
                                    icon: Users,
                                    title: "Community",
                                    desc: "Built with and for the global developer community.",
                                },
                                {
                                    icon: Heart,
                                    title: "Quality",
                                    desc: "We ship polished, reliable tools — no half-measures.",
                                },
                            ].map((v) => (
                                <div
                                    key={v.title}
                                    className="text-center glass-card rounded-2xl p-6 card-hover"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                                        <v.icon className="w-6 h-6 text-accent-blue" />
                                    </div>
                                    <h3 className="text-base font-semibold text-text-900 mb-2">
                                        {v.title}
                                    </h3>
                                    <p className="text-sm text-text-700">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
