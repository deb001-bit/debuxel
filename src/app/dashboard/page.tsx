import Link from "next/link";
import { tools } from "@/lib/tools-data";
import { ArrowRight, Zap, Clock, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard – Debuxel",
    description: "Your Debuxel dashboard — access all AI developer tools.",
};

export default function DashboardPage() {
    return (
        <div className="max-w-5xl">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-text-900 mb-1">
                    Welcome back 👋
                </h1>
                <p className="text-sm text-text-700">
                    Ready to build something great? Pick a tool to get started.
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {[
                    {
                        icon: Zap,
                        label: "Tool Access",
                        value: "Unlimited",
                        sub: "All tools free",
                    },
                    {
                        icon: Clock,
                        label: "Time Saved",
                        value: "0h",
                        sub: "This week",
                    },
                    {
                        icon: TrendingUp,
                        label: "Total Uses",
                        value: "0",
                        sub: "All time",
                    },
                ].map((s) => (
                    <div
                        key={s.label}
                        className="glass-card rounded-2xl p-5"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                                <s.icon className="w-4 h-4 text-accent-blue" />
                            </div>
                            <span className="text-xs text-muted-text font-medium">
                                {s.label}
                            </span>
                        </div>
                        <p className="text-2xl font-bold text-text-900">{s.value}</p>
                        <p className="text-xs text-muted-text mt-0.5">{s.sub}</p>
                    </div>
                ))}
            </div>

            {/* Tools Grid */}
            <div className="mb-4">
                <h2 className="text-lg font-semibold text-text-900">Quick Access</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                        <Link
                            key={tool.slug}
                            href={`/dashboard/tools/${tool.slug}`}
                            className="group"
                        >
                            <div className="glass-card card-hover rounded-2xl p-5 h-full">
                                <div
                                    className={`w-10 h-10 rounded-xl ${tool.bgColor} flex items-center justify-center mb-3`}
                                >
                                    <Icon className={`w-5 h-5 ${tool.color}`} />
                                </div>
                                <h3 className="text-base font-semibold text-text-900 mb-1">
                                    {tool.shortName}
                                </h3>
                                <p className="text-xs text-text-700 leading-relaxed mb-3">
                                    {tool.description}
                                </p>
                                <span className="inline-flex items-center gap-1 text-xs font-medium text-accent-blue group-hover:gap-2 transition-all duration-150">
                                    Open <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
