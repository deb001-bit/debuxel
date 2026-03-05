import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Pickaxe } from "lucide-react";

export default function ChangelogPage() {
    return (
        <>
            <Navbar />
            <main className="pt-16 min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-teal/10 rounded-full blur-3xl -z-10" />

                <div className="text-center px-4">
                    <div className="w-20 h-20 rounded-3xl bg-surface border border-subtle-border/40 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-black/[0.02]">
                        <Pickaxe className="w-10 h-10 text-text-900" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-text-900 leading-tight tracking-tight mb-4">
                        Changelog
                    </h1>

                    <p className="text-lg md:text-xl text-text-700 max-w-lg mx-auto leading-relaxed">
                        We are currently actively building Debuxel in Beta! <br />
                        Future updates, new tools, and feature additions will be announced here.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}
