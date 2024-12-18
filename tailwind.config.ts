/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        "1xl": "-3px 4px 15px 0 rgba(0,0,0,0.6)",
      },
      screens: {
        mobile: "410px",
        tablet: "768px",
        desktop: "1440px",
      },
      colors: {
        gray: "#535353",
        "gray-light": "#B1B1B1",
        white: "#FFFFFF",
        "white-light": "#F8F8F8",
        yellow: "#FFBC57",
        blue: "#00B5FF",
        badge: "#FFBC00",
        dark: "#2B2929",
        red: "#E03D3D",
        black: "#1A1A1A",
      },
      fontSize: {
        xs: [" 13px", { lineHeight: "22px", fontWeight: 300 }],
        sm: ["14px", { lineHeight: "26px", fontWeight: 400 }],
        base: ["16px", { lineHeight: "30px", fontWeight: 400 }],
        m: ["15px", { lineHeight: "23px", fontWeight: 400 }],
        ms: ["19px", { lineHeight: "24px", fontWeight: 500 }],

        xl: ["20px", { lineHeight: "28px", fontWeight: 600 }],
        lg: [
          "26px",
          {
            lineHeight: "35px",
            fontMeight: 600,
          },
        ],
        "1xl": ["30px", { lineHeight: "40px", fontWeight: 600 }],
        "2xl": ["40px", { lineHeight: "48px", fontWeight: 600 }],
      },
      borderRadius: {
        none: "0",
        xs: "8px",
        full: "100%",
      },

      backgroundImage: {
        md: " linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 33.85%, #fff 72.4%)",
      },
    },
  },
  plugins: [],
};
