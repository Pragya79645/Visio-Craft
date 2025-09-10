import { fontFamily } from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 8s linear infinite",
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
      colors: {
        border: "#e5e7eb",
        input: "#ffffff",
        ring: "#4C6EF5",
        background: "#F2F4F8",
        foreground: "#374151",
        primary: {
          DEFAULT: "#4C6EF5",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#ADB5BD",
          foreground: "#374151",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#E9ECEF",
          foreground: "#6B7280",
        },
        accent: {
          DEFAULT: "#FFD43B",
          foreground: "#374151",
        },
        popover: {
          DEFAULT: "#F2F4F8",
          foreground: "#374151",
        },
        card: {
          DEFAULT: "#F2F4F8",
          foreground: "#374151",
        },
      },
      boxShadow: {
        'neumorphic': '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
        'neumorphic-inset': 'inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff',
        'neumorphic-sm': '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff',
        'neumorphic-lg': '12px 12px 24px #d1d9e6, -12px -12px 24px #ffffff',
        'neumorphic-button': '6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff',
        'neumorphic-button-hover': '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff',
      },
      borderRadius: {
        'neumorphic': '16px',
        'neumorphic-sm': '12px',
        'neumorphic-lg': '20px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-neumorphic': 'linear-gradient(145deg, #F2F4F8 0%, #E9ECEF 100%)',
      },
    },
  },
}
