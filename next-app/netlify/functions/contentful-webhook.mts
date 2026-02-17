import type { Handler, HandlerEvent } from "@netlify/functions";
import { getStore } from "@netlify/blobs";

const DEBOUNCE_STORE = "contentful-debounce";
const BLOB_KEY = "lastContentfulUpdate";

export const handler: Handler = async (event: HandlerEvent) => {
    // Only accept POST requests
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: JSON.stringify({ message: "Method Not Allowed" }) };
    }

    // Validate the secret
    const secret = event.headers["x-vercel-reval-key"];
    if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
        return { statusCode: 401, body: JSON.stringify({ message: "Invalid secret" }) };
    }

    try {
        // Store the current timestamp in Netlify Blobs
        const store = getStore(DEBOUNCE_STORE);
        const now = Date.now().toString();
        await store.set(BLOB_KEY, now);

        console.log(`Contentful webhook received. Timestamp stored: ${now}. Build will be triggered after 3 minutes of inactivity.`);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Update received. Build will be triggered after 3 minutes of inactivity.",
                timestamp: now,
            }),
        };
    } catch (err) {
        console.error("Error handling webhook:", err);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Error processing webhook", error: String(err) }),
        };
    }
};
