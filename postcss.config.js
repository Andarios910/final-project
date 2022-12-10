module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  variants: {},
  plugins: [],
};
