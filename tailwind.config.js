/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./docs/**/*.{vue,js,ts,jsx,tsx,md}",
  ],
  theme: {
    extend: {
      colors: {
        morandi: {
          purple: '#A78BFA',
          pink: '#F9A8D4',
          cream: '#F5F3FF',
          gray: '#4B5563',
          dark: '#6D28D9',
        },
      },
      fontFamily: {
        serif: ['Source Han Serif SC', 'serif'],
        sans: ['Source Han Sans SC', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
