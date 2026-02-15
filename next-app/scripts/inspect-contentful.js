const contentful = require('contentful-management');
require('dotenv').config({ path: '.env.local' });

const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
});

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ENVIRONMENT_ID = 'master';

async function run() {
    try {
        const space = await client.getSpace(SPACE_ID);
        const environment = await space.getEnvironment(ENVIRONMENT_ID);

        console.log('Fetching content types...');
        const contentTypes = await environment.getContentTypes();

        console.log('--- Content Types ---');
        contentTypes.items.forEach(ct => {
            console.log(`\nName: ${ct.name}`);
            console.log(`ID: ${ct.sys.id}`);
            console.log('Fields:');
            ct.fields.forEach(f => {
                console.log(`  - ${f.name} (ID: ${f.id}, Type: ${f.type})`);
                if (f.validations) console.log(`    Validations: ${JSON.stringify(f.validations)}`);
            });
        });

    } catch (error) {
        console.error('Error:', error);
    }
}

run();
