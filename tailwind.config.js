module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  // darkMode: "class",
  theme: {
    extend: {
      others: { min: "340px", max: "1200px" },
    },
    colors: {
      darkbg: "#9f1239",
      blue: {
        850: "#06b6d4",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
