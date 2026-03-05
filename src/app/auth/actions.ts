"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function loginWithEmail(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return { error: error.message };
    }

    // Next.js redirect throws an error under the hood to break execution, 
    // so it must not be caught by a standard try/catch if we want it to work.
    redirect("/dashboard");
}

export async function signupWithEmail(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;
    const supabase = await createClient();

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: name,
            },
        },
    });

    if (error) {
        return { error: error.message };
    }

    // After signup, we log them in automatically 
    // (In production, if email confirmation is required, you'd redirect to a "check your email" page)
    redirect("/dashboard");
}

export async function resetPassword(formData: FormData) {
    const email = formData.get("email") as string;
    const supabase = await createClient();

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
        // Note: Assuming standard Supabase auth redirect URL setup
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/update-password`,
    });

    if (error) {
        return { error: error.message };
    }

    return { success: true };
}

export async function loginWithOAuth(provider: "google" | "github") {
    const supabase = await createClient();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
            redirectTo: `${siteUrl}/auth/callback`,
        },
    });

    if (error) {
        return { error: error.message, url: null };
    }

    return { error: null, url: data.url };
}

export async function signOut() {
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/auth/login");
}
