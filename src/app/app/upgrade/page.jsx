"use client";

import React from 'react';
import PlaceholderPage from '../components/PlaceholderPage';

export default function UpgradePage() {
    return (
        <PlaceholderPage
            title="Upgrade to Pro"
            icon={
                <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            }
            description="Unlock advanced models, faster response times, and exclusive features with ChatBox Pro."
        />
    );
}
