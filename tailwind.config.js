const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      "2xsm": "320px",
      xsm: "375px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "cyan-lighter": "#9BE3E2 !important",
        cyan: "#2BD1D1 !important",
        violet: "#3A3053",
      },
      textColor: {
        "cyan-lighter": "#9BE3E2 !important",
        cyan: "#2BD1D1 !important",
        violet: "#3A3053 !important",
      },
      backgroundImage: (theme) => ({
        "shorten-input-xl": "url('/src/assets/bg-shorten-desktop.svg')",
        "shorten-input-sm": "url('/src/assets/bg-shorten-mobile.svg')",
        "footer-texture-xl": "url('/src/assets/bg-boost-desktop.svg')",
        "footer-texture-sm": "url('/src/assets/bg-boost-mobile.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
