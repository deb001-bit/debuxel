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
            <div className="container-main pt-3">
                <nav className="flex items-center justify-between h-14 px-5 rounded-2xl glass-surface">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group shrink-0">
                        <Image
                            src="/logo.png"
                            alt="Debuxel"
                            width={28}
                            height={28}
                            className="group-hover:scale-105 transition-transform duration-200"
                        />
                        <span className="text-lg font-bold text-text-900 tracking-tight">
                            Debuxel
                        </span>
                    </Link>

                    {/* Center Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-text-700 hover:text-text-900 px-4 py-2 rounded-xl hover:bg-white/60 transition-all duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Auth */}
                    <div className="hidden md:flex items-center gap-2 shrink-0">
                        <Button
                            variant="ghost"
                            className="text-sm font-medium text-text-700 hover:text-text-900 h-9 px-4 rounded-xl"
                            asChild
                        >
                            <Link href="/auth/login">Sign in</Link>
                        </Button>
                        <Button
                            className="text-sm font-semibold h-9 px-5 rounded-xl btn-primary-gradient"
                            asChild
                        >
                            <Link href="/auth/signup">Get Started</Link>
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
                                        Sign in
                                    </Link>
                                </Button>
                                <Button
                                    className="text-base font-semibold h-12 rounded-xl btn-primary-gradient"
                                    asChild
                                >
                                    <Link href="/auth/signup" onClick={() => setIsOpen(false)}>
                                        Get Started
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
