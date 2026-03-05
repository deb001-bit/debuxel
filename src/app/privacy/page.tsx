import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy – Debuxel",
    description: "Read about how Debuxel handles your data and privacy.",
};

export default function PrivacyPage() {
    const lastUpdated = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <>
            <Navbar />
            <main className="pt-20">
                <section className="py-16 md:py-24 relative overflow-hidden">
                    <div className="gradient-blob-purple w-[300px] h-[300px] -right-20 top-0" />
                    <div className="gradient-blob-pink w-[250px] h-[250px] -left-20 bottom-0" />

                    <div className="container-main relative z-10">
                        <div className="max-w-3xl mx-auto">
                            <h1 className="text-4xl md:text-[48px] font-bold text-text-900 leading-[1.1] tracking-tight mb-2">
                                Privacy Policy
                            </h1>
                            <p className="text-sm text-muted-text mb-12">
                                Last updated: {lastUpdated}
                            </p>

                            <div className="glass-card rounded-2xl p-8 md:p-12 space-y-10">
                                <p className="text-base text-text-700 leading-relaxed">
                                    Debuxel is an AI developer toolkit platform that provides tools
                                    to help developers build, debug, and understand software faster.
                                </p>

                                <div>
                                    <h2 className="text-xl font-bold text-text-900 mb-4">
                                        Information We Collect
                                    </h2>
                                    <p className="text-base text-text-700 leading-relaxed mb-3">
                                        We may collect the following information when you use the
                                        Debuxel platform:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-base text-text-700">
                                        <li>
                                            Account information such as email address when users create
                                            an account
                                        </li>
                                        <li>
                                            Usage data including tools accessed and interactions within
                                            the platform
                                        </li>
                                        <li>
                                            Technical information such as browser type, device type,
                                            and operating system
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-text-900 mb-4">
                                        How We Use Information
                                    </h2>
                                    <p className="text-base text-text-700 leading-relaxed mb-3">
                                        We use collected information to:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-base text-text-700">
                                        <li>Provide and maintain the Debuxel platform</li>
                                        <li>Improve product performance and user experience</li>
                                        <li>Monitor platform usage and security</li>
                                        <li>
                                            Send occasional updates about new features (with opt-out)
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-text-900 mb-4">
                                        Data Security
                                    </h2>
                                    <p className="text-base text-text-700 leading-relaxed">
                                        We do not store or log user code inputs. All AI processing
                                        happens in real-time. We implement industry-standard security
                                        measures to protect your account information. Code submitted to
                                        our tools is processed and discarded — it is never used for
                                        training AI models.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-text-900 mb-4">
                                        Third-Party Services
                                    </h2>
                                    <p className="text-base text-text-700 leading-relaxed">
                                        We use Supabase for authentication and data storage, and Google
                                        Gemini AI for powering our developer tools. We may display ads
                                        through Google AdSense. Each third-party service has its own
                                        privacy policy governing the use of your information.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-text-900 mb-4">
                                        Cookies
                                    </h2>
                                    <p className="text-base text-text-700 leading-relaxed">
                                        We use essential cookies for authentication and session
                                        management. Third-party services like Google AdSense may set
                                        additional cookies. You can control cookies through your
                                        browser settings.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-text-900 mb-4">
                                        Your Rights
                                    </h2>
                                    <ul className="list-disc list-inside space-y-2 text-base text-text-700">
                                        <li>Request access to your personal data</li>
                                        <li>Request deletion of your account and associated data</li>
                                        <li>Opt out of non-essential communications</li>
                                        <li>Export your usage data</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-text-900 mb-4">
                                        Contact
                                    </h2>
                                    <p className="text-base text-text-700 leading-relaxed">
                                        For any questions about this privacy policy, contact us at{" "}
                                        <a
                                            href="mailto:hello.debuxel@gmail.com"
                                            className="text-accent-blue hover:underline"
                                        >
                                            hello.debuxel@gmail.com
                                        </a>
                                        .
                                    </p>
                                    <p className="text-base text-text-700 leading-relaxed mt-2">
                                        Debuxel · Agartala, Tripura, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
