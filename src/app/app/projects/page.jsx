"use client";

import React from 'react';
import PlaceholderPage from '../components/PlaceholderPage';

export default function ProjectsPage() {
    return (
        <PlaceholderPage
            title="Projects"
            icon={
                <svg className="w-8 h-8 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            }
            description="Manage and organize your conversations into specific projects for better workflow."
        />
    );
}
