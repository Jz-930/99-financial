import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '../../components/ScrollAnimation';
import { getAllPosts } from '../../lib/api';

export default async function GuidesPage() {
    // Fetch guides
    const guides = getAllPosts('guides', ['title', 'excerpt', 'body', 'date', 'pdf_file', 'slug']);

    // Sort by date (newest first)
    const sortedGuides = guides.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="bg-brand-dark py-20 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-gold rounded-full filter blur-3xl"></div>
                    <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-brand-blue rounded-full filter blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <ScrollAnimation className="fade-in-up">
                        <Link href="/resources" className="inline-flex items-center text-brand-gold hover:text-white transition mb-6 text-sm font-bold uppercase tracking-wider">
                            <i className="fa-solid fa-arrow-left mr-2"></i> Back to Resources
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">In-Depth Guides</h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                            Download comprehensive whitepapers and detailed guides on corporate planning strategies.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Guides List */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {sortedGuides.length > 0 ? (
                        <div className="space-y-8">
                            {sortedGuides.map((guide, index) => (
                                <ScrollAnimation key={guide.slug} className="fade-in-up" delay={index * 100}>
                                    <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-8 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-8 items-start">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-lg bg-red-50 flex items-center justify-center text-red-500 text-3xl">
                                                <i className="fa-solid fa-file-pdf"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <h2 className="text-2xl font-bold text-brand-blue mb-3">{guide.title}</h2>
                                            <div className="text-slate-600 mb-6 prose max-w-none">
                                                <p>{guide.excerpt || guide.body}</p>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                {guide.pdf_file ? (
                                                    <a
                                                        href={guide.pdf_file}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center px-6 py-3 bg-brand-blue text-white rounded hover:bg-brand-gold transition-colors font-semibold text-sm"
                                                    >
                                                        Download PDF <i className="fa-solid fa-download ml-2"></i>
                                                    </a>
                                                ) : (
                                                    <span className="text-slate-400 text-sm italic">PDF download coming soon</span>
                                                )}
                                                <span className="text-slate-400 text-sm">
                                                    Updated: {new Date(guide.date).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="mb-6 w-20 h-20 rounded-full bg-slate-100 mx-auto flex items-center justify-center text-slate-300 text-4xl">
                                <i className="fa-solid fa-file-pdf"></i>
                            </div>
                            <h3 className="text-xl font-bold text-slate-600 mb-2">Guides Coming Soon</h3>
                            <p className="text-slate-500 max-w-md mx-auto">We are currently curating our in-depth guides. Please check back shortly for new content.</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
