"use client";

import { AIToolLayout } from "@/components/dashboard/AIToolLayout";
import { Bug } from "lucide-react";

export default function BugFixerPage() {
    return (
        <AIToolLayout
            slug="bug-fixer"
            title="AI Bug Fixer"
            description="Paste error messages or code to receive explanations and fixes."
            icon={Bug}
            iconColor="text-red-500"
            iconBg="bg-red-50"
            fields={[
                {
                    name: "code",
                    label: "Error / Code",
                    type: "textarea",
                    placeholder: "Paste your error message, stack trace, or buggy code here...",
                },
                {
                    name: "language",
                    label: "Language",
                    type: "select",
                    placeholder: "Select language",
                    options: [
                        { value: "javascript", label: "JavaScript" },
                        { value: "typescript", label: "TypeScript" },
                        { value: "python", label: "Python" },
                        { value: "java", label: "Java" },
                        { value: "go", label: "Go" },
                        { value: "rust", label: "Rust" },
                        { value: "cpp", label: "C++" },
                        { value: "other", label: "Other" },
                    ],
                },
            ]}
            submitLabel="Fix Error"
            outputLabel="AI Fix"
        />
    );
}
