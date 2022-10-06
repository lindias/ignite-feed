/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: "Roboto, sans-serif",
    },
    extend: {
      colors: {
        gray: {
          100: "#e1e1e6",
          300: "#c4c4cc",
          400: "#8d8d99",
          600: "#323238",
          700: "#29292e",
          800: "#202024",
          900: "#121214",
        },
        green: {
          300: "#00B37E",
          500: "#00875f",
        },
        red: {
          500: "#F75A68",
        },
      },
    },
  },
  plugins: [],
};
