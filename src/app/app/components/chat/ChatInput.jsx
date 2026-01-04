"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useToast } from '../../context/ToastContext';

export default function ChatInput({ onSendMessage, isLoading }) {
    const [input, setInput] = useState('');
    const textareaRef = useRef(null);
    const { showToast } = useToast();

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        if (input.trim() && !isLoading) {
            onSendMessage(input);
            setInput('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
        }
    }, [input]);

    return (
        <div className="w-full max-w-3xl mx-auto px-4 pb-4">
            <div className="relative flex items-end gap-2 bg-zinc-900 rounded-[26px] p-2 min-h-[52px] transition-all focus-within:bg-zinc-800 border border-[#27272a] focus-within:border-zinc-700 shadow-xl shadow-black/20">
                <button
                    type="button"
                    onClick={() => showToast("File upload feature coming soon")}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-900 transition-colors ml-1 mb-0.5"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </button>

                <textarea
                    ref={textareaRef}
                    rows={1}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask anything..."
                    className="flex-1 max-h-50 resize-none bg-transparent px-2 py-2.5 text-[15px] text-zinc-100 focus:outline-none custom-scrollbar placeholder-zinc-500"
                />

                <div className="flex items-center gap-1 mr-1 mb-0.5">
                    <button
                        type="button"
                        onClick={() => showToast("Voice input coming soon")}
                        className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-900 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                    </button>

                    <button
                        onClick={handleSubmit}
                        disabled={!input.trim() || isLoading}
                        className={`flex h-9 w-9 items-center justify-center rounded-full transition-all ${!input.trim() || isLoading ? 'bg-zinc-800 text-zinc-600' : 'bg-white text-black hover:bg-zinc-200 shadow-lg'}`}
                    >
                        {isLoading ? (
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-600 border-t-zinc-400" />
                        ) : (
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l0-14m0 0l-5 5m5-5l5 5" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            <p className="mt-3 text-center text-[11px] text-zinc-600 font-medium">
                ChatBox can make mistakes. Check important info.
            </p>
        </div>
    );
}
