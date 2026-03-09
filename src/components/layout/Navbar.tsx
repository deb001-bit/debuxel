"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="container-main pt-6">
                <nav className="flex items-center justify-between h-16 px-6 md:px-8 bg-surface rounded-full shadow-sm border border-subtle-border mx-auto max-w-6xl">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group shrink-0">
                        <span className="text-xl font-bold tracking-tighter text-text-900 group-hover:-translate-y-0.5 transition-transform duration-200">
                            Debux<span className="text-accent-blue font-black">AI</span>
                        </span>
                    </Link>

                    {/* Center Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-text-700 hover:text-text-900 transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Auth */}
                    <div className="hidden md:flex items-center gap-4 shrink-0">
                        <Link
                            href="/auth/login"
                            className="text-sm font-medium text-text-700 hover:text-text-900 transition-colors"
                        >
                            Log in
                        </Link>
                        <Button
                            className="text-sm font-medium h-10 px-6 rounded-full bg-charcoal hover:bg-black text-white"
                            asChild
                        >
                            <Link href="/auth/signup">Get a demo</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon" className="h-9 w-9">
                                <Menu className="w-5 h-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="w-[300px] bg-bg-100 border-subtle-border/30"
                        >
                            <div className="flex flex-col gap-4 mt-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-text-700 hover:text-text-900 transition-colors duration-200 px-2 py-2"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="h-px bg-subtle-border/30 my-2" />
                                <Button
                                    variant="ghost"
                                    className="justify-start text-lg font-medium text-text-700 h-12"
                                    asChild
                                >
                                    <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                                        Log in
                                    </Link>
                                </Button>
                                <Button
                                    className="text-base font-semibold h-12 rounded-full bg-charcoal text-white"
                                    asChild
                                >
                                    <Link href="/auth/signup" onClick={() => setIsOpen(false)}>
                                        Get a demo
                                    </Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </header>
    );
}
