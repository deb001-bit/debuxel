import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog – Debuxel",
    description:
        "Developer resources, tutorials, and insights from the Debuxel team.",
};

const posts = [
    {
        slug: "getting-started-with-debuxel",
        title: "Getting Started with Debuxel: A Complete Guide",
        excerpt:
            "Learn how to use all of Debuxel's tools to supercharge your development workflow.",
        category: "Tutorial",
        readTime: "5 min read",
        date: "Mar 1, 2026",
    },
    {
        slug: "ai-debugging-best-practices",
        title: "AI Debugging Best Practices for Modern Developers",
        excerpt:
            "Discover how AI-assisted debugging can save hours of your development time with these expert tips.",
        category: "Engineering",
        readTime: "7 min read",
        date: "Feb 25, 2026",
    },
    {
        slug: "readme-documentation-matters",
        title: "Why Good README Documentation Matters",
        excerpt:
            "Great documentation drives adoption. Learn how to create READMEs that make your projects stand out.",
        category: "Best Practices",
        readTime: "4 min read",
        date: "Feb 20, 2026",
    },
    {
        slug: "choosing-the-right-tech-stack",
        title: "How to Choose the Right Tech Stack in 2026",
        excerpt:
            "A comprehensive guide to evaluating and selecting technology stacks for your next project.",
        category: "Guide",
        readTime: "8 min read",
        date: "Feb 15, 2026",
    },
    {
        slug: "api-design-principles",
        title: "API Design Principles Every Developer Should Know",
        excerpt:
            "Master the fundamentals of RESTful API design with these timeless principles and modern patterns.",
        category: "Engineering",
        readTime: "6 min read",
        date: "Feb 10, 2026",
    },
    {
        slug: "reverse-engineering-codebases",
        title: "Understanding Unfamiliar Codebases with AI",
        excerpt:
            "How to quickly understand and navigate complex codebases using reverse engineering tools.",
        category: "Tutorial",
        readTime: "5 min read",
        date: "Feb 5, 2026",
    },
];

export default function BlogPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                {/* Hero */}
                <section className="py-16 md:py-24 relative overflow-hidden">
                    <div className="gradient-blob-pink w-[350px] h-[350px] -left-20 -top-10" />
                    <div className="gradient-blob-blue w-[300px] h-[300px] right-0 bottom-0" />
                    <div className="container-main relative z-10">
                        <div className="max-w-2xl">
                            <p className="text-xs font-semibold text-accent-blue uppercase tracking-widest mb-3">
                                Resources
                            </p>
                            <h1 className="text-4xl md:text-[56px] font-bold text-text-900 leading-[1.1] tracking-tight mb-4">
                                Blog & Resources
                            </h1>
                            <p className="text-lg text-text-700">
                                Tutorials, best practices, and insights for modern developers.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Posts Grid */}
                <section className="pb-20 md:pb-28">
                    <div className="container-main">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map((post) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                                    <article className="glass-card card-hover rounded-2xl p-6 h-full flex flex-col">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-[10px] uppercase tracking-wider font-semibold text-accent-blue bg-accent-blue/10 px-2.5 py-1 rounded-md">
                                                {post.category}
                                            </span>
                                            <span className="flex items-center gap-1 text-xs text-muted-text">
                                                <Clock className="w-3 h-3" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-text-900 mb-2 group-hover:text-accent-blue transition-colors duration-200">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-text-700 leading-relaxed mb-4 flex-1">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-muted-text">
                                                {post.date}
                                            </span>
                                            <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-blue group-hover:gap-2 transition-all duration-200">
                                                Read <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
