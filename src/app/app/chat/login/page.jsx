"use client";

import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
            <div className="w-full max-w-md space-y-8 rounded-3xl border border-zinc-900 bg-zinc-900/50 p-10 backdrop-blur-xl">
                <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-black shadow-2xl">
                        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                    </div>
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">Welcome back</h2>
                    <p className="mt-2 text-sm text-zinc-500">Sign in to continue to ChatBox</p>
                </div>

                <form className="mt-8 space-y-4">
                    <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 ml-1">Email address</label>
                        <input
                            type="email"
                            placeholder="name@company.com"
                            className="w-full rounded-xl border border-zinc-800 bg-black/50 px-4 py-3 text-white placeholder-zinc-700 focus:border-white focus:outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 ml-1">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full rounded-xl border border-zinc-800 bg-black/50 px-4 py-3 text-white placeholder-zinc-700 focus:border-white focus:outline-none transition-all"
                        />
                    </div>

                    <button
                        type="button"
                        className="group relative flex w-full justify-center rounded-xl bg-white px-4 py-3 text-sm font-bold text-black transition-all hover:bg-zinc-200"
                    >
                        <Link href="/app" className="absolute inset-0 flex items-center justify-center">
                            Sign in
                        </Link>
                        <span className="opacity-0">Sign in</span>
                    </button>
                </form>

                <div className="text-center">
                    <p className="text-xs text-zinc-600">
                        Don't have an account? <span className="text-zinc-400 hover:text-white cursor-pointer transition-colors">Sign up</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
