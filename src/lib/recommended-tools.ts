export interface RecommendedTool {
    name: string;
    description: string;
    logoUrl: string;
    ctaText: string;
    url: string;
}

export const recommendedTools: RecommendedTool[] = [
    {
        name: "Vercel",
        description: "Deploy web apps instantly with zero configuration. The best platform for Next.js.",
        logoUrl: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
        ctaText: "Try Vercel",
        url: "https://vercel.com",
    },
    {
        name: "Supabase",
        description: "Open-source Firebase alternative with PostgreSQL, Auth, and real-time subscriptions.",
        logoUrl: "https://supabase.com/dashboard/img/supabase-logo.svg",
        ctaText: "Try Supabase",
        url: "https://supabase.com",
    },
    {
        name: "Cloudflare",
        description: "Global CDN, DDoS protection, and edge computing. Keep your apps fast and secure.",
        logoUrl: "https://www.cloudflare.com/favicon.ico",
        ctaText: "Try Cloudflare",
        url: "https://cloudflare.com",
    },
    {
        name: "Clerk",
        description: "Drop-in authentication and user management. Beautiful sign-in flows in minutes.",
        logoUrl: "https://clerk.com/v2/clerk.svg",
        ctaText: "Try Clerk",
        url: "https://clerk.com",
    },
    {
        name: "DigitalOcean",
        description: "Simple, affordable cloud infrastructure for developers. Deploy servers in seconds.",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg",
        ctaText: "Try DigitalOcean",
        url: "https://digitalocean.com",
    },
];
