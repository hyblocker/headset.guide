// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    alias: {
        $: './src',
        $components: './src/components',
        $content: './public/content',
        $layouts: './src/layouts',
        $assets: './src/assets',
    },
};
