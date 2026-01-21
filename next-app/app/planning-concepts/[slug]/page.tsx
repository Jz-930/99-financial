
import React from 'react';
import Link from 'next/link';
import { getPostBySlug, getAllPosts, markdownToHtml } from '../../../lib/api';

export async function generateStaticParams() {
    const posts = getAllPosts('planning-concepts', ['slug']);
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function PlanningConcept({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug('planning-concepts', slug, [
        'title',
        'date',
        'slug',
        'content',
    ]);

    const content = await markdownToHtml(post.content || '');

    return (
        <div className="bg-brand-light min-h-screen pt-12 pb-24">
            {/* Breadcrumb / Back Navigation */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <Link href="/planning-concepts" className="text-slate-500 hover:text-brand-gold font-medium mb-8 inline-flex items-center text-sm uppercase tracking-wider transition-colors">
                    <i className="fa-solid fa-arrow-left mr-2"></i> All Planning Concepts
                </Link>
            </div>

            {/* Article Document Card */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl shadow-lg border-t-4 border-brand-gold overflow-hidden">

                    {/* Header Section */}
                    <div className="p-8 md:p-12 border-b border-slate-100 bg-slate-50/50">
                        <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider">
                            <i className="fa-solid fa-lightbulb mr-2 text-brand-gold"></i> Strategy Explainer
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-brand-blue mb-6 leading-tight">
                            {post.title}
                        </h1>
                        {post.date && (
                            <div className="flex items-center text-slate-400 text-sm font-medium uppercase tracking-wider">
                                <i className="fa-regular fa-calendar mr-2"></i>
                                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </div>
                        )}
                    </div>

                    {/* Content Body */}
                    <div className="p-8 md:p-16">
                        <div
                            className="prose prose-lg prose-slate max-w-none 
                  prose-headings:font-serif prose-headings:font-bold prose-headings:text-brand-blue 
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 
                  prose-h3:text-2xl prose-h3:text-slate-700
                  prose-p:leading-relaxed prose-p:text-slate-600
                  prose-li:text-slate-600 prose-li:marker:text-brand-gold
                  prose-strong:text-brand-blue prose-strong:font-bold
                  hover:prose-a:text-brand-gold hover:prose-a:no-underline prose-a:text-brand-blue prose-a:transition-colors"
                            dangerouslySetInnerHTML={{ __html: content }}
                        />

                        {/* Footer/Signature Area */}
                        <div className="mt-16 pt-8 border-t border-slate-100 flex items-center justify-between">
                            <div className="text-slate-400 italic text-sm">
                                99 Financial Inc. — Strategic Wealth Planning
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
