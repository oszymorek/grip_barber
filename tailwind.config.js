/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D7B56D",
        darkgold: "#a88e56",
        dark: "#0D0F10",
        lightgray: "#747474",
      },
      fontFamily: {
        juzek: ["Josefin Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      boxShadow: {
        custom3: "-10px -10px 0 0 rgba(215, 181, 109, 1)",
        custom4: "-10px -10px 0 0 rgba(0, 0, 0, 1)",
        custom2: "-14px -14px 0 0 rgba(215, 181, 109, 1)",
        custom: "-6px -6px 0 0 rgba(215, 181, 109, 1)",
        boxBorder: true,
      },
      brightness: {
        25: ".66",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeLeft: {
          "0%": { opacity: "0", transform: "translateX(-260px)" },
          "100%": { opacity: "1", transform: "translateX(0px)" },
        },
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(260px)" },
          "100%": { opacity: "1", transform: "translateX(0px)" },
        },
      },
    },
  },
  plugins: [],
};
