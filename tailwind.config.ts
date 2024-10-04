import type { Config } from "tailwindcss";
import { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite"
      },
      keyframes: {
        "loop-scroll": {
          from: {
            transform: "translateX(0%)"
          },
          to: {
            transform: "translateX(-100%)"
          }
        }
      }
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        '.mask-gradient': {
          '-webkit-mask': 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)',
          'mask': 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
