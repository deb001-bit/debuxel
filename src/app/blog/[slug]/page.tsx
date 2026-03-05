import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AdContainer } from "@/components/ads/AdContainer";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const posts: Record<
    string,
    {
        title: string;
        category: string;
        readTime: string;
        date: string;
        content: string;
    }
> = {
    "getting-started-with-debuxel": {
        title: "Getting Started with Debuxel: A Complete Guide",
        category: "Tutorial",
        readTime: "5 min read",
        date: "Mar 1, 2026",
        content: `Debuxel is a developer productivity platform that brings together a suite of powerful tools — all in one place. Whether you need to debug an error, generate documentation, or plan your system architecture, Debuxel has you covered.

## Getting Started

### Step 1: Create Your Account
Head over to the signup page and create your free account. No credit card required — you get 5 tool uses per day on the free plan.

### Step 2: Explore the Dashboard
Once logged in, you'll land on your dashboard. Here you'll see all available tools, your usage stats, and quick access links.

### Step 3: Pick a Tool
Choose from our suite of developer tools:
- **Bug Fixer** — Paste error messages and get instant fixes
- **Code Explainer** — Understand any code snippet in seconds
- **README Generator** — Create professional documentation automatically
- **API Generator** — Generate boilerplate API code from descriptions
- **Stack Recommender** — Get technology recommendations for your project
- **Reverse Engineer** — Analyze repositories and understand architecture
- **Architecture Generator** — Design system architecture plans

### Step 4: Get Results
Paste your input — code, errors, descriptions — and get instant, actionable output. Copy it, download it, or iterate on it.

## Tips for Getting the Best Results

1. **Be specific** — The more context you provide, the better the output
2. **Include error messages** — Full stack traces help the Bug Fixer pinpoint issues
3. **Describe your constraints** — Tell the Stack Recommender about budget, scale, and team size
4. **Iterate** — Run the tool multiple times with refined input for better results

## What's Next?
Explore each tool in the dashboard and see how Debuxel can save you hours every week. All tools are completely free to use.`,
    },
    "ai-debugging-best-practices": {
        title: "AI Debugging Best Practices for Modern Developers",
        category: "Engineering",
        readTime: "7 min read",
        date: "Feb 25, 2026",
        content: `Debugging is one of the most time-consuming parts of software development. Modern tools can dramatically cut down the time you spend hunting for bugs. Here are best practices to make the most of automated debugging.

## 1. Provide Full Context

When debugging, don't just paste the error message — include the surrounding code. The more context available, the more accurate the diagnosis.

\`\`\`javascript
// Instead of just:
// "TypeError: Cannot read properties of undefined"

// Provide the full context:
const users = await fetchUsers();
const names = users.map(u => u.name); // Error occurs here
\`\`\`

## 2. Include Stack Traces

Stack traces are goldmines of information. They tell you exactly where the error originated and the call chain that led to it.

## 3. Describe Expected vs Actual Behavior

"This function should return an array of users, but it returns undefined" is much more helpful than "it doesn't work."

## 4. Check Your Assumptions

Common bugs come from incorrect assumptions:
- **Async/await**: Forgetting to await a promise
- **Null references**: Accessing properties on undefined values
- **Type mismatches**: Passing strings where numbers are expected
- **Scope issues**: Variables not accessible where you think they are

## 5. Reproduce Consistently

Before debugging, make sure you can reproduce the issue reliably. Intermittent bugs are the hardest to fix — nail down the reproduction steps first.

## 6. Use Incremental Debugging

Instead of trying to fix everything at once, isolate the problem:
1. Identify the failing function
2. Test its inputs and outputs independently
3. Add logging at key points
4. Narrow down to the exact line

## Conclusion

Modern debugging tools save hours, but they work best when you give them good input. Follow these practices to get faster, more accurate fixes every time.`,
    },
    "readme-documentation-matters": {
        title: "Why Good README Documentation Matters",
        category: "Best Practices",
        readTime: "4 min read",
        date: "Feb 20, 2026",
        content: `Your README is the front door to your project. It's the first thing developers see, and it determines whether they'll use your project or move on.

## Why It Matters

- **First impressions** — A well-written README signals a well-maintained project
- **Adoption** — Clear setup instructions reduce friction for new users
- **Contributions** — Good docs attract contributors
- **SEO** — README content is indexed by search engines

## What Makes a Great README

### 1. Clear Project Description
Start with a one-liner that explains what your project does. Follow with a paragraph that covers the "why."

### 2. Quick Start Guide
Get users from zero to running in under 5 steps:
\`\`\`bash
git clone https://github.com/you/project
cd project
npm install
npm run dev
\`\`\`

### 3. Feature List
Bullet points work great. Keep them scannable.

### 4. API Reference
If applicable, document your public API with examples.

### 5. Contributing Guidelines
Tell people how to contribute — coding standards, PR process, issue templates.

### 6. License
Always include a license. MIT is the most permissive and popular choice.

## Tools That Help

Debuxel's README Generator takes your project details and creates a professional, comprehensive README in seconds. Just provide your project name, description, and tech stack — the tool handles the rest.

## Final Tip

Update your README as your project evolves. Stale documentation is worse than no documentation.`,
    },
    "choosing-the-right-tech-stack": {
        title: "How to Choose the Right Tech Stack in 2026",
        category: "Guide",
        readTime: "8 min read",
        date: "Feb 15, 2026",
        content: `Choosing a tech stack is one of the most important decisions in any project. The right choice accelerates development; the wrong one creates technical debt that haunts you for years.

## Key Factors to Consider

### 1. Project Requirements
- **Real-time features?** → Consider WebSockets, Socket.io
- **SEO important?** → SSR frameworks like Next.js
- **Mobile app?** → React Native, Flutter, or native
- **Heavy computation?** → Consider Go, Rust, or specialized backends

### 2. Team Expertise
Don't pick a stack your team doesn't know unless you have time to learn. Productivity with a familiar stack usually beats theoretical advantages of an unfamiliar one.

### 3. Ecosystem & Community
Popular technologies have:
- More tutorials and Stack Overflow answers
- More libraries and integrations
- Easier hiring
- Longer-term support

### 4. Scalability
Think about where you'll be in 12 months:
- **0-1k users**: Almost anything works
- **1k-100k users**: Need good architecture, caching
- **100k+ users**: Need horizontal scaling, microservices consideration

### 5. Budget
Open-source and free-tier services can get you very far:
- **Vercel** — Free hosting for Next.js
- **Supabase** — Free PostgreSQL + Auth
- **Cloudflare** — Free CDN and DDoS protection

## Popular Stacks in 2026

| Stack | Best For |
|-------|----------|
| Next.js + Supabase | Full-stack web apps |
| React Native + Firebase | Cross-platform mobile |
| Go + PostgreSQL | High-performance APIs |
| Python + FastAPI | Data-heavy backends |
| Rust + Actix | Systems programming |

## How Debuxel Helps

Use the Stack Recommender tool — describe your project, constraints, and scale, and get a tailored technology recommendation with detailed reasoning for each choice.`,
    },
    "api-design-principles": {
        title: "API Design Principles Every Developer Should Know",
        category: "Engineering",
        readTime: "6 min read",
        date: "Feb 10, 2026",
        content: `A well-designed API is intuitive, consistent, and a pleasure to work with. Here are the principles that separate great APIs from frustrating ones.

## 1. Use Consistent Naming

\`\`\`
✅ GET  /users
✅ GET  /users/:id
✅ POST /users
✅ PUT  /users/:id

❌ GET  /getUsers
❌ GET  /user/fetch/:id
❌ POST /createNewUser
\`\`\`

Use nouns for resources, HTTP methods for actions.

## 2. Return Meaningful Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Server Error |

## 3. Version Your API

Always version from day one:
\`\`\`
/api/v1/users
/api/v2/users
\`\`\`

## 4. Paginate Everything

Never return unbounded lists:
\`\`\`json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150
  }
}
\`\`\`

## 5. Use Consistent Error Responses

\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "field": "email"
  }
}
\`\`\`

## 6. Document Everything

Use OpenAPI/Swagger for auto-generated, interactive documentation.

## Generate APIs Faster

Debuxel's API Generator creates complete, well-structured API boilerplate from a description. Pick your framework, describe your resources, and get production-ready code in seconds.`,
    },
    "reverse-engineering-codebases": {
        title: "Understanding Unfamiliar Codebases with AI",
        category: "Tutorial",
        readTime: "5 min read",
        date: "Feb 5, 2026",
        content: `Joining a new team or contributing to an open-source project often means navigating a codebase you've never seen before. Here's how to systematically understand unfamiliar code.

## Step 1: Start from the Entry Point

Find the main entry point:
- **Web apps**: \`index.html\`, \`app.tsx\`, or \`main.ts\`
- **APIs**: \`server.ts\`, \`main.go\`, or \`app.py\`
- **Libraries**: \`index.ts\` or the package's \`main\` field

## Step 2: Map the Architecture

Identify the high-level structure:
- What framework is used?
- How are files organized? (feature-based, layer-based)
- Where does data flow from and to?

## Step 3: Read the Tests

Tests are often the best documentation. They show:
- Expected behavior
- Edge cases
- How functions are meant to be called

## Step 4: Trace a Single Request

Pick one feature and follow it end-to-end:
1. User clicks a button
2. Frontend sends a request
3. Router maps to a handler
4. Handler processes data
5. Response returns

## Step 5: Use Tools

Debuxel's Reverse Engineer tool analyzes GitHub repositories and provides:
- Architecture overview
- Technology breakdown
- Design patterns identified
- Data flow analysis
- Dependency mapping

## Common Patterns to Recognize

- **MVC**: Model-View-Controller separation
- **Repository Pattern**: Data access abstraction
- **Middleware Pipeline**: Request processing chain
- **Event-Driven**: Pub/sub or message queues
- **Microservices**: Independent, deployable services

## Tips

- Don't try to understand everything at once
- Focus on the area you need to change
- Ask questions — no one expects you to know it all on day one
- Document what you learn for the next person`,
    },
};

export async function generateStaticParams() {
    return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = posts[slug];
    if (!post) return { title: "Post Not Found – Debuxel" };
    return {
        title: `${post.title} – Debuxel Blog`,
        description: post.content.slice(0, 160),
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = posts[slug];

    if (!post) notFound();

    return (
        <>
            <Navbar />
            <main className="pt-16">
                <article className="py-16 md:py-24">
                    <div className="container-main max-w-3xl">
                        {/* Back */}
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-700 hover:text-text-900 mb-8 transition-colors duration-[180ms]"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Blog
                        </Link>

                        {/* Blog Header Ad */}
                        <div className="mb-8">
                            <AdContainer placement="blog-header" size="leaderboard" />
                        </div>

                        {/* Header */}
                        <div className="mb-10">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-[10px] uppercase tracking-wider font-semibold text-accent-blue bg-accent-blue/10 px-2.5 py-1 rounded-md">
                                    {post.category}
                                </span>
                                <span className="flex items-center gap-1 text-xs text-muted-text">
                                    <Clock className="w-3 h-3" />
                                    {post.readTime}
                                </span>
                                <span className="flex items-center gap-1 text-xs text-muted-text">
                                    <Calendar className="w-3 h-3" />
                                    {post.date}
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-text-900 leading-[1.15] tracking-tight">
                                {post.title}
                            </h1>
                        </div>

                        {/* Content */}
                        <div className="prose prose-gray max-w-none">
                            {post.content.split("\n\n").map((block, i, arr) => {
                                // Insert inline ad at roughly the midpoint of the article
                                const midpoint = Math.floor(arr.length / 2);
                                const showInlineAd = i === midpoint;

                                const rendered = (() => {
                                    if (block.startsWith("## ")) {
                                        return (
                                            <h2
                                                key={i}
                                                className="text-xl font-bold text-text-900 mt-10 mb-4"
                                            >
                                                {block.replace("## ", "")}
                                            </h2>
                                        );
                                    }
                                    if (block.startsWith("### ")) {
                                        return (
                                            <h3
                                                key={i}
                                                className="text-lg font-semibold text-text-900 mt-6 mb-3"
                                            >
                                                {block.replace("### ", "")}
                                            </h3>
                                        );
                                    }
                                    if (block.startsWith("```")) {
                                        const lines = block.split("\n");
                                        const code = lines.slice(1, -1).join("\n");
                                        return (
                                            <pre
                                                key={i}
                                                className="bg-d-black text-white/90 rounded-xl p-5 my-4 overflow-x-auto font-mono text-sm leading-relaxed"
                                            >
                                                <code>{code}</code>
                                            </pre>
                                        );
                                    }
                                    if (block.startsWith("| ")) {
                                        const rows = block.split("\n").filter((r) => !r.startsWith("|-"));
                                        const headers = rows[0]
                                            ?.split("|")
                                            .filter(Boolean)
                                            .map((h) => h.trim());
                                        const dataRows = rows.slice(1).map((row) =>
                                            row
                                                .split("|")
                                                .filter(Boolean)
                                                .map((c) => c.trim())
                                        );
                                        return (
                                            <div
                                                key={i}
                                                className="overflow-x-auto my-4 rounded-xl border border-subtle-border/30"
                                            >
                                                <table className="w-full text-sm">
                                                    <thead>
                                                        <tr className="bg-surface/60">
                                                            {headers?.map((h, j) => (
                                                                <th
                                                                    key={j}
                                                                    className="text-left px-4 py-3 font-semibold text-text-900 border-b border-subtle-border/30"
                                                                >
                                                                    {h}
                                                                </th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {dataRows.map((row, j) => (
                                                            <tr
                                                                key={j}
                                                                className="border-b border-subtle-border/20 last:border-0"
                                                            >
                                                                {row.map((cell, k) => (
                                                                    <td
                                                                        key={k}
                                                                        className="px-4 py-3 text-text-700"
                                                                    >
                                                                        {cell}
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        );
                                    }
                                    if (block.startsWith("- ") || block.startsWith("1. ")) {
                                        const items = block.split("\n");
                                        const isOrdered = block.startsWith("1.");
                                        const ListTag = isOrdered ? "ol" : "ul";
                                        return (
                                            <ListTag
                                                key={i}
                                                className={`my-3 space-y-1.5 text-text-700 leading-relaxed ${isOrdered ? "list-decimal" : "list-disc"
                                                    } pl-6`}
                                            >
                                                {items.map((item, j) => (
                                                    <li key={j}>
                                                        {item.replace(/^[-\d.]+\s/, "").replace(/\*\*(.*?)\*\*/g, "$1")}
                                                    </li>
                                                ))}
                                            </ListTag>
                                        );
                                    }
                                    return (
                                        <p
                                            key={i}
                                            className="text-text-700 leading-relaxed my-4"
                                        >
                                            {block}
                                        </p>
                                    );
                                })();

                                return (
                                    <span key={`wrapper-${i}`}>
                                        {rendered}
                                        {showInlineAd && (
                                            <div className="my-8">
                                                <AdContainer placement="blog-inline" size="rectangle" />
                                            </div>
                                        )}
                                    </span>
                                );
                            })}
                        </div>

                        {/* Footer */}
                        <div className="mt-16 pt-8 border-t border-subtle-border/30">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-text-900 hover:gap-2.5 transition-all duration-[180ms]"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to all posts
                            </Link>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
