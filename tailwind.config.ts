import type {Config} from "tailwindcss";

const config: Config = {
  content: ["./src/**"],
  darkMode: "class",
  theme: {
    screens: {
      tablet: "665px",
    },
    extend: {
      colors: {
        dark: "#232A3C",
        medium: "#293245",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
