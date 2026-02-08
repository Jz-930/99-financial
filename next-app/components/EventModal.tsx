'use client';

import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface EventModalProps {
    isOpen: boolean;
    onClose: () => void;
    event: {
        title: string;
        date: string;
        contentHtml?: string;
        summary: string;
    };
}

export default function EventModal({ isOpen, onClose, event }: EventModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    // Close on click outside
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    // Use portal to render at root level to avoid z-index issues
    // Assuming there is a body element, asking for document.body is safe in useEffect/interactivity
    // typically Portals are used, but for simplicity in Next.js app dir, we can render normal fixed overlay if it's high z-index.
    // However, createPortal is better.

    // We need to ensure we are on the client effectively.
    if (typeof document === 'undefined') return null;

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-brand-dark/80 backdrop-blur-sm transition-opacity duration-300" onClick={handleBackdropClick}>
            <div
                ref={modalRef}
                className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden animate-fade-in-up"
            >
                {/* Header */}
                <div className="bg-brand-blue p-6 text-white flex justify-between items-start shrink-0">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="inline-block px-2 py-0.5 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-wider rounded">
                                Event Details
                            </span>
                            <span className="text-brand-gold/80 text-sm font-semibold">
                                {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                        </div>
                        <h2 className="text-2xl font-serif font-bold leading-tight pr-4">{event.title}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white/70 hover:text-brand-gold transition-colors p-1"
                        aria-label="Close modal"
                    >
                        <i className="fa-solid fa-xmark text-2xl"></i>
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="p-8 overflow-y-auto custom-scrollbar">
                    <p className="text-lg text-slate-600 font-medium mb-6 italic border-l-4 border-brand-gold pl-4">
                        {event.summary}
                    </p>

                    <div
                        className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-brand-blue prose-a:text-brand-gold hover:prose-a:text-brand-blue prose-img:rounded-xl"
                        dangerouslySetInnerHTML={{ __html: event.contentHtml || '<p>No details available.</p>' }}
                    />
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end shrink-0 gap-4">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 rounded text-slate-500 font-bold hover:text-brand-blue transition-colors"
                    >
                        Close
                    </button>

                </div>
            </div>
        </div>,
        document.body
    );
}
