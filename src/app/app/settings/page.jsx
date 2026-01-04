"use client";

import React, { useState } from 'react';
import PlaceholderPage from '../components/PlaceholderPage'; // Temporarily using base style, but customizing content
import Link from 'next/link';

export default function SettingsPage() {
    const [theme, setTheme] = useState('dark');
    const [notifications, setNotifications] = useState(true);

    return (
        <div className="flex h-screen w-full bg-black text-zinc-100 font-sans overflow-hidden">
            {/* Sidebar Navigation for Settings (Simplified) */}
            <div className="w-64 border-r border-[#27272a] p-6 hidden md:block">
                <Link href="/app" className="flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Chat
                </Link>
                <h2 className="text-xl font-bold text-white mb-6">Settings</h2>
                <nav className="space-y-1">
                    <button className="w-full text-left px-3 py-2 rounded-lg bg-zinc-900 text-white font-medium">General</button>
                    <button className="w-full text-left px-3 py-2 rounded-lg text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors">Account</button>
                    <button className="w-full text-left px-3 py-2 rounded-lg text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors">Appearance</button>
                    <button className="w-full text-left px-3 py-2 rounded-lg text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors">Privacy</button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-12">
                <div className="max-w-3xl mx-auto">
                    <div className="md:hidden mb-6">
                        <Link href="/app" className="flex items-center gap-2 text-zinc-400 hover:text-white">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back
                        </Link>
                    </div>

                    <h1 className="text-3xl font-bold mb-8">General Settings</h1>

                    <div className="space-y-6">
                        {/* Theme Section */}
                        <div className="p-6 rounded-2xl border border-[#27272a] bg-zinc-900/50">
                            <h3 className="text-lg font-semibold mb-1">Theme</h3>
                            <p className="text-sm text-zinc-400 mb-4">Choose your preferred interface theme.</p>
                            <div className="flex gap-3">
                                <button
                                    className={`flex-1 p-3 rounded-xl border border-[#27272a] bg-black text-center text-sm font-medium ${theme === 'dark' ? 'ring-2 ring-white' : 'opacity-50'}`}
                                    onClick={() => setTheme('dark')}
                                >
                                    Dark (Pure Black)
                                </button>
                                <button
                                    className={`flex-1 p-3 rounded-xl border border-[#27272a] bg-zinc-900 text-center text-sm font-medium ${theme === 'light' ? 'ring-2 ring-white' : 'opacity-50'}`}
                                    onClick={() => setTheme('light')}
                                >
                                    Light
                                </button>
                                <button
                                    className={`flex-1 p-3 rounded-xl border border-[#27272a] bg-zinc-900 text-center text-sm font-medium ${theme === 'system' ? 'ring-2 ring-white' : 'opacity-50'}`}
                                    onClick={() => setTheme('system')}
                                >
                                    System
                                </button>
                            </div>
                        </div>

                        {/* Notifications Section */}
                        <div className="p-6 rounded-2xl border border-[#27272a] bg-zinc-900/50 flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold mb-1">Notifications</h3>
                                <p className="text-sm text-zinc-400">Receive desktop notifications for new messages.</p>
                            </div>
                            <button
                                onClick={() => setNotifications(!notifications)}
                                className={`w-12 h-7 rounded-full transition-colors flex items-center px-1 ${notifications ? 'bg-white' : 'bg-zinc-700'}`}
                            >
                                <div className={`w-5 h-5 rounded-full bg-black transition-transform ${notifications ? 'translate-x-5' : 'translate-x-0'}`} />
                            </button>
                        </div>

                        {/* Language Section */}
                        <div className="p-6 rounded-2xl border border-[#27272a] bg-zinc-900/50">
                            <h3 className="text-lg font-semibold mb-1">Language</h3>
                            <p className="text-sm text-zinc-400 mb-4">Select your primary language for the interface.</p>
                            <select className="w-full p-3 rounded-xl border border-[#27272a] bg-black text-white focus:outline-none focus:ring-1 focus:ring-white cursor-pointer">
                                <option>English (US)</option>
                                <option>Spanish</option>
                                <option>French</option>
                                <option>German</option>
                                <option>Chinese</option>
                                <option>Japanese</option>
                            </select>
                        </div>

                        {/* Data Section */}
                        <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/5">
                            <h3 className="text-lg font-semibold mb-1 text-red-500">Delete Account</h3>
                            <p className="text-sm text-zinc-400 mb-4">Permanently remove your account and all of your content.</p>
                            <button className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-medium transition-colors">
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
