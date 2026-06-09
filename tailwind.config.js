/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0b0f19',
        steel: '#475569',
        line: '#e2e8f0',
        cloud: '#f8fafc',
        signal: '#0ea5a4',
        coral: '#ef5b4d',
        gold: '#f4b860',
      },
      boxShadow: {
        soft: '0 24px 70px rgba(15, 23, 42, 0.10)',
        button: '0 12px 26px rgba(14, 165, 164, 0.22)',
      },
    },
  },
  plugins: [],
}
