"use client";

import React from 'react';

export default function TypingIndicator() {
    return (
        <div className="w-full py-6 bg-black">
            <div className="flex gap-4 px-4 w-full">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-white shadow-sm">
                    <div className="w-5 h-5 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full border border-white/20"></div>
                    </div>
                </div>
                <div className="flex items-center gap-1.5 px-1 py-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-600 [animation-delay:-0.3s]"></span>
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-600 [animation-delay:-0.15s]"></span>
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-600"></span>
                </div>
            </div>
        </div>
    );
}


