import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";

const TOOL_PROMPTS: Record<string, string> = {
    "bug-fixer":
        "You are an expert debugger. Analyze the following error or code and provide: 1) Root cause analysis 2) Fix suggestion with code 3) Prevention tips.",
    "code-explainer":
        "You are a code teacher. Explain the following code clearly at the requested level. Include: 1) Overview 2) Line-by-line breakdown 3) Key patterns used.",
    "readme-generator":
        "You are a documentation expert. Generate a professional GitHub README in markdown for the described project. Include: title, badges, table of contents, features, installation, usage, contributing, and license sections.",
    "api-generator":
        "You are a backend architect. Generate a complete API structure with routes, controllers, models, and middleware for the described project using the specified framework.",
    "stack-recommender":
        "You are a technology consultant. Recommend the optimal tech stack for the described project. Include frontend, backend, database, infrastructure, alternatives, and scalability notes.",
    "reverse-engineer":
        "You are a code archaeologist. Analyze the repository and explain its architecture, key technologies, design patterns, data flow, and dependencies.",
    "architecture-generator":
        "You are a systems architect. Generate a complete system architecture plan including components, data flow, scaling strategy, security measures, and implementation roadmap.",
};

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ tool: string }> }
) {
    try {
        const { tool } = await params;
        const { input, accessToken } = await request.json();

        console.log("[AI API] Tool:", tool);

        // 1. Authenticate using access token from the client
        if (!accessToken) {
            console.log("[AI API] No access token provided");
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );

        const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
        if (authError || !user) {
            console.log("[AI API] Invalid token:", authError?.message);
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        console.log("[AI API] User:", user.id);

        const systemPrompt = TOOL_PROMPTS[tool];
        if (!systemPrompt) {
            return NextResponse.json({ error: "Unknown tool" }, { status: 400 });
        }

        // 2. Call Gemini and get full text (all tools are free — no usage limits)
        console.log("[AI API] Calling Gemini...");
        const result = await generateText({
            model: google("gemini-2.5-flash"),
            system: systemPrompt,
            prompt: typeof input === "string" ? input : JSON.stringify(input),
        });

        const text = result.text;
        console.log("[AI API] Response length:", text.length);

        // Record usage (fire and forget)
        supabase.from("tool_usage").insert({
            user_id: user.id,
            tool_slug: tool,
            input_size: typeof input === "string" ? input.length : 0,
        }).then(() => console.log("[AI API] Usage recorded"));

        // Return as plain text
        return new Response(text, {
            status: 200,
            headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
    } catch (error) {
        console.error("[AI API] Error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
