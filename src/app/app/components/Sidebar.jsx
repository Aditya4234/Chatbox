"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUI } from '../context/UIContext';
import { useToast } from '../context/ToastContext';

export default function Sidebar({ history, onNewChat, onSelectChat, onDeleteChat }) {
    const { showToast } = useToast();
    const { isSidebarOpen, toggleSidebar } = useUI();

    const handleDelete = (e, id) => {
        e.stopPropagation();
        onDeleteChat(id);
        showToast('Chat deleted');
    };

    const menuItems = [
        { label: 'ChatBox', icon: 'gpt', href: '/app' },
        { label: 'Search chats', icon: 'search', href: '/app/search' },
        { label: 'Images', icon: 'images', href: '/app/images' },
        { label: 'Apps', icon: 'apps', href: '/app/apps' },
        { label: 'Projects', icon: 'projects', href: '/app/projects' },
    ];

    return (
        <>
            {/* Mobile Backdrop */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
                    onClick={toggleSidebar}
                />
            )}

            <div className={`fixed inset-y-0 left-0 z-50 flex h-screen w-64 flex-col bg-black border-r border-[#27272a] p-4 transition-transform duration-300 lg:static lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {/* Logo Section */}
                <div className="mb-4 px-2">
                    <button
                        onClick={() => {
                            onNewChat();
                            if (window.innerWidth < 1024) toggleSidebar();
                        }}
                        className="flex items-center gap-2 text-white font-semibold group w-full text-left"
                    >
                        <div className="h-8 w-8 rounded-full bg-zinc-900 border border-[#27272a] flex items-center justify-center shadow-sm group-hover:bg-[#27272a] transition-colors">
                            <svg className="h-5 w-5 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <span className="text-sm">New chat</span>
                    </button>
                </div>

                <nav className="space-y-0.5 px-2">
                    {menuItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => {
                                if (window.innerWidth < 1024) toggleSidebar();
                            }}
                            className={`flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm transition-colors hover:bg-zinc-900 ${item.label === 'ChatBox' ? 'font-medium text-white' : 'text-zinc-400'}`}
                        >
                            <span className="w-5 h-5 flex items-center justify-center">
                                {item.icon === 'search' && <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                                {item.icon === 'images' && <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                                {item.icon === 'apps' && <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>}
                                {item.icon === 'projects' && <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}
                                {item.icon === 'gpt' && <div className="w-5 h-5 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-white">C</div>}
                            </span>
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="mt-8 flex-1 overflow-y-auto custom-scrollbar px-2">
                    <h3 className="mb-2 px-2 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Your chats</h3>
                    <div className="space-y-0.5">
                        {history.map((chat) => (
                            <div
                                key={chat.id}
                                onClick={() => {
                                    onSelectChat(chat.id);
                                    if (window.innerWidth < 1024) toggleSidebar();
                                }}
                                className="flex w-full items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-sm text-zinc-400 transition-all hover:bg-zinc-900 group cursor-pointer"
                            >
                                <span className="truncate flex-1">{chat.title}</span>
                                <button
                                    onClick={(e) => handleDelete(e, chat.id)}
                                    className="opacity-0 group-hover:opacity-100 p-1 hover:text-red-400 transition-all"
                                >
                                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-auto border-t border-[#27272a] pt-4 px-2 space-y-2">
                    <Link
                        href="/app/settings"
                        className="flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm text-zinc-400 transition-colors hover:bg-zinc-900 group"
                    >
                        <span className="w-5 h-5 flex items-center justify-center">
                            <svg className="w-4 h-4 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </span>
                        Settings
                    </Link>
                    <div className="flex items-center justify-between p-2 rounded-xl hover:bg-zinc-900 transition-colors group">
                        <Link href="/app/login" className="flex items-center gap-2 truncate flex-1 min-w-0">
                            <div className="h-8 w-8 shrink-0 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold text-white">AD</div>
                            <span className="text-sm font-medium text-zinc-100 truncate">Aditya Gupta</span>
                        </Link>
                        <Link
                            href="/app/upgrade"
                            className="text-[11px] font-semibold text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full hover:bg-zinc-800 transition-colors ml-2"
                        >
                            Upgrade
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
