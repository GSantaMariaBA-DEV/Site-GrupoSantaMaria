/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    green: '#04472A',
                    gold: '#C5A059',
                    sand: '#F5F5F0',
                    text: '#333333',
                }
            },
            fontFamily: {
                serif: ['Cinzel', 'serif'],
                sans: ['Manrope', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 12s linear infinite',
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
                'scale-slow': 'scaleSlow 20s linear infinite alternate',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleSlow: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.1)' },
                }
            }
        }
    },
    plugins: [],
}
