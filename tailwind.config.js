/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deadlock: {
          bg: '#080c14',
          'bg-secondary': '#0d1320',
          'bg-card': '#111826',
          'border': '#1e2a3d',
          'border-light': '#2a3a52',
          gold: '#c8a84b',
          'gold-light': '#e5c96f',
          'gold-dark': '#9a7a30',
          orange: '#e8762e',
          teal: '#3db8b0',
          purple: '#9b6fd4',
          green: '#4caf6e',
          red: '#e84040',
          yellow: '#f0c040',
          muted: '#6b7a99',
          text: '#c4cfd9',
          'text-dim': '#8899aa',
        }
      },
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'],
        condensed: ['Barlow Condensed', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        valve: ['"Valve Occult"', '"Retail Demo"', '"Open Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'deadlock-gradient': 'linear-gradient(180deg, #0d1320 0%, #080c14 100%)',
      },
    },
  },
  plugins: [],
}
