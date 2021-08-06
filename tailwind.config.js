module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      overlay: "rgba(0, 0, 0, 0.7)",
      blue: "#35DDF4",
      hoverBlue: "#0bb9d1",
    }),

    extend: {
      backgroundImage: (theme) => ({
        computer: "url('./assets/computer.jpg')",
      }),
      fontFamily: {
        body: ["Oxanium", "cursive"],
        open: ["Pontano Sans", "sans-serif"],
      },
      textColor: {
        blue: "#35DDF4",
      },
    },
  },
  variants: {
    extend: {
      animation: ["motion-safe", "motion-reduce"],
      backgroundColor: ["active"],
      flex: ["even"],
    },
  },
  plugins: [],
};
