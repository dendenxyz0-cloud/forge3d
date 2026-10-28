module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(148,163,184,0.2), 0 30px 80px rgba(14,165,233,0.25)',
      },
      colors: {
        space: {
          950: '#070b14',
          900: '#0b1220',
          800: '#111b2d',
        },
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.14) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};
