module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
      },
      backgroundImage: (theme) => ({
        hero: 'url("/mockup-1.png")',
        sola: 'url("/solar-system.png")',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
