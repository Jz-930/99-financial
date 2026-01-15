
import React from 'react';
import FAQAccordion from '../../components/FAQAccordion';
import ScrollAnimation from '../../components/ScrollAnimation';

export default function FAQPage() {
    return (
        <main className="bg-white">
            <section className="hero-gradient relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
                    <ScrollAnimation className="fade-in-up">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Common Questions</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white text-shadow-lg">
                            FAQ
                        </h1>
                        <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
                            Answers to common questions about Corporate Insurance, CDA, and IFA strategies.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            <section className="py-24 relative bg-brand-light/30">
                <div className="logo-pattern-bg opacity-5"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <FAQAccordion />
                </div>
            </section>
        </main>
    );
}
