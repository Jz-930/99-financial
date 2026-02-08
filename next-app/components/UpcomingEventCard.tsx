'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import EventModal from './EventModal';

interface UpcomingEventCardProps {
    event: {
        title: string;
        date: string;
        summary: string;
        slug: string;
        contentHtml?: string;
    } | null;
}

export default function UpcomingEventCard({ event }: UpcomingEventCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!event) {
        return (
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200 h-full flex flex-col">
                <div className="relative h-64 md:h-80 w-full">
                    <Image
                        src="/images/events_session_highlight_1.jpg"
                        alt="Planning Session"
                        fill
                        className="object-cover grayscale opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent flex items-end">
                        <div className="p-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                Future Planning Sessions
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="p-8 flex-grow flex items-center justify-center text-center">
                    <p className="text-slate-500 italic">
                        We are currently curating our next series of strategic planning sessions.
                        Please check back soon for upcoming dates.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200 h-full flex flex-col">
                {/* Feature Image */}
                <div className="relative h-64 md:h-80 w-full group cursor-pointer overflow-hidden" onClick={() => setIsModalOpen(true)}>
                    <Image
                        src="/images/events_session_highlight_1.jpg"
                        alt="Strategic Planning Session"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent flex items-end">
                        <div className="p-8">
                            <span className="inline-block px-3 py-1 bg-brand-gold text-white text-xs font-bold uppercase tracking-wider rounded mb-3">
                                Upcoming Session
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">
                                {event.title}
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                    <div className="flex items-center text-brand-blue mb-6">
                        <i className="fa-regular fa-calendar-check mr-3 text-brand-gold text-xl"></i>
                        <span className="text-lg font-bold">
                            {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-lg mb-8 flex-grow">
                        {event.summary}
                    </p>
                    <div className="mt-auto">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center text-brand-blue font-bold uppercase tracking-wider hover:text-brand-gold transition-colors duration-300"
                        >
                            View Details <i className="fa-solid fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>

            <EventModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                event={event}
            />
        </>
    );
}
