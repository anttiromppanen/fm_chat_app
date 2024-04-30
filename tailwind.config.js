/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      colors: {
        userSubheadingColor: "hsl(276, 100%, 81%)",
        userChatOnTheLeftColor: "hsl(276, 55%, 52%)",
        userChatOnTheRightColor: "hsl(271, 15%, 43%)",
        userPlaceholderTextColor: "hsl(206, 6%, 79%)",
        userMainHeadingColor: "hsl(271, 36%, 24%)",
        userParagraphColor: "hsl(270, 7%, 64%)",
        userLightMagentaGradient: "hsl(293, 100%, 63%)",
        userLightVioletGradient: "hsl(264, 100%, 61%)",
        userAppBackgroundColor: "hsl(270, 20%, 96%)",
        userSubmitButtonBackground: "hsl(271, 36%, 24%)",
        userRadioButtonOutline: "hsl(289, 100%, 72%)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
