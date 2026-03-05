"use client";

import { AIToolLayout } from "@/components/dashboard/AIToolLayout";
import { GitBranch } from "lucide-react";

export default function ReverseEngineerPage() {
    return (
        <AIToolLayout
            slug="reverse-engineer"
            title="Project Reverse Engineer"
            description="Analyzes GitHub repositories and explains architecture."
            icon={GitBranch}
            iconColor="text-orange-500"
            iconBg="bg-orange-50"
            fields={[
                {
                    name: "repoUrl",
                    label: "GitHub Repository URL",
                    type: "input",
                    placeholder: "https://github.com/username/repository",
                },
                {
                    name: "focus",
                    label: "Analysis Focus (optional)",
                    type: "select",
                    placeholder: "Select focus area",
                    options: [
                        { value: "architecture", label: "Overall Architecture" },
                        { value: "dependencies", label: "Dependencies" },
                        { value: "patterns", label: "Design Patterns" },
                        { value: "dataflow", label: "Data Flow" },
                    ],
                },
            ]}
            submitLabel="Analyze Repository"
            outputLabel="Architecture Analysis"
        />
    );
}
