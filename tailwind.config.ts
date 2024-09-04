import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.red,
        accent: colors.green,
      },
      fontFamily: {
        heading: ["Oswald", "sans-serif"],
        custom: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
