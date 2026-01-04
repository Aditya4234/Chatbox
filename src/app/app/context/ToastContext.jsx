"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const showToast = useCallback((message, type = 'success') => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 3000);
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
                {toasts.map(toast => (
                    <div
                        key={toast.id}
                        className={`pointer-events-auto flex min-w-[300px] animate-in slide-in-from-right-10 items-center gap-3 overflow-hidden rounded-2xl border bg-zinc-900 px-4 py-3 shadow-2xl backdrop-blur-xl duration-300 ${toast.type === 'error' ? 'border-red-900/50 bg-red-950/20' : 'border-zinc-800'
                            }`}
                    >
                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${toast.type === 'error' ? 'bg-red-500/20 text-red-500' : 'bg-emerald-500/20 text-emerald-500'
                            }`}>
                            {toast.type === 'error' ? (
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            ) : (
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </div>
                        <p className="flex-1 text-sm font-semibold text-zinc-100">{toast.message}</p>
                        <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full">
                            <div className={`h-full animate-toast-progress ${toast.type === 'error' ? 'bg-red-500' : 'bg-emerald-500'
                                }`} />
                        </div>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast must be used within ToastProvider');
    return context;
}
