// IqwanEngine
// FIX: Removed `tailwindcss: {}` (Tailwind v3 PostCSS plugin).
// Tailwind v4 is now handled entirely by @tailwindcss/vite in vite.config.ts.
// Keeping only autoprefixer here for vendor prefix support.
export default {
    plugins: {
        autoprefixer: {},
    },
};
