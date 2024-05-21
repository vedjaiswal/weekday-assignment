export const locationFormatting = (location) => {
    const words = location.split(' ');
    return words[0].charAt(0).toUpperCase() + words[0].slice(1);
}