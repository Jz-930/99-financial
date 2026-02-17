import { getStore } from "@netlify/blobs";

const DEBOUNCE_STORE = "contentful-debounce";
const BLOB_KEY = "lastContentfulUpdate";
const DEBOUNCE_MS = 3 * 60 * 1000; // 3 minutes

// Netlify Scheduled Function: runs every 3 minutes
export default async () => {
    try {
        const store = getStore(DEBOUNCE_STORE);
        const lastUpdate = await store.get(BLOB_KEY, { type: "text" });

        if (!lastUpdate) {
            console.log("No pending Contentful updates. Skipping.");
            return;
        }

        const lastUpdateTime = parseInt(lastUpdate, 10);
        const elapsed = Date.now() - lastUpdateTime;

        if (elapsed < DEBOUNCE_MS) {
            console.log(`Last update was ${Math.round(elapsed / 1000)}s ago. Waiting for 3 minutes of inactivity. Skipping.`);
            return;
        }

        // 3 minutes have passed since the last update — trigger rebuild
        const buildHookUrl = process.env.NETLIFY_BUILD_HOOK_URL;
        if (!buildHookUrl) {
            console.error("NETLIFY_BUILD_HOOK_URL is not set. Cannot trigger build.");
            return;
        }

        console.log(`Triggering Netlify rebuild. Last update was ${Math.round(elapsed / 1000)}s ago.`);
        const response = await fetch(buildHookUrl, { method: "POST" });

        if (response.ok) {
            console.log("Build triggered successfully. Clearing timestamp.");
            await store.delete(BLOB_KEY);
        } else {
            console.error(`Failed to trigger build. Status: ${response.status}`);
        }
    } catch (err) {
        console.error("Error in check-rebuild:", err);
    }
};

export const config = {
    schedule: "*/3 * * * *", // Every 3 minutes
};
