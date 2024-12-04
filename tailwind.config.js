/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gray: "#535353",
        white: "#FFFFFF",
        yellow: "#FFBC57",
        blue: "#00B5FF",
        badge: "#FFBC00",
      },
    },
  },
  plugins: [],
};
