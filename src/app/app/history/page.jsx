"use client";

import React from 'react';
import Sidebar from '../components/Sidebar';
import { useChat } from '../hooks/useChat';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';

export default function HistoryPage() {
    const { history, startNewChat, selectChat } = useChat();
    const router = useRouter();

    const handleNewChat = () => {
        startNewChat();
        router.push('/app');
    };

    const handleSelectChat = (id) => {
        selectChat(id);
        router.push('/app');
    };

    return (
        <div className="flex h-screen bg-zinc-950 text-white overflow-hidden font-sans">
            <Sidebar
                history={history}
                onNewChat={handleNewChat}
                onSelectChat={handleSelectChat}
            />

            <main className="flex flex-1 flex-col relative min-w-0">
                <Navbar
                    title="History"
                    icon={
                        <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    }
                    startNewChat={handleNewChat}
                />

                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                    <div className="mx-auto max-w-4xl">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {history.length > 0 ? (
                                history.map((chat) => (
                                    <div
                                        key={chat.id}
                                        onClick={() => handleSelectChat(chat.id)}
                                        className="group cursor-pointer rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 transition-all hover:bg-zinc-900 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5"
                                    >
                                        <div className="mb-4 flex items-center justify-between">
                                            <div className="rounded-lg bg-zinc-800 p-2 text-zinc-400 group-hover:text-emerald-500 transition-colors">
                                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                                </svg>
                                            </div>
                                            <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500 group-hover:text-zinc-400 transition-colors">
                                                {new Date(chat.timestamp).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <h3 className="line-clamp-2 text-sm font-medium text-zinc-200 group-hover:text-white transition-colors leading-relaxed">
                                            {chat.title}
                                        </h3>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                                    <div className="mb-4 rounded-full bg-zinc-900 p-4 text-zinc-600">
                                        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-zinc-300 font-medium">No history yet</h3>
                                    <p className="text-zinc-500 text-sm mt-1">Your conversations will appear here.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
