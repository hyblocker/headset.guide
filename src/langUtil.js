/*
 * How to work around an Astro bug in 2 easy steps!
*/
export async function fetchLangData(locale = "en") {
    return (await import ( `./l18n/${locale}.js`)).default;
}

/*
 * An array of all valid languages
*/
export const languages = [
    "en",
    "it"
];
