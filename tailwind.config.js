/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "black", // Define your primary color
        secondary: "#f50057", // Define your secondary color
        bgprimary: "#1E2E5A", // Define your secondary color
        bgsecondery: "#009DC2",
      },
      spacing: {
        2: "8px", // Define your common spacing value (e.g., 8 pixels)
        4: "16px",
        8: "32px",
      },
    },
  },
  plugins: [],
};
