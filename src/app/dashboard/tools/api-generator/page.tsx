"use client";

import { AIToolLayout } from "@/components/dashboard/AIToolLayout";
import { Server } from "lucide-react";

export default function ApiGeneratorPage() {
    return (
        <AIToolLayout
            slug="api-generator"
            title="API Generator"
            description="Generates boilerplate API structure and endpoints."
            icon={Server}
            iconColor="text-purple-500"
            iconBg="bg-purple-50"
            fields={[
                {
                    name: "description",
                    label: "Project Description",
                    type: "textarea",
                    placeholder: "Describe your API project — what resources it manages, what operations it supports...",
                },
                {
                    name: "framework",
                    label: "Framework",
                    type: "select",
                    placeholder: "Select framework",
                    options: [
                        { value: "express", label: "Express.js" },
                        { value: "fastify", label: "Fastify" },
                        { value: "nextjs", label: "Next.js API Routes" },
                        { value: "django", label: "Django REST" },
                        { value: "flask", label: "Flask" },
                        { value: "gin", label: "Gin (Go)" },
                        { value: "spring", label: "Spring Boot" },
                    ],
                },
            ]}
            submitLabel="Generate API"
            outputLabel="Generated API"
        />
    );
}
