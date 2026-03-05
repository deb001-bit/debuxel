"use client";

import { AIToolLayout } from "@/components/dashboard/AIToolLayout";
import { LayoutDashboard } from "lucide-react";

export default function ArchitectureGeneratorPage() {
    return (
        <AIToolLayout
            slug="architecture-generator"
            title="Architecture Generator"
            description="Generates system architecture diagrams and plans."
            icon={LayoutDashboard}
            iconColor="text-indigo-500"
            iconBg="bg-indigo-50"
            fields={[
                {
                    name: "requirements",
                    label: "System Requirements",
                    type: "textarea",
                    placeholder: "Describe your system — what it needs to do, expected load, integrations...",
                },
                {
                    name: "scale",
                    label: "Expected Scale",
                    type: "select",
                    placeholder: "Select scale",
                    options: [
                        { value: "small", label: "Small (< 1k users)" },
                        { value: "medium", label: "Medium (1k - 100k users)" },
                        { value: "large", label: "Large (100k+ users)" },
                        { value: "enterprise", label: "Enterprise (1M+ users)" },
                    ],
                },
            ]}
            submitLabel="Generate Architecture"
            outputLabel="Architecture Plan"
        />
    );
}
