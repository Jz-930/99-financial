
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
    const secret = request.headers.get('x-vercel-reval-key');

    // 1. Verify the secret
    // You should set CONTENTFUL_REVALIDATE_SECRET in your .env.local and Netlify
    if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
        return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    try {
        const body = await request.json();

        // Log the payload for debugging
        console.log('Webhook payload received:', JSON.stringify(body, null, 2));

        // Determine content type
        let contentType = '';
        if (body.sys?.type === 'Asset') {
            contentType = 'Asset';
        } else {
            contentType = body.sys?.contentType?.sys?.id;
        }

        const slug = body.fields?.slug?.['en-US']; // Assuming 'en-US' locale

        console.log(`Revalidating content type: ${contentType}, slug: ${slug}`);

        // 2. Revalidate based on content type
        if (contentType === 'resourcePosting') {
            // Revalidate list pages
            revalidatePath('/foundational-articles');
            revalidatePath('/planning-concepts');

            // Revalidate specific article pages if slug exists
            if (slug) {
                revalidatePath(`/foundational-articles/${slug}`);
                revalidatePath(`/planning-concepts/${slug}`);
            }
        } else if (contentType === 'guidePdf') {
            revalidatePath('/guides');
        } else if (contentType === 'events') {
            revalidatePath('/resources');
        } else if (contentType === 'Asset') {
            // Assets (images, PDFs) might be used anywhere
            // A simple strategy is to revalidate pages that heavily rely on assets,
            // or if we can't track usage easily, we might need to rely on the fact 
            // that Next.js image optimization handles some of this, 
            // but for PDFs (guides) we should revalidate guides page.
            console.log('Asset updated. Revalidating all resource pages to be safe.');
            revalidatePath('/guides');
            revalidatePath('/resources');
            revalidatePath('/about'); // Images in about page
            // Potentially others if assets are used in articles, but we can't easily know which article uses which asset without parsing blocks.
        } else {
            // Default or unknown content type - maybe revalidate everything or log
            console.log('Unknown content type for detailed revalidation, but webhook received.');
        }

        return NextResponse.json({ revalidated: true, now: Date.now() });
    } catch (err) {
        console.error('Error revalidating:', err);
        return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
    }
}
