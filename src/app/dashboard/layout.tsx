"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { tools } from "@/lib/tools-data";
import {
    LayoutDashboard,
    User,
    LogOut,
    Menu,
    BarChart3,
    MessageSquare,
} from "lucide-react";
import { useState } from "react";
import { signOut } from "../auth/actions";

const sidebarItems = [
    {
        label: "Overview",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        label: "Usage",
        href: "/dashboard/usage",
        icon: BarChart3,
    },
    {
        label: "Feedback",
        href: "/feedback",
        icon: MessageSquare,
    },
];

function SidebarContent({
    pathname,
    onNavigate,
}: {
    pathname: string;
    onNavigate?: () => void;
}) {
    return (
        <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="p-4 pb-6">
                <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={onNavigate}
                >
                    <Image src="/logo.png" alt="Debuxel" width={32} height={32} />
                    <span className="text-lg font-bold text-text-900 tracking-tight">
                        Debuxel
                    </span>
                </Link>
            </div>

            {/* Main nav */}
            <nav className="flex-1 px-3 space-y-1">
                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={onNavigate}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150 ${isActive
                                ? "bg-accent-blue/10 text-accent-blue"
                                : "text-text-700 hover:bg-surface/60 hover:text-text-900"
                                }`}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.label}
                        </Link>
                    );
                })}

                <div className="pt-4 pb-2">
                    <p className="px-3 text-[10px] font-semibold text-muted-text uppercase tracking-widest">
                        Tools
                    </p>
                </div>

                {tools.map((tool) => {
                    const isActive =
                        pathname === `/dashboard/tools/${tool.slug}`;
                    const Icon = tool.icon;
                    return (
                        <Link
                            key={tool.slug}
                            href={`/dashboard/tools/${tool.slug}`}
                            onClick={onNavigate}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150 ${isActive
                                ? "bg-accent-blue/10 text-accent-blue"
                                : "text-text-700 hover:bg-surface/60 hover:text-text-900"
                                }`}
                        >
                            <Icon className="w-4 h-4" />
                            {tool.shortName}
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom */}
            <div className="p-3 space-y-1 border-t border-subtle-border/30">
                <Link
                    href="/dashboard/profile"
                    onClick={onNavigate}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-text-700 hover:bg-surface/60 hover:text-text-900 transition-colors duration-150"
                >
                    <User className="w-4 h-4" />
                    Profile
                </Link>
                <form action={signOut} className="w-full">
                    <button type="submit" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 w-full transition-colors duration-150">
                        <LogOut className="w-4 h-4" />
                        Log out
                    </button>
                </form>
            </div>
        </div>
    );
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-h-screen bg-bg-100 flex">
            {/* Desktop sidebar */}
            <aside className="hidden lg:block w-64 border-r border-subtle-border/30 bg-bg-90 fixed top-0 left-0 bottom-0 overflow-y-auto">
                <SidebarContent pathname={pathname} />
            </aside>

            {/* Mobile header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 h-14 bg-bg-100/80 glass border-b border-subtle-border/30 flex items-center px-4">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-9 w-9">
                            <Menu className="w-5 h-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-64 p-0 bg-bg-90">
                        <SidebarContent
                            pathname={pathname}
                            onNavigate={() => setIsOpen(false)}
                        />
                    </SheetContent>
                </Sheet>
                <Link href="/" className="flex items-center gap-2 ml-3">
                    <Image src="/logo.png" alt="Debuxel" width={28} height={28} />
                    <span className="font-bold text-text-900">Debuxel</span>
                </Link>
            </div>

            {/* Main content */}
            <main className="flex-1 lg:ml-64 pt-14 lg:pt-0">
                <div className="p-4 md:p-8">{children}</div>
            </main>
        </div>
    );
}
