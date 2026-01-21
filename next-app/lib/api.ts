import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content');

export interface Post {
    slug: string;
    title: string;
    excerpt?: string;
    date: string;
    content: string;
    contentHtml?: string;
    [key: string]: any;
}

export function getPostSlugs(category: string) {
    const categoryPath = path.join(postsDirectory, category);
    if (!fs.existsSync(categoryPath)) return [];
    return fs.readdirSync(categoryPath);
}

export function getPostBySlug(category: string, slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, category, `${realSlug}.md`);

    if (!fs.existsSync(fullPath)) {
        throw new Error(`File not found: ${fullPath}`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const items: Post = {
        slug: realSlug,
        title: '',
        date: '',
        content: content,
    };

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug;
        }
        if (field === 'content') {
            items[field] = content;
        }
        if (typeof data[field] !== 'undefined') {
            items[field] = data[field];
        }
    });

    return items;
}

export function getAllPosts(category: string, fields: string[] = []) {
    const slugs = getPostSlugs(category);
    const posts = slugs
        .filter((slug) => slug.endsWith('.md'))
        .map((slug) => getPostBySlug(category, slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}

export async function markdownToHtml(markdown: string) {
    const result = await remark().use(html).process(markdown);
    return result.toString();
}
