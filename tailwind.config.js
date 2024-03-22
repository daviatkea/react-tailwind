/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: colors.indigo[100],
          DEFAULT: colors.indigo[600],
          dark: colors.indigo[900],
        },
      },
    },
  },
  plugins: [],
};
