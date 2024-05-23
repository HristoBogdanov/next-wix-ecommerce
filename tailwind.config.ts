import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "scarlet-gum": {
          "50": "#faf7fd",
          "100": "#f4ecfb",
          "200": "#ebdcf8",
          "300": "#dbc0f2",
          "400": "#c597e9",
          "500": "#ae6fdd",
          "600": "#9a50cd",
          "700": "#833eb2",
          "800": "#6f3792",
          "900": "#5b2d76",
          "950": "#43185d",
        },
        "alert-red": "#F35C7A",
      },
    },
  },
  plugins: [],
};
export default config;
