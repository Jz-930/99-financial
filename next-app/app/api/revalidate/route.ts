
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
        const contentType = body.sys?.contentType?.sys?.id;
        const slug = body.fields?.slug?.['en-US']; // Assuming 'en-US' locale, adjust if needed specific structure

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
