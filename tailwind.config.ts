import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        crimson: "#af0019",
        ink: "#0a0a0a",
        ivory: "#f5f0eb",
        ash: "#8a8a8a",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Jost'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
