"use client";

import { usePathname } from "next/navigation";

export function BackgroundGeometry() {
    const pathname = usePathname();

    // Do not show geometric background on the AI tool dashboard pages
    if (pathname.startsWith("/dashboard/tools/")) {
        return null;
    }

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Sphere 1 - Top Right – V3 Blue */}
            <div className="absolute top-40 right-[15%] w-24 h-24 bg-gradient-to-tr from-accent-blue/10 to-accent-cyan/5 border border-accent-blue/20 rounded-full backdrop-blur-md animate-[bounce_8s_ease-in-out_infinite] shadow-[inset_0_0_20px_rgba(59,130,246,0.2)]" />

            {/* Sphere 2 - Bottom Left – V3 Purple */}
            <div className="absolute bottom-32 left-[15%] w-32 h-32 bg-gradient-to-tr from-accent-purple/10 to-accent-purple/5 border border-accent-purple/20 rounded-full backdrop-blur-md animate-[bounce_10s_ease-in-out_infinite_reverse] shadow-[inset_0_0_20px_rgba(167,139,250,0.2)]" />

            {/* Sphere 3 - Center Top – V3 Warm */}
            <div className="absolute top-20 left-[40%] w-16 h-16 bg-gradient-to-tr from-accent-warm/15 to-accent-warm/5 border border-accent-warm/20 rounded-full backdrop-blur-md animate-[bounce_7s_ease-in-out_infinite] shadow-[inset_0_0_15px_rgba(253,186,116,0.2)]" />

            {/* Sphere 4 - Center Right – V3 Cyan */}
            <div className="absolute top-[60%] right-[30%] w-20 h-20 bg-gradient-to-tr from-accent-cyan/15 to-accent-cyan/5 border border-accent-cyan/20 rounded-full backdrop-blur-md animate-[bounce_9s_ease-in-out_infinite_reverse] shadow-[inset_0_0_15px_rgba(96,165,250,0.2)]" />

            {/* Sphere 5 - Bottom Right – V3 Pink */}
            <div className="absolute bottom-[10%] right-[10%] w-14 h-14 bg-gradient-to-tr from-accent-pink/15 to-accent-pink/5 border border-accent-pink/20 rounded-full backdrop-blur-md animate-[bounce_6s_ease-in-out_infinite] shadow-[inset_0_0_15px_rgba(252,165,165,0.2)]" />
        </div>
    );
}
