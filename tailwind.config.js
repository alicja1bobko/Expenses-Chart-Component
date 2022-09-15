/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      softRed: "var(--soft-red)",
      cyan: "var(--cyan)",
      darkBrown: "var(--dark-brown)",
      mediumBrown: "var(--medium-brown)",
      cream: "var(--cream)",
      veryPaleOrange: "var(--very-pale-orange)",
    },
    screens: {
      sm: "375px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
    fontSize: {
      m: "18px",
    },

    extend: {},
  },
  plugins: [],
};
