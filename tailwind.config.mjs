/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                lightHover: "#fcf4ff",
                darkHover: "#2a004a",
                darkTheme: "#11001F",
            },
            fontFamily: {
                outfit: ["var(--font-outfit)", "sans-serif"], // link to CSS variable
                ovo: ["var(--font-ovo)", "serif"],           // link to CSS variable
                geistMono: ["var(--font-geist-mono)", "monospace"],
            },
            boxShadow: {
                // ✅ fixed: gave unique names so they don’t conflict with Tailwind’s default shadow-black
                customBlack: "4px 4px 0 #fff",
                customWhite: "4px 4px 0 #000",
            },
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            }
        },
    },
    darkMode: "class",
    plugins: [],
};
