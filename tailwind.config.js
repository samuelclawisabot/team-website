/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007bff',       // Electric Blue
        secondary: '#ffc107',     // Gold accent
        base: 'rgba(20, 25, 40, 0.8)',   // Deep indigo
        surface: 'rgba(255, 255, 255, 0.08)',  // Glass effect
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
