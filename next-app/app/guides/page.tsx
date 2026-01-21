
import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '../../lib/api';

export default function GuidesIndex() {
    const posts = getAllPosts('guides', [
        'title',
        'date',
        'slug',
        'excerpt',
        'pdf_file'
    ]);

    return (
        <div className="bg-brand-light min-h-screen">
            {/* Header with Mesh Background */}
            <div className="relative bg-white border-b border-slate-200 overflow-hidden">
                <div className="absolute inset-0 bg-mesh opacity-60"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                    <Link href="/resources" className="text-brand-gold font-bold hover:underline mb-6 inline-flex items-center text-sm uppercase tracking-wider transition-colors">
                        <i className="fa-solid fa-arrow-left mr-2"></i> Back to Resources
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mb-6 leading-tight">
                        In-Depth Guides
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Comprehensive whitepapers and downloadable guides for detailed study and reference.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {posts.length === 0 ? (
                        <div className="col-span-1 md:col-span-2 text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                                <i className="fa-solid fa-folder-open text-2xl"></i>
                            </div>
                            <p className="text-slate-500 italic text-lg">No guides available at this time.</p>
                            <p className="text-slate-400 text-sm mt-2">Please check back later for new content.</p>
                        </div>
                    ) : (
                        posts.map((post) => (
                            <div key={post.slug} className="group bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-gold/30 transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-brand-blue group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                                        <i className="fa-solid fa-file-pdf text-xl"></i>
                                    </div>
                                </div>
                                <h2 className="text-xl font-bold font-serif text-brand-blue mb-3 group-hover:text-brand-gold transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
                                    {post.excerpt}
                                </p>
                                {post.pdf_file ? (
                                    <a href={post.pdf_file} className="inline-flex items-center text-sm font-bold text-brand-blue hover:text-brand-gold uppercase tracking-wider mt-auto" target="_blank" rel="noopener noreferrer">
                                        <span className="border-b-2 border-brand-gold/20 pb-1 group-hover:border-brand-gold transition-all">Download PDF</span> <i className="ml-2 fa-solid fa-download"></i>
                                    </a>
                                ) : (
                                    <span className="text-slate-400 text-xs uppercase tracking-wider font-bold mt-auto bg-slate-100 py-1 px-3 rounded-full self-start">Coming Soon</span>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
