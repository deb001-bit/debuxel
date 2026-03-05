import { recommendedTools } from "@/lib/recommended-tools";
import { ArrowUpRight } from "lucide-react";

export function RecommendedTools() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {recommendedTools.map((tool) => (
                <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="group glass-card card-hover rounded-2xl p-5 flex flex-col items-center text-center"
                >
                    {/* Logo */}
                    <div className="w-14 h-14 rounded-xl bg-bg-90 border border-subtle-border/30 flex items-center justify-center mb-4 overflow-hidden">
                        <img
                            src={tool.logoUrl}
                            alt={`${tool.name} logo`}
                            className="w-8 h-8 object-contain"
                            loading="lazy"
                        />
                    </div>

                    {/* Name */}
                    <h3 className="text-base font-semibold text-text-900 mb-1.5">
                        {tool.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-text-700 leading-relaxed mb-4 flex-1">
                        {tool.description}
                    </p>

                    {/* CTA */}
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-blue group-hover:gap-2.5 transition-all duration-150">
                        {tool.ctaText}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                </a>
            ))}
        </div>
    );
}
