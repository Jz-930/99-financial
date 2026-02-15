import { createClient, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';

const space = process.env.CONTENTFUL_SPACE_ID || '';
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || '';

const client = createClient({
    space,
    accessToken,
});

// --- Types based on your Schema ---

export interface ArticlePosting {
    contentTypeId: 'resourcePosting';
    fields: {
        title: string;
        slug: string;
        category: 'Foundational Articles' | 'Planning Concepts'; // Note: Schema said "foundational-articles", "planning-concepts" in validation, checking implementation below
        publishDate: string;
        abstract: string;
        body: Document;
    };
}

export interface GuidePdf {
    contentTypeId: 'guidePdf';
    fields: {
        title: string;
        slug: string;
        publishDate: string;
        abstract: string;
        pdf: {
            fields: {
                title: string;
                file: {
                    url: string;
                    details: {
                        size: number;
                        image?: { width: number; height: number };
                    };
                    fileName: string;
                    contentType: string;
                };
            }
        };
    };
}

export interface EventEntry {
    contentTypeId: 'events';
    fields: {
        title: string;
        slug: string;
        date: string;
        description: string;
        image?: {
            fields: {
                file: {
                    url: string;
                }
            }
        };
    };
}

// --- Fetch Functions ---

export async function getFoundationalArticles() {
    const query: any = {
        content_type: 'resourcePosting',
        'fields.category': 'Foundational Articles',
        order: '-fields.publishDate',
    };
    const entries = await client.getEntries<ArticlePosting>(query);

    if (entries.total === 0) {
        const fallbackQuery: any = {
            content_type: 'resourcePosting',
            'fields.category': 'foundational-articles',
            order: '-fields.publishDate',
        };
        return client.getEntries<ArticlePosting>(fallbackQuery);
    }

    return entries;
}

export async function getPlanningConcepts() {
    const query: any = {
        content_type: 'resourcePosting',
        'fields.category': 'Planning Concepts',
        order: '-fields.publishDate',
    };
    const entries = await client.getEntries<ArticlePosting>(query);

    if (entries.total === 0) {
        const fallbackQuery: any = {
            content_type: 'resourcePosting',
            'fields.category': 'planning-concepts',
            order: '-fields.publishDate',
        };
        return client.getEntries<ArticlePosting>(fallbackQuery);
    }

    return entries;
}

export async function getArticleBySlug(slug: string) {
    const query: any = {
        content_type: 'resourcePosting',
        'fields.slug': slug,
        limit: 1,
    };
    const entries = await client.getEntries<ArticlePosting>(query);
    if (entries.items.length > 0) {
        return entries.items[0];
    }
    return null;
}


export async function getGuides() {
    const query: any = {
        content_type: 'guidePdf',
        order: '-fields.publishDate',
    };
    const entries = await client.getEntries<GuidePdf>(query);
    return entries;
}

export async function getEvents() {
    const query: any = {
        content_type: 'events',
        order: 'fields.date',
    };
    const entries = await client.getEntries<EventEntry>(query);
    return entries;
}
