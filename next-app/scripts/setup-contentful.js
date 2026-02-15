const contentful = require('contentful-management');
require('dotenv').config({ path: '.env.local' });

const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
});

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ENVIRONMENT_ID = 'master';

const contentTypes = [
    {
        id: 'foundationalArticle',
        name: 'Foundational Article',
        description: 'Core principles of corporate financial planning.',
        displayField: 'title',
        fields: [
            {
                id: 'title',
                name: 'Title',
                type: 'Symbol',
                required: true,
            },
            {
                id: 'slug',
                name: 'Slug',
                type: 'Symbol',
                required: true,
                validations: [{ unique: true }, { regexp: { pattern: '^[a-z0-9]+(?:-[a-z0-9]+)*$' } }],
            },
            {
                id: 'excerpt',
                name: 'Excerpt',
                type: 'Text',
                required: true,
                validations: [{ size: { max: 500 } }],
            },
            {
                id: 'date',
                name: 'Published Date',
                type: 'Date',
                required: true,
            },
            {
                id: 'content',
                name: 'Content',
                type: 'RichText',
                required: true,
            },
        ],
    },
    {
        id: 'planningConcept',
        name: 'Planning Concept',
        description: 'Breakdowns of specific strategies (e.g., CDA, IFA).',
        displayField: 'title',
        fields: [
            {
                id: 'title',
                name: 'Title',
                type: 'Symbol',
                required: true,
            },
            {
                id: 'slug',
                name: 'Slug',
                type: 'Symbol',
                required: true,
                validations: [{ unique: true }, { regexp: { pattern: '^[a-z0-9]+(?:-[a-z0-9]+)*$' } }],
            },
            {
                id: 'excerpt',
                name: 'Excerpt',
                type: 'Text',
                required: true,
                validations: [{ size: { max: 500 } }],
            },
            {
                id: 'date',
                name: 'Published Date',
                type: 'Date',
                required: true,
            },
            {
                id: 'content',
                name: 'Content',
                type: 'RichText',
                required: true,
            },
        ],
    },
    {
        id: 'inDepthGuide',
        name: 'In-Depth Guide',
        description: 'Downloadable PDF guides.',
        displayField: 'title',
        fields: [
            {
                id: 'title',
                name: 'Title',
                type: 'Symbol',
                required: true,
            },
            {
                id: 'slug',
                name: 'Slug',
                type: 'Symbol',
                required: true,
                validations: [{ unique: true }, { regexp: { pattern: '^[a-z0-9]+(?:-[a-z0-9]+)*$' } }],
            },
            {
                id: 'excerpt',
                name: 'Description/Excerpt',
                type: 'Text',
                required: true,
                validations: [{ size: { max: 500 } }],
            },
            {
                id: 'date',
                name: 'Updated Date',
                type: 'Date',
                required: true,
            },
            {
                id: 'pdfFile',
                name: 'PDF File',
                type: 'Link',
                linkType: 'Asset',
                required: true,
            },
        ],
    },
    {
        id: 'event',
        name: 'Event / Session',
        description: 'Upcoming and past educational sessions.',
        displayField: 'title',
        fields: [
            {
                id: 'title',
                name: 'Title',
                type: 'Symbol',
                required: true,
            },
            {
                id: 'slug',
                name: 'Slug',
                type: 'Symbol',
                required: true,
                validations: [{ unique: true }, { regexp: { pattern: '^[a-z0-9]+(?:-[a-z0-9]+)*$' } }],
            },
            {
                id: 'date',
                name: 'Event Date',
                type: 'Date',
                required: true,
            },
            {
                id: 'summary',
                name: 'Summary',
                type: 'Text',
                required: true,
                validations: [{ size: { max: 500 } }],
            },
            {
                id: 'content',
                name: 'Full Details (Optional)',
                type: 'RichText',
                required: false,
            },
            {
                id: 'registrationLink',
                name: 'Registration/Download Link',
                type: 'Symbol',
                required: false,
                validations: [{ regexp: { pattern: '^(http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?$' } }],
            },
        ],
    },
];

async function run() {
    try {
        // Debug: List spaces
        console.log('Listing available spaces...');
        const spaces = await client.getSpaces();
        console.log('Available spaces:', spaces.items.map(s => `${s.name} (${s.sys.id})`).join(', '));

        const space = await client.getSpace(SPACE_ID);
        const environment = await space.getEnvironment(ENVIRONMENT_ID);

        for (const type of contentTypes) {
            console.log(`Creating/Updating content type: ${type.name} (${type.id})...`);
            let contentType;
            try {
                contentType = await environment.getContentType(type.id);
                // If it exists, we could update it, but for now let's skip or simple update
                console.log(`Content type ${type.id} already exists. Updating fields...`);
                contentType.name = type.name;
                contentType.description = type.description;
                contentType.displayField = type.displayField;
                contentType.fields = type.fields;
                contentType = await contentType.update();
            } catch (error) {
                if (error.name === 'NotFound') {
                    contentType = await environment.createContentTypeWithId(type.id, {
                        name: type.name,
                        description: type.description,
                        displayField: type.displayField,
                        fields: type.fields,
                    });
                } else {
                    throw error;
                }
            }

            await contentType.publish();
            console.log(`Published content type: ${type.name}`);
        }

        console.log('All content types created and published successfully!');
    } catch (error) {
        console.error('Error creating content types:', error);
    }
}

run();
