/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#685DC5',
        'brand-text': '#535353',
      },
      fontFamily: {
        sans: ['Apercu Pro', 'Apercu', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

