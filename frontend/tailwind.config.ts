/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        background: "#FFFFFF",
        accent: {
          green: "#1A8917",
          gray: "#757575"
        }
      },
      fontFamily: {
        header: ["Georgia", "serif"],
        body: ["Helvetica Neue", "sans-serif"],
        meta: ["Menlo", "monospace"]
      },
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px'
      },
      transitionDuration: {
        '200': '200ms'
      }
    }
  },
  plugins: []
};
