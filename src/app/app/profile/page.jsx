"use client";

import React from 'react';
import PlaceholderPage from '../components/PlaceholderPage';

export default function ProfilePage() {
    return (
        <PlaceholderPage
            title="Profile Settings"
            icon={
                <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold text-white">AD</div>
            }
            description="Customize your personal information, specialized instructions, and account preferences."
        />
    );
}
