/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./**/*.{js,ts,jsx,tsx,html}",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        apple: ["SF Pro Display", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
