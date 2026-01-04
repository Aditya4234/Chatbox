"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import Sidebar from './components/Sidebar';
import ChatInput from './components/chat/ChatInput';
import ChatWindow from './components/chat/ChatWindow';
import Navbar from './components/Navbar';
import { useChat } from './hooks/useChat';

export default function ChatPage() {
    const { messages, history, isLoading, sendMessage, startNewChat, selectChat, deleteChat } = useChat();

    const handleSendMessage = (text) => {
        sendMessage(text);
    };

    const handleNewChat = () => {
        startNewChat();
    };

    const handleSelectChat = (id) => {
        selectChat(id);
    };

    const handleAction = (type) => {
        if (type === 'clear') {
            startNewChat();
        }
    };

    return (
        <div className="flex h-screen w-full bg-black text-zinc-100 overflow-hidden font-sans">
            <Sidebar
                history={history}
                onNewChat={handleNewChat}
                onSelectChat={handleSelectChat}
                onDeleteChat={deleteChat}
            />

            <main className="flex flex-1 flex-col relative min-w-0">
                <Navbar
                    onAction={handleAction}
                    startNewChat={handleNewChat}
                />

                <ChatWindow
                    messages={messages}
                    isLoading={isLoading}
                    onSendMessage={handleSendMessage}
                />

                <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-6 flex justify-center bg-gradient-to-t from-black via-black/80 to-transparent pt-10">
                    <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
                </div>
            </main>
        </div>
    );
}

