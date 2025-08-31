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
        'pixelify': ['Pixelify Sans', 'monospace'],
      },
      colors: {
        'minecraft-grass': '#7CB342',
        'minecraft-dirt': '#8D6E63',
        'minecraft-stone': '#9E9E9E',
        'minecraft-wood': '#8D6E63',
        'minecraft-diamond': '#4FC3F7',
        'minecraft-gold': '#FFD700',
        'minecraft-redstone': '#F44336',
        'minecraft-emerald': '#4CAF50',
        'minecraft-lapis': '#2196F3',
        'minecraft-obsidian': '#212121',
        'minecraft-netherack': '#8B0000',
        'minecraft-endstone': '#FFF8DC',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'minecraft': '4px 4px 0px 0px rgba(0,0,0,0.3)',
        'minecraft-hover': '6px 6px 0px 0px rgba(0,0,0,0.4)',
      }
    },
  },
  plugins: [],
}
