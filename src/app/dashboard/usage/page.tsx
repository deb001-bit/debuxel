import { createClient } from "@/lib/supabase/server";
import { BarChart3, Zap, Calendar, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Usage – Debuxel",
    description: "Track your Debuxel tool usage and limits.",
};

const defaultToolUsage = [
    { name: "bug-fixer", label: "Bug Fixer", uses: 0, color: "bg-red-400" },
    { name: "code-explainer", label: "Code Explainer", uses: 0, color: "bg-blue-400" },
    { name: "readme-generator", label: "README Gen", uses: 0, color: "bg-green-400" },
    { name: "api-generator", label: "API Gen", uses: 0, color: "bg-purple-400" },
    { name: "stack-recommender", label: "Stack Rec", uses: 0, color: "bg-teal-400" },
    { name: "reverse-engineer", label: "Reverse Eng", uses: 0, color: "bg-orange-400" },
    { name: "architecture-generator", label: "Arch Gen", uses: 0, color: "bg-yellow-400" },
];

export default async function UsagePage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    let usageData: { tool_name: string; created_at: string }[] = [];
    if (user) {
        // We catch errors just in case the table is brand new or hasn't been created yet
        const { data } = await supabase
            .from('tool_usage')
            .select('tool_name, created_at')
            .eq('user_id', user.id);

        if (data) usageData = data;
    }

    // Process data
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];

    // Calculate Today
    const todayUses = usageData.filter(u => new Date(u.created_at).toISOString().split('T')[0] === todayStr).length;

    // Calculate This Week (last 7 days)
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const weekUses = usageData.filter(u => new Date(u.created_at) >= weekAgo).length;

    // Calculate This Month (last 30 days)
    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const monthUses = usageData.filter(u => new Date(u.created_at) >= monthAgo).length;

    // Tool Breakdown
    const toolCounts = usageData.reduce((acc: Record<string, number>, curr) => {
        acc[curr.tool_name] = (acc[curr.tool_name] || 0) + 1;
        return acc;
    }, {});

    const toolUsage = defaultToolUsage.map(t => ({
        ...t,
        uses: toolCounts[t.name] || 0
    })).sort((a, b) => b.uses - a.uses).slice(0, 5); // top 5

    // Weekly activity chart (last 7 days)
    const usageDays = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
        const dayStr = d.toISOString().split('T')[0];
        const dayName = d.toLocaleDateString("en-US", { weekday: 'short' });
        const count = usageData.filter(u => new Date(u.created_at).toISOString().split('T')[0] === dayStr).length;
        usageDays.push({ day: dayName, count });
    }

    const DAILY_LIMIT = 5; // Free plan limit
    const remaining = Math.max(0, DAILY_LIMIT - todayUses);

    const maxUses = Math.max(1, ...toolUsage.map((t) => t.uses)); // prevent division by zero
    const maxDayCount = Math.max(1, ...usageDays.map((d) => d.count));

    return (
        <div className="max-w-4xl">
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-text-900 mb-1">
                    Usage
                </h1>
                <p className="text-sm text-text-700">
                    Track your real-time tool usage and remaining limits.
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-10">
                {[
                    { icon: Zap, label: "Today", value: `${remaining} / ${DAILY_LIMIT}`, sub: "uses remaining" },
                    { icon: Calendar, label: "This Week", value: weekUses.toString(), sub: "total uses" },
                    { icon: TrendingUp, label: "This Month", value: monthUses.toString(), sub: "total uses" },
                    { icon: BarChart3, label: "Plan", value: "Free", sub: "5 uses / day" },
                ].map((s) => (
                    <div
                        key={s.label}
                        className="bg-surface/60 border border-subtle-border/30 rounded-2xl p-5"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <s.icon className="w-4 h-4 text-accent-purple" />
                            <span className="text-xs text-muted-text font-medium">{s.label}</span>
                        </div>
                        <p className="text-xl font-bold text-text-900">{s.value}</p>
                        <p className="text-xs text-muted-text">{s.sub}</p>
                    </div>
                ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Weekly Activity */}
                <div className="bg-surface/60 border border-subtle-border/30 rounded-2xl p-6">
                    <h2 className="text-sm font-semibold text-text-900 mb-6">
                        Weekly Activity
                    </h2>
                    <div className="flex items-end justify-between gap-2 h-32">
                        {usageDays.map((day, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-2 flex-1">
                                <div className="w-full flex items-end justify-center h-24">
                                    <div
                                        className="w-8 rounded-lg bg-accent-purple/60 transition-all duration-300"
                                        style={{
                                            height: `${(day.count / maxDayCount) * 100}%`,
                                            minHeight: day.count > 0 ? "8px" : "2px",
                                        }}
                                    />
                                </div>
                                <span className="text-[10px] text-muted-text font-medium">
                                    {day.day}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tool Breakdown */}
                <div className="bg-surface/60 border border-subtle-border/30 rounded-2xl p-6">
                    <h2 className="text-sm font-semibold text-text-900 mb-6">
                        Tool Breakdown
                    </h2>
                    <div className="space-y-4">
                        {toolUsage.map((tool) => (
                            <div key={tool.name}>
                                <div className="flex items-center justify-between mb-1.5">
                                    <span className="text-xs font-medium text-text-700">
                                        {tool.label}
                                    </span>
                                    <span className="text-xs text-muted-text">
                                        {tool.uses} uses
                                    </span>
                                </div>
                                <div className="h-2 rounded-full bg-bg-100 overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${tool.color} transition-all duration-500`}
                                        style={{ width: `${(tool.uses / maxUses) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
