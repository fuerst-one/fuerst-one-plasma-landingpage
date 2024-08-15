import type { Config } from "tailwindcss";
import Color from "color";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  plugins: [require("@tailwindcss/container-queries")],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xs: "425px",
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      blur: {
        xs: "1px",
      },
      colors: {
        primary: {
          DEFAULT: "#00C896",
          text: Color("#00C896").lightness(20).desaturate(0.5).hex(),
          dark: Color("#00C896").lightness(30).hex(),
          light: Color("#00C896").lightness(60).hex(),
          bg: Color("#00C896").alpha(0.2).hexa(),
        },
        secondary: {
          DEFAULT: "#FF006A",
          text: Color("#FF006A").lightness(25).hex(),
          dark: Color("#FF006A").lightness(35).hex(),
          light: Color("#FF006A").lightness(60).hex(),
          bg: Color("#FF006A").alpha(0.3).hexa(),
        },
        success: {
          DEFAULT: "#6DCC48",
          text: Color("#6DCC48").lightness(25).hex(),
          dark: Color("#6DCC48").lightness(35).hex(),
          light: Color("#6DCC48").lightness(60).hex(),
          bg: Color("#6DCC48").lightness(70).alpha(0.3).hexa(),
        },
        info: {
          DEFAULT: "#B47AEA",
          text: Color("#B47AEA").lightness(40).desaturate(0.5).hex(),
          dark: Color("#B47AEA").lightness(50).desaturate(0.5).hex(),
          light: Color("#B47AEA").lightness(60).hex(),
          bg: Color("#B47AEA").lightness(70).alpha(0.3).hexa(),
        },
        hint: {
          DEFAULT: "#EA917A",
          text: Color("#EA917A").lightness(40).desaturate(0.5).hex(),
          dark: Color("#EA917A").lightness(50).desaturate(0.5).hex(),
          light: Color("#EA917A").lightness(60).hex(),
          bg: Color("#EA917A").lightness(70).alpha(0.3).hexa(),
        },
        warning: {
          DEFAULT: "#F9CB39",
          text: Color("#F9CB39").lightness(25).hex(),
          dark: Color("#F9CB39").lightness(45).hex(),
          light: Color("#F9CB39").lightness(60).hex(),
          bg: Color("#F9CB39").lightness(70).alpha(0.3).hexa(),
        },
        error: {
          DEFAULT: "#F43949",
          dark: Color("#F43949").lightness(38).hex(),
          light: Color("#F43949").lightness(60).hex(),
          bg: Color("#F43949").lightness(70).alpha(0.3).hexa(),
        },
        gray: {
          50: "#fafafa",
          100: "#eeeeee",
          200: "#dfdfdf",
          300: "#c2c2c2",
          400: "#a7a7a7",
          500: "#767676",
          600: "#494949",
          700: "#3a3a3a",
          800: "#1d1d1d",
          900: "#111111",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        DEFAULT: "5px",
        xs: "2px",
        sm: "3px",
        md: "5px",
        lg: "7px",
        xl: "10px",
        "2xl": "20px",
      },
      keyframes: {
        fadeInFromBottom: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeOutToBottom: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(100%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-in-from-bottom": "fadeInFromBottom 0.5s ease-in-out 1 forwards",
        "fade-out-to-bottom": "fadeOutToBottom 0.5s ease-in-out 1 forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    plugins: [require("tailwindcss-animate")],
  },
};
export default config;
