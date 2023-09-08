// tailwind.config.js
import {nextui} from "@nextui-org/react";

const config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      minWidth: {
        450: '450px',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

export default config;