module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron, sans-serif',
      secondary: 'Inter, sans-serif',
    },
    container: {
      padding: {
        DEFAULT: '1.5rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

    extend: {
      colors: {
        body: '#010208',
        white: '#fff',
        pink: 'pink',
        transparent: 'transparent',
      },
      boxShadow: {
        primary: '0px 4px 40px rgba(0, 0, 0, .3)',
        full: '0 0 0 100vw rgba(0, 0, 0, .7)'
      },
      backgroundImage: {
        radialBgCircle: "url('/src/assets/radial-bg.svg')",
        videoBg: "url('/src/assets/video-bg.png')",
        circle: "url('/src/assets/circle.png')",
        explore: "url('/src/assets/explore.png')",
      },
    },
  },
  plugins: [],
};
