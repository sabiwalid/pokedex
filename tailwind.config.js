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
      },
      fontFamily: {
        singleDay: ['"Single Day"', "cursive"],

        abel: ["Abel", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
