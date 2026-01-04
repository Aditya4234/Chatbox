"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSignup = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate signup
        setTimeout(() => {
            setIsLoading(false);
            router.push('/app');
        }, 1500);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-950 p-4 font-sans selection:bg-emerald-500/30">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -right-[10%] h-[40%] w-[40%] rounded-full bg-blue-500/5 blur-[120px]" />
                <div className="absolute -bottom-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-emerald-500/5 blur-[120px]" />
            </div>

            <div className="w-full max-w-md space-y-8 relative">
                <div className="text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl shadow-blue-500/20">
                        <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-white">Create an account</h1>
                    <p className="mt-2 text-zinc-500">Join ChatBox and start your first conversation</p>
                </div>

                <div className="rounded-3xl border border-zinc-900 bg-zinc-900/40 p-8 backdrop-blur-xl shadow-2xl">
                    <form onSubmit={handleSignup} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-400 ml-1">Full name</label>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
                                placeholder="Aditya"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-400 ml-1">Email address</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
                                placeholder="name@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-400 ml-1">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="flex items-center gap-2 px-1">
                            <input type="checkbox" required className="h-4 w-4 rounded border-zinc-800 bg-zinc-950 accent-emerald-500" />
                            <span className="text-xs text-zinc-500">I agree to the <a href="#" className="text-zinc-300 underline">Terms of Service</a> and <a href="#" className="text-zinc-300 underline">Privacy Policy</a></span>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-bold text-black transition-all hover:bg-zinc-200 active:scale-[0.98] disabled:opacity-50"
                        >
                            {isLoading ? (
                                <div className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-600 border-t-zinc-950" />
                            ) : (
                                "Create account"
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm">
                        <span className="text-zinc-500">Already have an account? </span>
                        <Link href="/login" className="font-bold text-blue-500 hover:text-blue-400 underline-offset-4 hover:underline">
                            Log in here
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
