import { type Config } from "tailwindcss";

export default {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.tsx",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fff8f3",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
} satisfies Config;
