/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        press: {
          '0%': { width: 0, height: 0, opacity: 0.4 },
          '100%': { width: '300px', height: '300px', opacity: 0 },
        },
      },
      animation: {
        press: 'press 500ms linear infinite',
      },
      screens: {
        phone: '414px',
        tablet: '768px',
        tabletlg: '960px',
        tabletxl: '1024px',
        laptop: '1200px',
        laptoplg: '1400px',
        desktop: '1700px',
      },
    },
  },
  plugins: [],
}
