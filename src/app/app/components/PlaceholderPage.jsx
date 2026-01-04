"use client";

import React from 'react';
import Link from 'next/link';

export default function PlaceholderPage({ title, icon, description }) {
    return (
        <div className="flex h-screen w-full bg-black text-zinc-100 overflow-hidden font-sans flex-col items-center justify-center p-4">
            <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-[#27272a] flex items-center justify-center mb-6 shadow-2xl">
                {icon}
            </div>
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-zinc-400 text-center max-w-md mb-8">
                {description || "This feature is currently under development. Check back soon for updates!"}
            </p>
            <Link
                href="/app"
                className="px-6 py-2.5 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
            >
                Back to Chat
            </Link>
        </div>
    );
}
