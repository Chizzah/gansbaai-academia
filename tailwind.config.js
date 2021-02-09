module.exports = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      display: ["Gilroy", "sans-serif"],
      body: ["Graphik", "sans-serif"],
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px",
    },
    extend: {
      spacing: {
        "72": "18rem",
        "96": "24rem",
        "128": "32rem",
        "156": "38rem",
        "256": "64rem",
      },
      fontSize: {
        xxs: "0.5rem",
      },
      boxShadow: {
        outline: "0 0 0 3px rgba(116, 42, 42, 1)",
      },
    },
  },
};
