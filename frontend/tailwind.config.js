/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0EA5E9',
        'secondary': '#14B8A6',
        'background': '#FFFFFF',
        'section-bg': '#F8FAFC',
        'text-primary': '#0F172A',
        'text-secondary': '#475569'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'section-desktop': '80px',
        'section-mobile': '48px',
        'max-width': '1200px'
      },
      borderRadius: {
        'card': '16px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.05)',
      }
    },
  },
  plugins: [],
}