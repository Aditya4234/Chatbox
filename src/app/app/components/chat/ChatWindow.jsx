"use client";

import React, { useRef, useEffect } from 'react';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';

export default function ChatWindow({ messages, isLoading, onSendMessage }) {
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    if (messages.length === 0) {
        return (
            <div className="flex h-full flex-col items-center justify-center p-4 text-center bg-black">
                <div className="w-full px-8">
                    <h1 className="text-[32px] md:text-[40px] font-semibold text-zinc-100 mb-12 tracking-tight">
                        What can I help with?
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
                        {[
                            { text: "Help me write", sub: "a plan for a trip", icon: "✏️" },
                            { text: "Explain", sub: "quantum physics simply", icon: "💡" },
                            { text: "Give me ideas", sub: "for a new business", icon: "🚀" },
                            { text: "Analyze", sub: "this data set", icon: "📊" }
                        ].map((item) => (
                            <button
                                key={item.text}
                                onClick={() => onSendMessage(item.text + " " + item.sub)}
                                className="flex flex-col items-start p-4 rounded-2xl border border-[#27272a] bg-zinc-900/50 hover:bg-zinc-900 transition-all text-left group"
                            >
                                <span className="text-xl mb-2">{item.icon}</span>
                                <span className="text-[13px] font-medium text-zinc-200 leading-tight">{item.text}</span>
                                <span className="text-[12px] text-zinc-500 leading-tight">{item.sub}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            ref={scrollRef}
            className="flex-1 w-full overflow-y-auto custom-scrollbar pb-32 scroll-smooth bg-black"
        >
            <div className="flex flex-col w-full px-4 md:px-8 lg:px-12">
                {messages.map((msg) => (
                    <MessageBubble key={msg.id} message={msg} />
                ))}
                {isLoading && <TypingIndicator />}
            </div>
        </div>
    );
}
