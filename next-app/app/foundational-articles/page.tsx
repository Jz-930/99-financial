
import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '../../lib/api';

export default function FoundationalArticlesIndex() {
    const posts = getAllPosts('foundational-articles', [
        'title',
        'date',
        'slug',
        'excerpt',
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
                        Foundational Articles
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Core principles of corporate financial planning, taxation, and wealth structure design.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 gap-6">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/foundational-articles/${post.slug}`} className="group block">
                            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 transition-all duration-300 hover:shadow-xl hover:border-brand-gold/30 hover:-translate-y-1">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                    <div className="flex-grow">
                                        <h2 className="text-2xl font-bold font-serif text-brand-blue mb-3 group-hover:text-brand-gold transition-colors duration-300">
                                            {post.title}
                                        </h2>
                                        <p className="text-slate-600 text-lg leading-relaxed mb-6 group-hover:text-slate-700">
                                            {post.excerpt}
                                        </p>
                                        <span className="inline-flex items-center text-brand-blue font-bold uppercase tracking-wider text-xs border-b-2 border-brand-gold/20 pb-1 group-hover:border-brand-gold transition-all">
                                            Read Article <i className="ml-2 fa-solid fa-arrow-right text-brand-gold group-hover:translate-x-1 transition-transform"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
