module.exports = {
  purge: ["./src/**/*.js", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        color1: "#3a7bfd",
        color3: "#fafafa",
        color4: "#e4e5f1",
        color5: "#d2d3db",
        color6: "#9394a5",
        color7: "#484b6a",
        color9: "#161722",
        color10: "#25273c",
        color11: "#cacde8",
        color12: "#e4e5f1",
        color13: "#777a92",
        color14: "#4d5066",
        color15: "#393a4c",
      },
      backgroundImage: {
        color2: "linear-gradient(#57ddff , #c058f3)",
        color8: "linear-gradient(#57ddff , #c058f3)",
        bg1: "url('./images/bg-mobile-dark.jpg')",
        bg2: "url('./images/bg-mobile-light.jpg')",
        bg3: "url('./images/bg-desktop-dark.jpg')",
        bg4: "url('./images/bg-desktop-light.jpg')",
      },
      fontFamily: {
        josefin: "Josefin Sans",
      },
      letterSpacing: {
        wider2xl: ".4em",
      },
    },
  },
  variants: {},
  plugins: [],
};
