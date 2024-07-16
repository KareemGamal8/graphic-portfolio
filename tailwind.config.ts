import type { Config } from "tailwindcss";

const config = {
  plugins: [require("tailwindcss-animated")],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
      },
    },
    extend: {
      colors: {
        "black-rose": "#750A37",
        "violet-red": "#CB1E68",
        "ebony-clay": "#1c263d",
        cinder: "#0f0714",
      },
      backgroundImage: {
        "home-background": "url('assets/images/home-background.webp')",
      },
    },
    fontFamily: {
      roboto: ["Roboto"],
    },
  },
} satisfies Config;

export default config;
