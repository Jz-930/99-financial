import { getStore } from "@netlify/blobs";

export default async (req: Request) => {
    // Only accept POST requests
    if (req.method !== "POST") {
        return new Response(JSON.stringify({ message: "Method Not Allowed" }), {
            status: 405,
            headers: { "Content-Type": "application/json" },
        });
    }

    // Validate the secret
    const secret = req.headers.get("x-vercel-reval-key");
    if (secret !== Netlify.env.get("CONTENTFUL_REVALIDATE_SECRET")) {
        return new Response(JSON.stringify({ message: "Invalid secret" }), {
            status: 401,
            headers: { "Content-Type": "application/json" },
        });
    }

    try {
        // Store the current timestamp in Netlify Blobs
        const store = getStore("contentful-debounce");
        const now = Date.now().toString();
        await store.set("lastContentfulUpdate", now);

        console.log(`Contentful webhook received. Timestamp stored: ${now}`);

        return new Response(
            JSON.stringify({
                message: "Update received. Build will be triggered after 3 minutes of inactivity.",
                timestamp: now,
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (err) {
        console.error("Error handling webhook:", err);
        return new Response(
            JSON.stringify({ message: "Error processing webhook", error: String(err) }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
};
