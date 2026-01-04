"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchHistory, sendMessage as apiSendMessage } from '../services/api';
import { formatAIResponse } from '../utils/formatResponse';

const ChatContext = createContext();

export function ChatProvider({ children }) {
    const [messages, setMessages] = useState([]);
    const [history, setHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentChatId, setCurrentChatId] = useState(null);
    const [user, setUser] = useState({
        name: "Aditya User",
        email: "aditya@example.com",
        avatar: "AD",
        tier: "Free"
    });

    useEffect(() => {
        const loadHistory = async () => {
            const data = await fetchHistory();
            setHistory(data);
        };
        loadHistory();
    }, []);

    const sendMessage = async (text) => {
        const userMessage = {
            id: Date.now(),
            text,
            sender: 'user',
            timestamp: new Date().toISOString()
        };

        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);

        try {
            const response = await apiSendMessage(text);
            const aiMessage = {
                ...response,
                text: formatAIResponse(response.text)
            };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error('Failed to send message:', error);
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: "Sorry, I encountered an error. Please try again.",
                sender: 'ai',
                timestamp: new Date().toISOString()
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const startNewChat = () => {
        setMessages([]);
        setCurrentChatId(null);
    };

    const selectChat = (id) => {
        setCurrentChatId(id);
        // Mocking history restore
        setMessages([
            { id: Date.now(), text: `Restored conversation ${id}`, sender: 'ai', timestamp: new Date().toISOString() }
        ]);
    };

    const deleteChat = (id) => {
        setHistory(prev => prev.filter(chat => chat.id !== id));
        if (currentChatId === id) {
            startNewChat();
        }
    };

    return (
        <ChatContext.Provider value={{
            messages,
            history,
            isLoading,
            currentChatId,
            sendMessage,
            startNewChat,
            selectChat,
            deleteChat,
            user
        }}>
            {children}
        </ChatContext.Provider>
    );
}

export function useChat() {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
}
