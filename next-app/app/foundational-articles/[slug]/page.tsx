import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getFoundationalArticles, ArticlePosting } from '../../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';



export async function generateStaticParams() {
    const articlesRes = await getFoundationalArticles();
    const posts = articlesRes.items as unknown as ArticlePosting[];

    return posts.map((post) => ({
        slug: post.fields.slug,
    }));
}

const renderOptions = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p className="mb-6 leading-relaxed text-slate-700 text-lg">{children}</p>,
        [BLOCKS.HEADING_2]: (node: any, children: any) => <h2 className="text-3xl font-serif font-bold text-brand-blue mt-12 mb-6">{children}</h2>,
        [BLOCKS.HEADING_3]: (node: any, children: any) => <h3 className="text-2xl font-bold text-brand-blue mt-8 mb-4">{children}</h3>,
        [BLOCKS.UL_LIST]: (node: any, children: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">{children}</ul>,
        [BLOCKS.OL_LIST]: (node: any, children: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-slate-700">{children}</ol>,
        [BLOCKS.QUOTE]: (node: any, children: any) => (
            <blockquote className="border-l-4 border-brand-gold pl-6 py-2 my-8 italic text-slate-600 bg-slate-50 rounded-r-lg">
                {children}
            </blockquote>
        ),
    },
    renderMark: {
        [MARKS.BOLD]: (text: any) => <strong className="font-bold text-brand-blue">{text}</strong>,
    }
};

export default async function FoundationalArticlePost({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const postEntry = await getArticleBySlug(resolvedParams.slug);

    if (!postEntry) {
        notFound();
    }

    const post = postEntry.fields as unknown as ArticlePosting['fields'];

    return (
        <article className="bg-white min-h-screen">
            {/* Header */}
            <div className="relative bg-brand-dark py-24 px-4 sm:px-6 lg:px-8 text-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-blue opacity-50"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-gold rounded-full filter blur-3xl opacity-20"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <Link href="/foundational-articles" className="inline-flex items-center text-brand-gold hover:text-white transition mb-8 text-sm font-bold uppercase tracking-wider">
                        <i className="fa-solid fa-arrow-left mr-2"></i> Back to Articles
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center text-slate-300 text-sm">
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                        <span className="mx-2">•</span>
                        <span>Foundational Article</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="prose prose-lg prose-slate max-w-none">
                    {/* 
                        Render Rich Text from Contentful. 
                        We handle the formatting via renderOptions passed to documentToReactComponents.
                     */}
                    {documentToReactComponents(post.body, renderOptions)}
                </div>

                {/* Footer CTA */}
                <div className="mt-16 pt-8 border-t border-slate-200">
                    <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 text-center">
                        <h3 className="text-xl font-bold text-brand-blue mb-2">Have questions about this topic?</h3>
                        <p className="text-slate-600 mb-6">Schedule a private review to discuss how this applies to your situation.</p>
                        <Link href="/contact" className="inline-block bg-brand-gold text-white font-bold py-3 px-8 rounded hover:bg-brand-goldHover transition-colors shadow-lg">
                            Book a Strategy Review
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
