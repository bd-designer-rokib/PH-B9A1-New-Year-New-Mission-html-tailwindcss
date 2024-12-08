/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        primary: "#F00",
        secondary: "#070211",
        tertiary: "#FFFFFFCC",
        // rgba(255, 255, 255, 0.80)
        quaternary: "#07021199",
        // rgba(7, 2, 17, 0.60)
        quinary: "#FF00000D",
        // rgba(255, 0, 0, 0.05)
        senary: "#0702114D",
        // rgba(7, 2, 17, 0.30)
        septenary: "#FFFFFF26",
        // rgba(255, 255, 255, 0.15)
        octonary: "",
        nonary: "",
      },
      fontFamily: {
        primary: ["Merriweather", "serif"],
        secondary: ["Inter", "serif"],
      },
      backgroundImage: {
        "primary-lg":
          "linear-gradient(180deg, #070211 0%, rgba(7,2,17,0.00) 100%)",
        "secondary-lg":"linear-gradient(90deg, #070211 0%, rgba(7,2,17,0.00) 100%)",
        "tertiary-lg": "linear-gradient(180deg, rgba(255, 0, 0, 0.10) 0%, rgba(255, 0, 0, 0.00) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
