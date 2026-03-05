import { createClient } from "@/lib/supabase/server";
import { User as UserIcon, Mail, Shield, CalendarIcon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Profile - Debuxel",
    description: "Manage your account details and preferences.",
};

export default async function ProfilePage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return (
            <div className="max-w-2xl">
                <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 text-sm">
                    You must be logged in to view this page.
                </div>
            </div>
        );
    }

    const joinedAt = new Date(user.created_at).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div className="max-w-2xl">
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-text-900 mb-1">
                    Profile
                </h1>
                <p className="text-sm text-text-700">
                    Manage your account details and preferences.
                </p>
            </div>

            <div className="bg-surface/60 border border-subtle-border/30 rounded-2xl p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-4 border-b border-subtle-border/30 pb-6">
                    <div className="w-16 h-16 rounded-full bg-accent-purple/10 flex items-center justify-center shrink-0">
                        <UserIcon className="w-8 h-8 text-accent-purple" />
                    </div>
                    <div className="overflow-hidden">
                        <h2 className="text-xl font-bold text-text-900 truncate">
                            {user.user_metadata?.full_name || "Debuxel Developer"}
                        </h2>
                        <p className="text-sm text-text-700 flex items-center gap-2 mt-1 truncate">
                            <Mail className="w-4 h-4 shrink-0" /> {user.email}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div>
                        <p className="text-xs font-semibold text-text-900 mb-1.5 uppercase tracking-wider">
                            Account Status
                        </p>
                        <div className="flex items-center gap-2 text-sm text-text-700">
                            <Shield className="w-4 h-4 text-green-500" /> Active (Free Plan)
                        </div>
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-text-900 mb-1.5 uppercase tracking-wider">
                            Member Since
                        </p>
                        <div className="flex items-center gap-2 text-sm text-text-700">
                            <CalendarIcon className="w-4 h-4 text-accent-teal" /> {joinedAt}
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t border-subtle-border/30 mt-6">
                    <p className="text-sm text-text-700 leading-relaxed mb-4">
                        To update your email or password, please contact support. We are actively working on building comprehensive account settings in our upcoming Beta releases.
                    </p>
                </div>
            </div>
        </div>
    );
}
