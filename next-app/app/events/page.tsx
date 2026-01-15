
import React from 'react';
import Link from 'next/link';
import ScrollAnimation from '../../components/ScrollAnimation';

export default function EventsPage() {
    return (
        <main className="bg-white">
            <section className="hero-gradient relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Join Us</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white text-shadow-lg">
                            Events
                        </h1>
                        <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
                            Educational webinars and seminars designed for Canadian business owners.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            <section className="py-24 relative bg-brand-light/30">
                <div className="logo-pattern-bg opacity-5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Online Webinar */}
                        <ScrollAnimation className="service-card fade-in-up bg-white rounded-xl shadow-xl hover:shadow-2xl border border-slate-100 overflow-hidden flex flex-col h-full group hover:-translate-y-2">
                            <div className="h-48 bg-brand-blue/5 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-brand-blue/5 group-hover:bg-brand-blue/10 transition duration-500"></div>
                                <i className="fa-solid fa-laptop-code text-7xl text-brand-blue transform group-hover:scale-110 transition duration-500"></i>
                            </div>
                            <div className="p-8 flex-1 flex flex-col text-center">
                                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4">Online Webinar</h3>
                                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                                    Join our virtual sessions from anywhere. Learn about Corporate Par, CDA strategies, and Tax-Efficient Wealth Transfer.
                                </p>
                                <button disabled className="mt-auto block w-full py-4 bg-slate-100 text-slate-400 font-bold rounded-sm cursor-not-allowed uppercase tracking-wider text-sm">
                                    Stay Tuned
                                </button>
                            </div>
                        </ScrollAnimation>

                        {/* In-person seminar */}
                        <ScrollAnimation className="service-card fade-in-up bg-white rounded-xl shadow-xl hover:shadow-2xl border border-slate-100 overflow-hidden flex flex-col h-full group hover:-translate-y-2" delay={100}>
                            <div className="h-48 bg-brand-gold/10 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-brand-gold/5 group-hover:bg-brand-gold/20 transition duration-500"></div>
                                <i className="fa-solid fa-users text-7xl text-brand-gold transform group-hover:scale-110 transition duration-500"></i>
                            </div>
                            <div className="p-8 flex-1 flex flex-col text-center">
                                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4">In-Person Seminar</h3>
                                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                                    Exclusive in-person events in Toronto and GTA. Network with other professionals and get deep insights into corporate planning.
                                </p>
                                <button disabled className="mt-auto block w-full py-4 bg-slate-100 text-slate-400 font-bold rounded-sm cursor-not-allowed uppercase tracking-wider text-sm">
                                    Stay Tuned
                                </button>
                            </div>
                        </ScrollAnimation>

                        {/* Upcoming Events */}
                        <ScrollAnimation className="service-card fade-in-up bg-white rounded-xl shadow-xl hover:shadow-2xl border border-slate-100 overflow-hidden flex flex-col h-full group hover:-translate-y-2" delay={200}>
                            <div className="h-48 bg-slate-100 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-slate-200/50 group-hover:bg-slate-200 transition duration-500"></div>
                                <i className="fa-regular fa-calendar-check text-7xl text-slate-500 transform group-hover:scale-110 transition duration-500"></i>
                            </div>
                            <div className="p-8 flex-1 flex flex-col text-center">
                                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4">Upcoming Events</h3>
                                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                                    Check back regularly for our upcoming schedule of special topics, guest speakers, and seasonal workshops.
                                </p>
                                <Link href="/contact" className="mt-auto block w-full py-4 border border-brand-gold text-brand-gold font-bold rounded-sm hover:bg-brand-gold hover:text-white transition uppercase tracking-wider text-sm">
                                    Contact for Updates
                                </Link>
                            </div>
                        </ScrollAnimation>

                    </div>
                </div>
            </section>
        </main>
    );
}
