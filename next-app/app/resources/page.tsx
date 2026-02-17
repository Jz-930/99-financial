import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';
import UpcomingEventCard from '../../components/UpcomingEventCard';
import { getAllPosts, markdownToHtml } from '../../lib/api';
import { getEvents, EventEntry } from '../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const metadata = {
    title: 'Resources | 99 Financial Inc.',
    description: 'Educational articles, planning frameworks, in-depth PDF guides, and upcoming events on corporate wealth planning and tax-efficient strategies.',
};



export default async function ResourcesPage() {
    // Fetch events from Contentful
    const allEventsRes = await getEvents();
    const allEvents = allEventsRes.items as unknown as EventEntry[];

    const now = new Date();
    // Filter upcoming: Date >= today
    const upcomingSessions = allEvents
        .filter(event => new Date(event.fields.date) >= now)
        .sort((a, b) => new Date(a.fields.date).getTime() - new Date(b.fields.date).getTime());

    // Filter past: Date < today
    // User logic: "Events & Sessions grab first 3. Nearest = Upcoming. 2nd & 3rd = Past"
    // Actually, user said: "mostly recent one in upcoming, 2nd and 3rd recent in past session"
    // Let's interpret: 
    // If we have upcoming events, take the soonest one as "Featured Upcoming".
    // Then take the next 2 events (could be further upcoming OR past?)
    // "second and third recent" implies looking backwards if we talk about "recent".
    // Let's stick to standard logic: 
    // 1. Featured = Next Upcoming Event
    // 2. Past List = Previous events (most recent first)

    // Re-reading user request carefully: "Events & Sessions grab events first 3, closest one put in upcoming session, second and third closest put in past session."
    // "Closest" usually means difference from NOW. 
    // IF all are past, closest is the one just passed.
    // IF some are future, closest is the next one.

    // Let's implement:
    // Featured: The single nearest Upcoming event.
    // Past Grid: The 2 most recent Past events.

    const pastSessions = allEvents
        .filter(event => new Date(event.fields.date) < now)
        .sort((a, b) => new Date(b.fields.date).getTime() - new Date(a.fields.date).getTime()) // Descending
        .slice(0, 2);

    let featuredEvent = null;
    if (upcomingSessions.length > 0) {
        featuredEvent = {
            title: upcomingSessions[0].fields.title,
            slug: upcomingSessions[0].fields.slug,
            date: upcomingSessions[0].fields.date,
            summary: upcomingSessions[0].fields.description,
            // image: upcomingSessions[0].fields.image?.fields.file.url // If added to card
        };
    }

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="hero-gradient relative h-auto min-h-[40vh] md:min-h-[400px] flex items-center text-white overflow-hidden py-16 md:py-0">
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
            <section className="py-16 md:py-24 relative bg-brand-light/30">
                <div className="logo-pattern-bg opacity-5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Foundational Articles */}
                        <ScrollAnimation className="fade-in-up" id="foundational-articles">
                            <Link href="/foundational-articles" className="group block h-full">
                                <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg border border-slate-100 hover:shadow-2xl hover:border-brand-gold/50 transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
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
                        <ScrollAnimation className="fade-in-up" delay={50} id="planning-concepts">
                            <Link href="/planning-concepts" className="group block h-full">
                                <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg border border-slate-100 hover:shadow-2xl hover:border-brand-gold/50 transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
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
                        <ScrollAnimation className="fade-in-up" delay={100} id="guides">
                            <Link href="/guides" className="group block h-full">
                                <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg border border-slate-100 hover:shadow-2xl hover:border-brand-gold/50 transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
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
                        <ScrollAnimation className="fade-in-up" delay={150}>
                            <Link href="/faq" className="group block h-full">
                                <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg border border-slate-100 hover:shadow-2xl hover:border-brand-gold/50 transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
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

            {/* Events Section - Redesigned */}
            <section className="py-16 md:py-24 bg-white relative" id="upcoming-sessions">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation className="fade-in-up">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-12 text-center">Events & Sessions</h2>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column: Upcoming/Current Session (Big Box) */}
                        <div className="lg:col-span-2">
                            <ScrollAnimation className="fade-in-up" id="upcoming-session-feature">
                                {featuredEvent ? (
                                    <UpcomingEventCard event={featuredEvent} />
                                ) : (
                                    <div className="bg-slate-50 rounded-xl p-10 border border-slate-200 h-full flex flex-col items-center justify-center text-center">
                                        <div className="mb-4 text-slate-300 text-5xl">
                                            <i className="fa-regular fa-calendar-xmark"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-brand-blue mb-2">No Upcoming Sessions</h3>
                                        <p className="text-slate-500">Check back later for new dates.</p>
                                    </div>
                                )}
                            </ScrollAnimation>
                        </div>

                        {/* Right Column: Past Sessions (Two Small Boxes) */}
                        <div className="lg:col-span-1 flex flex-col gap-8">
                            {pastSessions.map((event, index) => (
                                <ScrollAnimation key={event.fields.slug} delay={50 * (index + 1)} className="fade-in-up flex-1">
                                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-brand-gold/50 transition-all duration-300 h-full flex flex-col group">
                                        <div className="mb-4">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Past Session</span>
                                            <h4 className="text-lg font-bold text-brand-blue group-hover:text-brand-gold transition-colors mt-1 line-clamp-2">
                                                {event.fields.title}
                                            </h4>
                                            <p className="text-slate-600 text-sm mt-3 line-clamp-3 leading-relaxed">
                                                {event.fields.description}
                                            </p>
                                        </div>
                                        <div className="mt-auto">
                                            <p className="text-sm text-slate-500 mb-3">
                                                {new Date(event.fields.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ))}

                            {pastSessions.length === 0 && (
                                <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 h-full flex items-center justify-center text-center">
                                    <p className="text-slate-400 text-sm italic">No past sessions archive available.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
