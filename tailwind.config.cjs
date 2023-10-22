const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/utils/templates/*.html"],
  theme: {
    colors: {
      desert: "#D2A264",
      spice: "#994C2D",
      dark: "#141413",
      rock: "#6C553D",
      moon: "#7C746C",
      light: "#B28F6C",
      error: "#960018",
      transparent: "FFFFFF",
      confirm: "#20472B",
    },
    extend: {
      fontFamily: {
        bird: ["Birdman", "sans-serif"],
        sanset: ["Sanset", "sans-serif"],
        dune: ["Dune", "sans-serif"],
        cascade: ["Cascadia", "sans-serif"],
      },
    },
  },
  plugins: [
      require("@tailwindcss/forms"), 
      plugin(function({ addVariant }) {
      addVariant('htmx-settling', ['&.htmx-settling', '.htmx-settling &'])
      addVariant('htmx-request',  ['&.htmx-request',  '.htmx-request &'])
      addVariant('htmx-swapping', ['&.htmx-swapping', '.htmx-swapping &'])
      addVariant('htmx-added',    ['&.htmx-added',    '.htmx-added &'])
    })],
};
