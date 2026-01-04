"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useToast } from '../context/ToastContext';
import { useUI } from '../context/UIContext';

export default function Navbar({ title, icon, onAction, startNewChat }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const router = useRouter();
    const { showToast } = useToast();
    const { toggleSidebar } = useUI();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="flex h-14 items-center justify-between px-4 bg-black sticky top-0 z-50 border-b border-[#27272a]">
            <div className="flex items-center gap-2">
                <button
                    onClick={toggleSidebar}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-900 lg:hidden"
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <div className="relative" ref={menuRef}>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-zinc-100 font-semibold hover:bg-zinc-900 transition-colors"
                    >
                        <span>ChatBox 1.0</span>
                        <svg className="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {isMenuOpen && (
                        <div className="absolute left-0 mt-1 w-80 origin-top-left rounded-2xl border border-[#27272a] bg-zinc-900 p-2 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                            <div className="p-3">
                                <h3 className="text-xs font-semibold text-zinc-500 uppercase mb-2">Models</h3>
                                <div className="space-y-1">
                                    <button
                                        onClick={() => {
                                            showToast("ChatBox 1.0 model selected");
                                            setIsMenuOpen(false); // Close menu after selection
                                        }}
                                        className="w-full flex items-center justify-between p-3 rounded-xl bg-zinc-800 border border-[#27272a]"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-zinc-400">1.0</div>
                                            <div className="text-left">
                                                <div className="text-sm font-semibold text-white">ChatBox 1.0</div>
                                                <div className="text-xs text-zinc-500">Premium optimized model</div>
                                            </div>
                                        </div>
                                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                                            <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </button>
                                    {/* Placeholder for other models */}
                                    <button
                                        onClick={() => {
                                            showToast("Other models coming soon");
                                            setIsMenuOpen(false); // Close menu after selection
                                        }}
                                        className="w-full flex items-center justify-between p-3 rounded-xl border border-transparent hover:bg-zinc-800 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-zinc-400">2.0</div>
                                            <div className="text-left">
                                                <div className="text-sm font-semibold text-white">ChatBox 2.0</div>
                                                <div className="text-xs text-zinc-500">Next-gen model (coming soon)</div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex items-center gap-2">
                <Link
                    href="/app/upgrade"
                    className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-[#27272a] text-sm font-medium text-zinc-300 hover:bg-zinc-800 transition-colors"
                >
                    <div className="w-4 h-4 rounded-full bg-purple-900 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    Pro version
                </Link>
                <button
                    onClick={() => showToast("Share feature coming soon")}
                    className="w-10 h-10 flex items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-900"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                </button>
                <Link
                    href="/app/login"
                    className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white ml-1 cursor-pointer hover:opacity-80 transition-opacity"
                >
                    AD
                </Link>
            </div>
        </header>
    );
}

