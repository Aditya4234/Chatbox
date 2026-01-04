"use client";

import React from 'react';
import PlaceholderPage from '../components/PlaceholderPage';

export default function ImagesPage() {
    return (
        <PlaceholderPage
            title="Image Generation"
            icon={
                <svg className="w-8 h-8 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            }
            description="Create stunning AI-generated images directly within ChatBox in the next update."
        />
    );
}
