import Link from "next/link";
import Image from "next/image";
import { AdContainer } from "@/components/ads/AdContainer";

const footerLinks = {
    Product: [
        { href: "/products", label: "All Tools" },
        { href: "/tools/bug-fixer", label: "AI Bug Fixer" },
        { href: "/tools/code-explainer", label: "Code Explainer" },
        { href: "/tools/readme-generator", label: "README Generator" },
        { href: "/tools/api-generator", label: "API Generator" },
    ],
    Company: [
        { href: "/about", label: "About" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
        { href: "/feedback", label: "Feedback" },
    ],
    Legal: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "#", label: "Terms of Service" },
    ],
    Resources: [
        { href: "/docs", label: "Documentation" },
        { href: "/blog", label: "Tutorials" },
        { href: "/changelog", label: "Changelog" },
    ],
};

export function Footer() {
    return (
        <footer className="border-t border-subtle-border/20 bg-bg-100">
            {/* Footer Ad */}
            <div className="container-main pt-8">
                <AdContainer placement="footer-banner" size="leaderboard" />
            </div>

            <div className="container-main py-14">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Image
                                src="/logo.png"
                                alt="Debuxel"
                                width={28}
                                height={28}
                            />
                            <span className="text-base font-bold text-text-900 tracking-tight">
                                Debuxel
                            </span>
                        </Link>
                        <p className="text-sm text-text-700 leading-relaxed max-w-[220px] mb-3">
                            Free AI-powered developer toolkit. Debug faster, build smarter.
                        </p>
                        <a
                            href="mailto:hello.debuxel@gmail.com"
                            className="text-sm text-muted-text hover:text-text-700 transition-colors duration-200"
                        >
                            hello.debuxel@gmail.com
                        </a>
                    </div>

                    {/* Link Groups */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-xs font-semibold text-text-900 uppercase tracking-wider mb-4">
                                {title}
                            </h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-text-700 hover:text-text-900 transition-colors duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-10 pt-6 border-t border-subtle-border/20 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-muted-text">
                        © {new Date().getFullYear()} Debuxel. All rights reserved.
                    </p>
                    <div className="flex items-center gap-5">
                        <Link
                            href="/privacy"
                            className="text-xs text-muted-text hover:text-text-700 transition-colors duration-200"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="#"
                            className="text-xs text-muted-text hover:text-text-700 transition-colors duration-200"
                        >
                            Terms
                        </Link>
                        <Link
                            href="/contact"
                            className="text-xs text-muted-text hover:text-text-700 transition-colors duration-200"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
