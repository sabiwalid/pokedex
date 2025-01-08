/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-pikachu": "url('/images/home.png')",
      },
      colors: {
        button: "#FE5858",
        primary: "#595854",
        secondary: "#767676",
        pokemon: "#4F4F4F",
      },
      fontFamily: {
        singleDay: ['"Single Day"', "cursive"],

        abel: ["Abel", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
