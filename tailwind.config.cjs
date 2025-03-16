/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}', // Scan all source files
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'), // Typography plugin
    ],
};