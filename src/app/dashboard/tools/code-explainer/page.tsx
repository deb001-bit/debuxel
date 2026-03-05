"use client";

import { AIToolLayout } from "@/components/dashboard/AIToolLayout";
import { Code2 } from "lucide-react";

export default function CodeExplainerPage() {
    return (
        <AIToolLayout
            slug="code-explainer"
            title="AI Code Explainer"
            description="Explains code snippets in simple terms or detailed breakdowns."
            icon={Code2}
            iconColor="text-blue-500"
            iconBg="bg-blue-50"
            fields={[
                {
                    name: "code",
                    label: "Code",
                    type: "textarea",
                    placeholder: "Paste the code you want explained...",
                },
                {
                    name: "level",
                    label: "Explanation Level",
                    type: "select",
                    placeholder: "Select level",
                    options: [
                        { value: "beginner", label: "Beginner (Simple)" },
                        { value: "intermediate", label: "Intermediate" },
                        { value: "advanced", label: "Advanced (Detailed)" },
                    ],
                },
            ]}
            submitLabel="Explain Code"
            outputLabel="Explanation"
        />
    );
}
