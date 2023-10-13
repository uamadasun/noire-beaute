/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "noire-gold": {
        100: "#f3ebce",
        200: "#e9d69f",
        300: "#D8B256",
        400: "#d19f3e",
        500: "#c18b31",
        600: "#a66c28",
        700: "#704223",
        800: "#603823",
        900: "#371c11",
      },
      black: "#020617",
      white: "#ffffff",
      slate: "#94a3b8",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
