const animate = require("tailwindcss-animate")
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}'
	],
  
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,

      danger: '#e6594c',
      notice: '#d2cf35',
      accept: '#7ae54c',
      accent: '#4c64e5',

      'theme': {
        DEFAULT: '#c7e64c',
        pale: '#e7fa9e',
        dark: '#9dc20a',
        gray: '#c7cab9',
        grid: '#e4e7da',
        black: '#2c2e23',
        light: '#f6f7f3',
        verylight: '#f9faf6',
        darklight: '#a8aba0',
        gridlight: '#e4e7da',
        100: '#252d06',
        200: '#4a5a0d',
        300: '#6f8613',
        400: '#94b319',
        500: '#b8df1f',
        600: '#c7e64c',
        700: '#d5ec79',
        800: '#e3f2a6',
        900: '#f1f9d3',
        950: '#f8fcea',
        980: '#fcfef7'
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
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
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'sans': ['Plus Jakarta Sans', 'Sans-serif'],
        'display': ['Bagel Fat One', 'Arial', 'Sans-serif'],
      },
      boxShadow: {
        'line': '0 -2px 0 #e4e7da',
        'line-active': '0 -2px 0 #c3f20c',
        'edge': '0 0 0 1px #c7cab9',
        'edge-theme': '0 0 0 1px #bbde3c'
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        "collapsible-up": {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
        "bubble-fade-in": {
          from: { transform: 'translateY(10px)', opacity: .5 },
          to: { transform: 'translateY(0px)', opacity: 1 }
        },
        "shift-up": {
          from: { transform: 'translateY(50px)' },
          to: { transform: 'translateY(0px)' }
        },
        "shift-down": {
          from: { transform: 'translateY(-50px)' },
          to: { transform: 'translateY(0px)' }
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
        "bubble-fade-in": "bubble-fade-in 0.2s ease-in-out",
        "shift-up": "shift-up 5s ease-in-out",
        "shift-down": "shift-down 5s ease-in-out",
        "fade-in": "fade-in 0.2s ease-in-out"
      },
    },
  },
  plugins: [animate],
}