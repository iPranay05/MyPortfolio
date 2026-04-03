/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
        industrial: ['Syncopate', 'Arial Black', 'sans-serif'],
      },
      colors: {
        industrial: {
          900: '#0a0a0a',
          800: '#141414',
          700: '#1e1e1e',
          600: '#2a2a2a',
          500: '#3f3f3f',
          400: '#5c5c5c',
        },
        primary: {
          DEFAULT: '#ff4800',  // Industrial Orange
          hover: '#ff6600',
        },
        neon: {
          yellow: '#ccff00',
          blue: '#00ccff',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%231a1a1a' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
