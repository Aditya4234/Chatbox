"use client";

import { ChatProvider } from './context/ChatContext';
import { ToastProvider } from './context/ToastContext';
import { UIProvider } from './context/UIContext';
import React from 'react';

export default function AppLayout({ children }) {
    return (
        <UIProvider>
            <ToastProvider>
                <ChatProvider>
                    <div className="w-full bg-black min-h-screen">
                        {children}
                    </div>
                </ChatProvider>
            </ToastProvider>
        </UIProvider>
    );
}
