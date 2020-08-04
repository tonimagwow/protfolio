import { ContentfulClient } from 'react-contentful';

export const contentfulClient = new ContentfulClient({
    accessToken: process.env.REACT_APP_API_TOKEN,
    space: process.env.REACT_APP_SPACE_ID
});

export const getContentfulNav = async () => {
    const data = await contentfulClient.getEntry('5WBfb0bDT9gt09UVGjoLM');
    return data;
}

// Homepage and Sections
export const getContentfulHomepage = async () => {
    const data = await contentfulClient.getEntry({ entryId: '5fFKeKiX7HcdkRCPRZzsKn', include: 3 });
    return data;
}