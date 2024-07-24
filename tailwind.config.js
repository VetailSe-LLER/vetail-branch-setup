/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  corePlugins: {
    preflight: false,
  },
  important: "#__next",
  theme: {
    extend: {},
  },
  plugins: [],
};
