import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/FAQSection";
import { RecommendedTools } from "@/components/RecommendedTools";
import { tools } from "@/lib/tools-data";
import {
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Brain,
  Bug,
  FileText,
  Code2,
  Server,
  Layers,
  Search,
  Cpu,
} from "lucide-react";

/* Floating pill icons mapped to tool slugs */
const pillIcons: Record<string, typeof Bug> = {
  "bug-fixer": Bug,
  "code-explainer": Code2,
  "readme-generator": FileText,
  "api-generator": Server,
  "stack-recommender": Layers,
  "reverse-engineer": Search,
  "architecture-generator": Cpu,
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ===== Hero Section ===== */}
        <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
          {/* Gradient blobs */}
          <div className="gradient-blob-pink w-[500px] h-[500px] -left-20 top-10" />
          <div className="gradient-blob-blue w-[500px] h-[500px] -right-20 top-20" />
          <div className="gradient-blob-purple w-[400px] h-[400px] left-1/2 -translate-x-1/2 bottom-0" />

          <div className="container-main relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-surface mb-8">
                <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                <span className="text-xs font-medium text-text-700">
                  ✨ Introducing AI Developer Toolkit
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold text-text-900 leading-[1.05] tracking-tight mb-6">
                AI{" "}
                <span className="inline-flex items-center">
                  <span className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent-blue flex items-center justify-center mx-1.5">
                    <Zap className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </span>
                </span>{" "}
                Developer Tools.
                <br />
                <span className="gradient-text">Super Results.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-lg text-text-700 leading-relaxed max-w-xl mx-auto">
                Free AI-powered tools for debugging, code explanation, and
                documentation. Available 24/7, across every framework.
              </p>
            </div>

            {/* ===== Central Card with Floating Pills ===== */}
            <div className="relative max-w-2xl mx-auto mb-8">
              {/* Central card */}
              <div className="mx-auto w-44 h-44 md:w-52 md:h-52 glass-card rounded-3xl flex flex-col items-center justify-center gap-3 shadow-lg">
                <Image
                  src="/logo.png"
                  alt="Debuxel"
                  width={56}
                  height={56}
                  className="drop-shadow-md"
                />
                <span className="text-sm font-bold text-text-900 tracking-tight">
                  DEBUXEL
                </span>
                <Link
                  href="/auth/signup"
                  className="text-xs font-medium text-white bg-accent-blue hover:bg-accent-blue-deep px-4 py-1.5 rounded-full transition-colors duration-200"
                >
                  Get Started
                </Link>
              </div>

              {/* Floating Feature Pills */}
              {tools.slice(0, 6).map((tool, i) => {
                const Icon = pillIcons[tool.slug] || Zap;
                const positions = [
                  "left-0 top-4 md:-left-8 md:top-6",
                  "left-2 bottom-0 md:-left-4 md:bottom-4",
                  "left-1/2 -translate-x-1/2 -bottom-10",
                  "right-0 top-4 md:-right-8 md:top-6",
                  "right-2 bottom-0 md:-right-4 md:bottom-4",
                  "right-1/4 -top-8 md:right-1/4 md:-top-6",
                ];
                const delays = [
                  "animate-float",
                  "animate-float-reverse",
                  "animate-float-slow",
                  "animate-float-reverse",
                  "animate-float",
                  "animate-float-slow",
                ];
                return (
                  <div
                    key={tool.slug}
                    className={`absolute feature-pill ${positions[i]} ${delays[i]} hidden sm:inline-flex`}
                  >
                    <Icon className="w-4 h-4 text-accent-blue" />
                    <span>{tool.shortName}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== Social Proof ===== */}
        <section className="py-12 border-t border-subtle-border/30">
          <div className="container-main text-center">
            <p className="text-xs font-medium text-muted-text uppercase tracking-widest mb-6">
              Trusted by developers around the world
            </p>
            <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
              {[
                { value: "7+", label: "AI Tools" },
                { value: "100%", label: "Free" },
                { value: "<5s", label: "Response" },
                { value: "24/7", label: "Available" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-bold text-text-900">{s.value}</p>
                  <p className="text-xs text-muted-text mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Feature Showcase – Chat Demo ===== */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="gradient-blob-blue w-[400px] h-[400px] -right-32 top-1/2 -translate-y-1/2" />
          <div className="container-main relative z-10">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-accent-blue uppercase tracking-widest mb-3">
                Discover Your AI Workforce
              </p>
              <h2 className="text-3xl md:text-[48px] font-bold text-text-900 leading-[1.1] mb-4">
                Transform{" "}
                <span className="inline-flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-accent-blue flex items-center justify-center mx-1">
                    <Zap className="w-4 h-4 text-white" />
                  </span>
                </span>{" "}
                your workflow
                <br />
                with the AI{" "}
                <span className="gradient-text">Developer Toolkit</span>
              </h2>
              <p className="text-base text-text-700 max-w-lg mx-auto">
                Empower your coding with Debuxel&apos;s specialized AI tools that
                understand your code, debug issues, and generate documentation automatically.
              </p>
            </div>

            {/* Chat Demo Mockup */}
            <div className="max-w-2xl mx-auto">
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  <span className="ml-2 text-xs text-muted-text">
                    Debuxel AI Bug Fixer
                  </span>
                </div>

                {/* User message */}
                <div className="flex gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-bg-90 flex items-center justify-center shrink-0 text-xs font-bold text-text-700">
                    U
                  </div>
                  <div className="bg-bg-90 rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-text-700">
                      I&apos;ve pasted my error. HERE is the error: <code className="text-xs bg-white/60 px-1.5 py-0.5 rounded font-mono">TypeError: Cannot read properties of undefined (reading &apos;map&apos;)</code>. It&apos;s breaking the entire feed, and I&apos;ve noticed it only happens on priority delivery, and I&apos;m clueless.
                    </p>
                  </div>
                </div>

                {/* AI response */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 text-accent-blue" />
                  </div>
                  <div className="glass-surface rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-text-700 mb-2">
                      The variable is <strong>undefined</strong> before the <code className="text-xs bg-white/60 px-1.5 py-0.5 rounded font-mono">.map()</code> call. Here&apos;s the fix:
                    </p>
                    <pre className="bg-[#0F172A] text-green-400 text-xs rounded-xl p-3 font-mono overflow-x-auto">
                      <code>{`// ✅ Add optional chaining\nconst items = data?.items?.map(item => (\n  <FeedItem key={item.id} {...item} />\n)) ?? [];`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 2×2 Feature Grid ===== */}
        <section className="py-20 md:py-28 bg-bg-90">
          <div className="container-main">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: Brain,
                  title: "Surprisingly Accurate",
                  desc: "Debuxel uses advanced AI to understand every error, code pattern, and architecture choice — delivering actionable, context-aware results in every conversation.",
                },
                {
                  icon: Layers,
                  title: "Seamless Integration",
                  desc: "Debuxel integrates with popular developer workflows across every channel, delivering a polished result in every conversation.",
                },
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  desc: "Get responses in under 5 seconds. No waiting, no loading bars. Paste your input, get instant AI-powered output — ready to copy and use.",
                },
                {
                  icon: Shield,
                  title: "Private & Secure",
                  desc: "Your code stays yours. We don't store inputs, share data, or train models on your code. Real-time processing, zero data retention.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="glass-card rounded-2xl p-7 card-hover"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-5">
                    <feature.icon className="w-5 h-5 text-accent-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-700 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== How It Works ===== */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="gradient-blob-pink w-[300px] h-[300px] -left-20 top-1/3" />
          <div className="container-main relative z-10">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-accent-blue uppercase tracking-widest mb-3">
                Easy Setup
              </p>
              <h2 className="text-3xl md:text-[48px] font-bold text-text-900 leading-[1.1] mb-4">
                How It Works
              </h2>
              <p className="text-base text-text-700 max-w-lg mx-auto">
                Discover how Debuxel transforms your workflow in three simple steps.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 relative">
                {/* Dotted connector line (desktop only) */}
                <div className="hidden md:block absolute top-1/2 left-[16.5%] right-[16.5%] h-px border-t-2 border-dashed border-subtle-border/50 -translate-y-1/2 z-0" />

                {[
                  {
                    step: "1",
                    icon: Search,
                    title: "Choose a Tool",
                    desc: "Pick from our suite of specialized AI tools — each built for a specific developer workflow.",
                    color: "bg-blue-50 text-accent-blue",
                  },
                  {
                    step: "2",
                    icon: Code2,
                    title: "Paste Your Input",
                    desc: "Paste your code, error messages, or project description. Debuxel understands context instantly.",
                    color: "bg-purple-50 text-accent-purple",
                  },
                  {
                    step: "3",
                    icon: Zap,
                    title: "Get Results",
                    desc: "Receive instant, actionable output — fixes, documentation, API designs, or architecture plans.",
                    color: "bg-green-50 text-green-600",
                  },
                ].map((item) => (
                  <div key={item.step} className="relative z-10 flex flex-col items-center text-center px-4">
                    <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-5 shadow-sm`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-accent-blue uppercase tracking-widest mb-2">
                      Step {item.step}
                    </span>
                    <h3 className="text-base font-semibold text-text-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-700 leading-relaxed max-w-[260px]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== Tool Cards ===== */}
        <section className="py-20 md:py-28 bg-bg-90">
          <div className="container-main">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-[48px] font-bold text-text-900 leading-[1.1] mb-4">
                Everything you need to build faster
              </h2>
              <p className="text-base text-text-700 max-w-lg mx-auto">
                A centralized toolkit for developer productivity. All tools free, forever.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.slug}`}
                    className="group"
                  >
                    <div className="glass-card rounded-2xl p-6 h-full card-hover">
                      <div
                        className={`w-11 h-11 rounded-xl ${tool.bgColor} flex items-center justify-center mb-4`}
                      >
                        <Icon className={`w-5 h-5 ${tool.color}`} />
                      </div>
                      <h3 className="text-base font-semibold text-text-900 mb-1.5">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-text-700 leading-relaxed mb-4">
                        {tool.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-blue group-hover:gap-2 transition-all duration-200">
                        Try it free
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="gradient-blob-purple w-[300px] h-[300px] -right-20 bottom-10" />
          <div className="container-main relative z-10">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-[48px] font-bold text-text-900 leading-[1.1] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-text-700 max-w-lg mx-auto">
                Get answers to commonly asked questions about our AI tools.
              </p>
            </div>
            <FAQSection />
          </div>
        </section>

        {/* ===== Recommended Tools (Affiliate) ===== */}
        <section className="py-20 md:py-28 bg-bg-90">
          <div className="container-main">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-[48px] font-bold text-text-900 leading-[1.1] mb-4">
                Tools we recommend
              </h2>
              <p className="text-base text-text-700 max-w-lg mx-auto">
                Trusted developer tools that pair perfectly with Debuxel.
              </p>
            </div>
            <RecommendedTools />
          </div>
        </section>

        {/* ===== Final CTA ===== */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="gradient-blob-pink w-[400px] h-[400px] left-0 top-0" />
          <div className="gradient-blob-blue w-[400px] h-[400px] right-0 bottom-0" />

          <div className="container-main relative z-10 text-center">
            <h2 className="text-3xl md:text-[48px] font-bold text-text-900 leading-[1.1] mb-4">
              Start Building Smarter
            </h2>
            <p className="text-base text-text-700 max-w-lg mx-auto mb-8">
              Join thousands of developers using Debuxel to debug, document, and
              design. Completely free, forever.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="h-12 px-8 rounded-xl btn-primary-gradient text-base font-semibold"
                asChild
              >
                <Link href="/auth/signup">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="h-12 px-8 rounded-xl text-base font-medium text-text-700 border border-subtle-border/50 hover:bg-white/60"
                asChild
              >
                <Link href="/products">Explore Tools</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
