import type { Config } from "tailwindcss";

const config = {
  plugins: [require("tailwindcss-animated"), require("taos/plugin")],
  content: {
    relative: true,
    transform: content => content.replace(/taos:/g, ""),
    files: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
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
        "text-background":
          "linear-gradient(to right, #CB1E68 61%, #1C263D 95%)",
        "home-background": "url('assets/images/home-background.webp')",
      },
    },
    fontFamily: {
      roboto: ["Roboto"],
      edu: ["Edu AU VIC WA NT Hand"],
    },
  },
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
} satisfies Config;

export default config;
