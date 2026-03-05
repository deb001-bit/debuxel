"use client";

import { AIToolLayout } from "@/components/dashboard/AIToolLayout";
import { Layers } from "lucide-react";

export default function StackRecommenderPage() {
    return (
        <AIToolLayout
            slug="stack-recommender"
            title="Stack Recommender"
            description="Suggests technology stack for a project idea."
            icon={Layers}
            iconColor="text-teal-500"
            iconBg="bg-teal-50"
            fields={[
                {
                    name: "idea",
                    label: "Project Idea",
                    type: "textarea",
                    placeholder: "Describe your project idea — what it does, expected scale, target audience...",
                },
                {
                    name: "constraints",
                    label: "Constraints (optional)",
                    type: "input",
                    placeholder: "e.g., low budget, must use Python, mobile-first...",
                },
            ]}
            submitLabel="Get Recommendations"
            outputLabel="Stack Recommendation"
        />
    );
}
