/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "992px",
      xl: "1180px",
    },
    extend: {},
    keyframes: {
      move: {
        "50%": { transform: "translateY(-1rem)" },
      },
      rotate: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
      scaleUp: {
        "0%": { transform: "scale(0.8)" },
        "50%": { transform: "scale(1.2)" },
        "100%": { transform: "scale(0.8)" },
      },
    },
    animation: {
      movingY: "move 3s linear infinite",
      rotating: "rotate 15s linear infinite",
      scaling: "scaleUp 3s linear infinite",
    },
    fontFamily: {
      Jost: ["Jost", "sans-serif"],
      Lobster: ["Lobster", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px",
      },
    },
  },
  plugins: [],
};
