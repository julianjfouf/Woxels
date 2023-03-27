/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      "4k": "2480px",
      '2k' : '2160px',
      'hd':'1920px',
      '2xl': '1560px',
      'xl':'1280px',
      'lg':'1024px',
      'md': '768px',
      'sm': '640px'
    },
  },
  plugins: [],
};
