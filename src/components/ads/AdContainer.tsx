"use client";

import { useEffect, useRef, useState } from "react";

interface AdContainerProps {
    placement: string;
    size?: "banner" | "rectangle" | "leaderboard";
    lazy?: boolean;
    className?: string;
}

export function AdContainer({
    placement,
    size = "banner",
    lazy = true,
    className = "",
}: AdContainerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(!lazy);

    useEffect(() => {
        if (!lazy || !containerRef.current) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" }
        );

        observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, [lazy]);

    return (
        <div
            ref={containerRef}
            className={`adsense-container ${className}`}
            data-ad-slot="placeholder"
            data-ad-placement={placement}
            data-size={size}
            aria-hidden="true"
        >
            {isVisible && (
                <span className="text-xs text-muted-text/50 select-none">
                    Ad Space — {placement}
                </span>
            )}
        </div>
    );
}
