"use client";

import React from 'react';
import PlaceholderPage from '../components/PlaceholderPage';

export default function SearchPage() {
    return (
        <PlaceholderPage
            title="Search Chats"
            icon={
                <svg className="w-8 h-8 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            }
            description="Advanced search functionality to find your past conversations is coming soon."
        />
    );
}
