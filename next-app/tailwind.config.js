/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0f172a',
          dark: '#020617',
          gold: '#ea8d22',
          goldHover: '#c27113',
          light: '#f8fafc',
          cream: '#fdfbf7',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      backgroundImage: {
        'mesh': "radial-gradient(at 40% 20%, rgba(234, 141, 34, 0.1) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(15, 23, 42, 0.05) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(15, 23, 42, 0.05) 0px, transparent 50%)",
      }
    },
  },
  plugins: [],
}

