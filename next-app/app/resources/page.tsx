

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';
import { getAllPosts } from '../../lib/api';

export default async function ResourcesPage() {
    const events = getAllPosts('events', ['title', 'category', 'summary', 'slug', 'date']);

    const upcomingSessions = events.filter(e => e.category === 'upcoming');
    const pastSessions = events.filter(e => e.category === 'past');
    const sessionUsage = events.filter(e => e.category === 'usage');

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="hero-gradient relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Knowledge Center</span>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white text-shadow-lg leading-tight">
                            How We Think About<br />Long-Term Corporate Planning
                        </h1>
                        <p className="text-xl text-slate-200 max-w-4xl mx-auto font-light leading-relaxed">
                            The resources below are designed to help business owners understand the long-term implications of corporate wealth, taxation, liquidity, and planning decisions — before solutions are discussed.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Main Resources Grid */}
            <section className="py-24 relative bg-brand-light/30">
                <div className="logo-pattern-bg opacity-5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Foundational Articles */}
                        <ScrollAnimation className="fade-in-up" id="foundational-articles">
                            <Link href="/foundational-articles" className="group block h-full">
                                <div className="bg-white p-10 rounded-xl shadow-lg border border-slate-100 hover:shadow-2xl hover:border-brand-gold/50 transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
                                    <div className="mb-6 w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-brand-gold text-2xl group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                                        <i className="fa-solid fa-layer-group"></i>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4 group-hover:text-brand-gold transition-colors">Foundational Articles</h3>
                                    <p className="text-slate-600 flex-grow mb-6 leading-relaxed">
                                        Core principles of corporate financial planning, taxation, and wealth structure design.
                                    </p>
                                    <div className="text-brand-blue font-bold text-sm uppercase tracking-wider flex items-center mt-auto group-hover:translate-x-2 transition-transform duration-300">
                                        View Articles <i className="fa-solid fa-arrow-right ml-2 text-brand-gold"></i>
                                    </div>
                                </div>
                            </Link>
                        </ScrollAnimation>

                        {/* Strategy Explainers */}
                        <ScrollAnimation className="fade-in-up" delay={100} id="planning-concepts">
                            <Link href="/planning-concepts" className="group block h-full">
                                <div className="bg-white p-10 rounded-xl shadow-lg border border-slate-100 hover:shadow-2xl hover:border-brand-gold/50 transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
                                    <div className="mb-6 w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-brand-gold text-2xl group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                                        <i className="fa-solid fa-lightbulb"></i>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4 group-hover:text-brand-gold transition-colors">Planning Concepts & Frameworks</h3>
                                    <p className="text-slate-600 flex-grow mb-6 leading-relaxed">
                                        Breakdowns of specific strategies like Corporate Par, CDA, and IFA, explaining how they work in practice.
                                    </p>
                                    <div className="text-brand-blue font-bold text-sm uppercase tracking-wider flex items-center mt-auto group-hover:translate-x-2 transition-transform duration-300">
                                        Explore Concepts <i className="fa-solid fa-arrow-right ml-2 text-brand-gold"></i>
                                    </div>
                                </div>
                            </Link>
                        </ScrollAnimation>

                        {/* In-Depth Guides */}
                        <ScrollAnimation className="fade-in-up" delay={200} id="guides">
                            <Link href="/guides" className="group block h-full">
                                <div className="bg-white p-10 rounded-xl shadow-lg border border-slate-100 hover:shadow-2xl hover:border-brand-gold/50 transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
                                    <div className="mb-6 w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-brand-gold text-2xl group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                                        <i className="fa-solid fa-file-pdf"></i>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4 group-hover:text-brand-gold transition-colors">In-Depth Guides (PDF)</h3>
                                    <p className="text-slate-600 flex-grow mb-6 leading-relaxed">
                                        Comprehensive whitepapers and downloadable guides for detailed study and reference.
                                    </p>
                                    <div className="text-brand-blue font-bold text-sm uppercase tracking-wider flex items-center mt-auto group-hover:translate-x-2 transition-transform duration-300">
                                        Download Guides <i className="fa-solid fa-arrow-right ml-2 text-brand-gold"></i>
                                    </div>
                                </div>
                            </Link>
                        </ScrollAnimation>

                        {/* FAQ */}
                        <ScrollAnimation className="fade-in-up" delay={300}>
                            <Link href="/faq" className="group block h-full">
                                <div className="bg-white p-10 rounded-xl shadow-lg border border-slate-100 hover:shadow-2xl hover:border-brand-gold/50 transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
                                    <div className="mb-6 w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-brand-gold text-2xl group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                                        <i className="fa-solid fa-circle-question"></i>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4 group-hover:text-brand-gold transition-colors">Frequently Asked Questions</h3>
                                    <p className="text-slate-600 flex-grow mb-6 leading-relaxed">
                                        Answers to common questions about structures, risks, implementation processes, and eligibility.
                                    </p>
                                    <div className="text-brand-blue font-bold text-sm uppercase tracking-wider flex items-center mt-auto group-hover:translate-x-2 transition-transform duration-300">
                                        View FAQ <i className="fa-solid fa-arrow-right ml-2 text-brand-gold"></i>
                                    </div>
                                </div>
                            </Link>
                        </ScrollAnimation>

                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className="py-24 bg-white relative" id="events">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-16 text-center">Events & Sessions</h2>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Upcoming Sessions */}
                        <ScrollAnimation className="fade-in-up" id="upcoming-sessions">
                            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 h-full">
                                <h3 className="text-xl font-bold text-brand-blue mb-6 border-b border-brand-gold/20 pb-4">Upcoming Sessions</h3>
                                <div className="space-y-4">
                                    {upcomingSessions.length > 0 ? upcomingSessions.map(event => (
                                        <div key={event.slug} className="mb-4">
                                            <h4 className="font-bold text-lg text-slate-800">{event.title}</h4>
                                            <p className="text-sm text-slate-500 mb-1">{new Date(event.date).toLocaleDateString()}</p>
                                            <p className="text-slate-600 text-sm">{event.summary}</p>
                                        </div>
                                    )) : (
                                        <p className="text-slate-500 text-sm italic">No upcoming sessions scheduled at this moment.</p>
                                    )}
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Past Sessions */}
                        <ScrollAnimation className="fade-in-up" delay={100} id="past-sessions">
                            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 h-full">
                                <h3 className="text-xl font-bold text-brand-blue mb-6 border-b border-brand-gold/20 pb-4">Past Sessions</h3>
                                <div className="space-y-4">
                                    {pastSessions.length > 0 ? pastSessions.map(event => (
                                        <div key={event.slug} className="mb-4">
                                            <h4 className="font-bold text-lg text-slate-800">{event.title}</h4>
                                            <p className="text-sm text-slate-500 mb-1">{new Date(event.date).toLocaleDateString()}</p>
                                            <p className="text-slate-600 text-sm">{event.summary}</p>
                                        </div>
                                    )) : (
                                        <p className="text-slate-500 text-sm italic">No past session archives available.</p>
                                    )}
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* How These Sessions Are Used */}
                        <ScrollAnimation className="fade-in-up" delay={200} id="session-usage">
                            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 h-full">
                                <h3 className="text-xl font-bold text-brand-blue mb-6 border-b border-brand-gold/20 pb-4">How These Sessions Are Used</h3>
                                <div className="space-y-4">
                                    {sessionUsage.length > 0 ? sessionUsage.map(event => (
                                        <div key={event.slug} className="mb-4">
                                            <h4 className="font-bold text-lg text-slate-800">{event.title}</h4>
                                            <p className="text-slate-600 text-sm">{event.summary}</p>
                                        </div>
                                    )) : (
                                        <p className="text-slate-500 text-sm italic">Information on session usage is currently being updated.</p>
                                    )}
                                </div>
                            </div>
                        </ScrollAnimation>

                    </div>
                </div>
            </section>
        </main>
    );
}
