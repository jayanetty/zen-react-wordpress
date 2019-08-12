const wordPressUrl = "http://dev.zen-react-wp.com";
export const appUrl = `${wordPressUrl}/wp-json/wp/v2/`;
export const getPosts = `${appUrl}posts?`;
export const getPages = `${appUrl}pages`;
export const getCategories = `${appUrl}categories`;
export const getComments = `${appUrl}comments`;
export const getPostsByCategory = `${getPosts}categories=`;
export const getPostSlugs = `${getPosts}slug=`;
