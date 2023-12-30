export const convertToSlug = (str) => {
    return str
        .replace(/\s+/g, '-')
        .replace(/[^a-zA-Z0-9-\u0600-\u06FF]/g, '')
        .toLowerCase()
        .replace(/-+$/, '');
};
