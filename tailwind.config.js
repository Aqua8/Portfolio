/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: '#6C63FF',
        'brand-hover': '#5a52e0',
        'page-bg': '#f8f7f4',
      },
    },
  },
  plugins: [],
}
