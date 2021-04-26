module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "prettier",
    "prettier/vue",
    "@nuxtjs",
    "plugin:nuxt/recommended",
    "plugin:vue/essential",
    "eslint:recommended",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
