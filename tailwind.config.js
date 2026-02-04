/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./App.tsx",
        "./index.tsx",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./constants.tsx",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0A0A0A',
                secondary: '#1B1464',
                accent: '#00AEEF',
                'bg-soft': '#F8F9FA',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Plus Jakarta Sans', 'sans-serif'],
                arabic: ['IBM Plex Sans Arabic', 'sans-serif'],
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            }
        }
    },
    plugins: [],
}
