const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
        fontFamily: {
            inter: ['Inter', 'sans-serif']
        },
        colors: {
            bgLightBrown : "#F7F4EA",
            brownText: "#B1A88FCC",
            greenText: "#69A19A",
            deepGreenText: "#5173B0"
        }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

