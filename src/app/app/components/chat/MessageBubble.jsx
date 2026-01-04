"use client";

import React, { useState } from 'react';
import { useToast } from '../../context/ToastContext';

export default function MessageBubble({ message }) {
    const isAI = message.sender === 'ai';
    const { showToast } = useToast();

    const renderContent = (content) => {
        if (!content) return null;

        const parts = content.split(/(```[\s\S]*?```)/g);

        return parts.map((part, index) => {
            if (part.startsWith('```') && part.endsWith('```')) {
                const codeMatch = part.match(/```(\w+)?\n?([\s\S]*?)```/);
                const language = codeMatch?.[1] || '';
                const code = codeMatch?.[2]?.trim() || '';

                return (
                    <div key={index} className="my-4 overflow-hidden rounded-xl border border-[#27272a] bg-zinc-900 font-mono text-sm shadow-sm">
                        <div className="flex items-center justify-between bg-zinc-800 px-4 py-2 text-xs text-zinc-400 border-b border-[#27272a]">
                            <span>{language || 'code'}</span>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(code);
                                    showToast('Code copied to clipboard');
                                }}
                                className="flex items-center gap-1.5 transition-colors hover:text-white"
                            >
                                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                </svg>
                                Copy
                            </button>
                        </div>
                        <div className="overflow-x-auto p-4 custom-scrollbar bg-zinc-900">
                            <pre><code className="text-zinc-100">{code}</code></pre>
                        </div>
                    </div>
                );
            }

            return part.split('\n').map((line, lineIndex) => (
                <p key={`${index}-${lineIndex}`} className={line.trim() === '' ? 'h-4' : 'mb-3 last:mb-0'}>
                    {line}
                </p>
            ));
        });
    };

    return (
        <div className="w-full py-6 bg-black">
            <div className="flex gap-4 px-4 w-full">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white shadow-sm font-bold text-[10px] ${isAI ? 'bg-zinc-800' : 'bg-indigo-600'}`}>
                    {isAI ? (
                        <div className="w-5 h-5 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full border border-white/20"></div>
                        </div>
                    ) : (
                        'AD'
                    )}
                </div>

                <div className="flex-1 space-y-1 overflow-hidden min-w-0">
                    <div className="font-semibold text-[15px] text-zinc-100 mb-1">
                        {isAI ? 'ChatBox' : 'You'}
                    </div>
                    <div className="text-zinc-300 leading-relaxed text-[15px] break-words">
                        {renderContent(message.text)}
                    </div>
                </div>
            </div>
        </div>
    );
}


