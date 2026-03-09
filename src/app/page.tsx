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
  PlayCircle,
  MessagesSquare
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
        <section className="relative overflow-visible pt-24 pb-24 md:pt-40 md:pb-32">
          {/* Subtle Background Glows */}
          <div className="gradient-blob-pink w-[600px] h-[600px] -left-32 top-0" />
          <div className="gradient-blob-blue w-[700px] h-[700px] right-0 top-10" />

          <div className="container-main relative z-10 text-center">

            {/* Top Micro-stats */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 opacity-90">
              <div className="text-left">
                <p className="text-5xl md:text-7xl font-bold tracking-tighter text-text-900 leading-none mb-1">100+</p>
                <p className="text-sm font-medium tracking-wide text-muted-text">early adopters</p>
              </div>
              <div className="text-left">
                <p className="text-5xl md:text-7xl font-bold tracking-tighter text-text-900 leading-none mb-1">24/7</p>
                <p className="text-sm font-medium tracking-wide text-muted-text">AI availability</p>
              </div>
            </div>

            {/* Massive Headline */}
            <div className="relative inline-block max-w-5xl mx-auto mb-16">
              <h1
                className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold text-text-900 leading-[0.9] tracking-tighter"
                style={{ letterSpacing: "-0.04em" }}
              >
                good tools<br />
                drive <span className="inline-flex items-center justify-center bg-accent-warm text-white rounded-3xl w-[0.8em] h-[0.8em] mx-2 shadow-action -rotate-6"><Zap className="w-1/2 h-1/2 fill-current" /></span> growth
              </h1>

              {/* Floating Action Pill 2 (Explore) */}
              <Link href="/products" className="absolute -bottom-8 -left-4 md:-bottom-12 md:-left-20 btn-action-float bg-accent-blue-deep px-8 py-4 md:px-10 md:py-6 flex items-center gap-3 z-20 animate-float-reverse cursor-pointer" style={{ transform: 'rotate(5deg)' }}>
                <MessagesSquare className="w-6 h-6 md:w-8 md:h-8 fill-white/20" />
                <span className="text-2xl md:text-4xl font-semibold tracking-tight text-white hover:text-white/90 transition-colors">explore</span>
              </Link>
            </div>

            {/* Subtitle Card */}
            <div className="max-w-3xl mx-auto bg-surface border border-subtle-border rounded-full py-6 px-10 shadow-sm mt-8">
              <p className="text-lg text-text-700 leading-relaxed font-medium">
                Access real-time AI solutions for debugging, generating APIs, and explaining complex <br className="hidden md:block" />codebases — researched, validated, and ready to fuel your productivity.
              </p>
            </div>

            <div className="mt-12 flex justify-center gap-4">
              <Button size="lg" className="bg-charcoal hover:bg-black text-white px-10 rounded-full text-lg shadow-lg hover:-translate-y-1 transition-transform" asChild>
                <Link href="/auth/signup">Get a demo</Link>
              </Button>
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

        {/* ===== Feature Showcase / Bento Grid ===== */}
        <section className="py-24 md:py-32 relative overflow-hidden bg-bg-90">
          <div className="container-main relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-900 tracking-tight leading-[1] mb-6">
                All you need to reach the right<br className="hidden md:block" />
                <span className="text-text-700">code — powered by AI</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">

              {/* Massive Feature Card 1 */}
              <div className="md:col-span-7 bg-surface rounded-[2rem] p-10 md:p-14 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[400px]">
                <div className="relative z-10 max-w-sm">
                  <div className="w-12 h-12 rounded-2xl bg-accent-action text-white flex items-center justify-center mb-8 shadow-action">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-text-900 tracking-tight leading-tight mb-4">
                    Unlock 121 million+<br />code snippets & solutions
                  </h3>
                  <p className="text-lg text-text-700 leading-relaxed mb-8">
                    Identify verified solutions across every stack. Gain real-time insights to expand your shipping speed.
                  </p>
                  <Button className="bg-charcoal hover:bg-black text-white px-8 rounded-full text-base">Try Now</Button>
                </div>

                {/* Decorative floating elements */}
                <div className="absolute right-0 bottom-0 md:-right-10 md:-bottom-10 grid grid-cols-2 gap-4 opacity-80 pointer-events-none">
                  <div className="w-32 h-32 rounded-full bg-blue-50 flex items-center justify-center shadow-lg transform -translate-x-10 translate-y-10"><Brain className="w-12 h-12 text-accent-blue" /></div>
                  <div className="w-40 h-40 rounded-full bg-purple-50 flex items-center justify-center shadow-lg"><FileText className="w-16 h-16 text-accent-purple" /></div>
                  <div className="w-36 h-36 rounded-full bg-pink-50 flex items-center justify-center shadow-lg -translate-y-12"><Bug className="w-14 h-14 text-accent-pink" /></div>
                </div>
              </div>

              {/* Right Column Stack */}
              <div className="md:col-span-5 flex flex-col gap-6">
                {/* Small Feature 1 */}
                <div className="bg-surface rounded-[2rem] p-8 md:p-10 shadow-sm flex-1 flex flex-col justify-between relative overflow-hidden">
                  <div className="w-12 h-12 rounded-2xl bg-accent-blue text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div className="ml-auto w-3/4 bg-bg-90 rounded-2xl p-4 shadow-sm border border-subtle-border mb-6 self-end">
                    <p className="text-xs text-muted-text mb-1 uppercase font-semibold">Speed</p>
                    <p className="text-4xl font-bold tracking-tighter">{"< 2s"}</p>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent-success"></div><div className="h-2 w-full bg-gray-200 rounded-full"><div className="h-full bg-accent-success rounded-full w-[97%]"></div></div></div>
                      <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent-success"></div><div className="h-2 w-full bg-gray-200 rounded-full"><div className="h-full bg-accent-success rounded-full w-[100%]"></div></div></div>
                    </div>
                  </div>
                  <p className="text-xl text-text-700 tracking-tight leading-snug">Find anyone&apos;s verified email address</p>
                </div>

                {/* Small Feature 2 */}
                <div className="bg-surface rounded-[2rem] p-8 md:p-10 shadow-sm flex-1 relative overflow-hidden">
                  <h3 className="text-3xl font-bold tracking-tight text-text-900 leading-tight mb-4 w-1/2">Find solutions in seconds</h3>
                  <p className="text-sm text-text-700 max-w-[180px]">Engage ready-to-use snippets with 414M+ verified answers</p>

                  <div className="absolute right-[-40px] bottom-4 flex -space-x-4">
                    <div className="w-24 h-24 rounded-full bg-accent-success text-white flex items-center justify-center shadow-lg border-4 border-white z-30"><Shield className="w-10 h-10" /></div>
                    <div className="w-24 h-24 rounded-full bg-accent-pink text-white flex items-center justify-center shadow-lg border-4 border-white z-20"><Search className="w-10 h-10" /></div>
                    <div className="w-24 h-24 rounded-full bg-accent-warm text-white flex items-center justify-center shadow-lg border-4 border-white z-10"><Layers className="w-10 h-10" /></div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ===== Deep Dive "3x Productivity" Header section ===== */}
        <section className="py-24 md:py-32 bg-surface text-center px-4">
          <h2 className="text-5xl md:text-[6rem] lg:text-[7rem] font-bold tracking-tighter leading-[0.9] text-text-900 max-w-6xl mx-auto">
            Unlock <span className="bg-accent-blue text-white rounded-3xl px-4 py-2 inline-block mx-2 shadow-lg -rotate-3">3x</span> more<br />
            <span className="text-muted-text">productivity with AI</span>
          </h2>

          {/* Simple flat features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 max-w-5xl mx-auto mt-24 text-left">
            {[
              { icon: Search, color: "bg-accent-blue text-white", title: "Prospector", desc: "Find and reach your ideal frameworks with verified data. Access insights from over 121 million repos in seconds." },
              { icon: Layers, color: "bg-accent-pink text-white", title: "Code Changes", desc: "Track architecture moves easily. Stay updated with new repo info and never lose connection with top projects." },
              { icon: Zap, color: "bg-accent-action text-white", title: "Builder Intent", desc: "Discover features you are ready to build. Identify intent signals and prioritize high-value code faster." },
              { icon: Cpu, color: "bg-accent-warm text-white", title: "CRM Integration", desc: "Fill your IDE with verified function profiles. Integrate seamlessly with your favorite tools to boost output." },
              { icon: Brain, color: "bg-accent-success text-white", title: "Data Enrichment", desc: "Turn any error trace into a complete context record. Enrich your logs automatically with verified AI data." },
              { icon: FileText, color: "bg-purple-600 text-white", title: "AI Research", desc: "Research any bug or framework in seconds using AI. Get instant, verified insights that keep your codebase ahead." },
            ].map(f => (
              <div key={f.title} className="flex flex-col">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm ${f.color}`}>
                  <f.icon className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold tracking-tight text-text-900 mb-3">{f.title}</h4>
                <p className="text-sm text-text-700 leading-relaxed max-w-[280px]">{f.desc}</p>
              </div>
            ))}
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

        {/* ===== Final CTA / accuracy ===== */}
        <section className="py-24 md:py-32 bg-bg-90">
          <div className="container-main">
            <div className="max-w-6xl mx-auto bg-surface rounded-[3rem] p-10 md:p-20 shadow-sm relative overflow-hidden">
              <div className="absolute top-8 left-8 bg-surface-2 px-4 py-2 rounded-full text-xs font-semibold text-text-900 flex items-center gap-2 border border-subtle-border">
                <Zap className="w-3 h-3" /> Accuracy
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-center mt-12">
                <div>
                  <h2 className="text-4xl md:text-[3.5rem] font-bold text-text-900 leading-[1.05] tracking-tight mb-6">
                    AI-powered accuracy<br />before it was cool
                  </h2>

                  <div className="relative w-64 h-64 mt-12 mb-4">
                    {/* Decoration avatars / circles */}
                    <div className="w-48 h-48 bg-accent-warm rounded-full absolute bottom-0 right-0" />
                    <div className="w-40 h-40 bg-surface rounded-full shadow-lg border-8 border-bg-90 absolute top-0 flex items-center justify-center">
                      <span className="text-6xl font-black text-text-900 tracking-tighter">a</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <p className="text-base text-text-700 leading-relaxed max-w-sm mb-16">
                    Debuxel is the world&apos;s first real-time intelligence engine for developers. Combining advanced AI with a continuously verified data engine, we deliver the most precise and reliable structural information on the market.
                  </p>

                  <Link href="/contact" className="absolute -top-10 md:top-10 -right-4 md:-right-24 btn-action-float bg-accent-action px-10 py-6 text-5xl md:text-7xl font-bold tracking-tighter text-white rotate-6 hover:rotate-12 transition-transform shadow-action z-10 w-max cursor-pointer">
                    contacts
                  </Link>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-subtle-border flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-xs text-muted-text max-w-sm">
                  By submitting this form, you acknowledge and agree to our Terms of Use and Privacy Policy, and allow us to send you helpful updates.
                </p>

                <form className="flex w-full md:max-w-md relative bg-surface-2 rounded-full p-1.5 focus-within:ring-2 focus-within:ring-charcoal transition-all border border-subtle-border">
                  <input
                    type="email"
                    placeholder="Business Email"
                    className="bg-transparent flex-1 px-4 py-3 outline-none text-sm text-text-900 placeholder:text-muted-text"
                  />
                  <Button className="bg-charcoal hover:bg-black text-white rounded-full px-8 shrink-0">
                    Join Free
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
