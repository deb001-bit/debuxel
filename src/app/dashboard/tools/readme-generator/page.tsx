"use client";

import { AIToolLayout } from "@/components/dashboard/AIToolLayout";
import { FileText } from "lucide-react";

export default function ReadmeGeneratorPage() {
    return (
        <AIToolLayout
            slug="readme-generator"
            title="README Generator"
            description="Automatically generates GitHub README documentation."
            icon={FileText}
            iconColor="text-green-500"
            iconBg="bg-green-50"
            fields={[
                {
                    name: "projectName",
                    label: "Project Name",
                    type: "input",
                    placeholder: "My Awesome Project",
                },
                {
                    name: "description",
                    label: "Project Description",
                    type: "textarea",
                    placeholder: "Describe what your project does, its main features, and target audience...",
                },
                {
                    name: "techStack",
                    label: "Tech Stack",
                    type: "input",
                    placeholder: "e.g., React, Node.js, PostgreSQL",
                },
            ]}
            submitLabel="Generate README"
            outputLabel="Generated README"
        />
    );
}
