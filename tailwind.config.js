module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        kufam: ["Kufam"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        89: "22.25rem",
        100: "25rem",
        130: "32.5rem",
      },
      width: {
        mc: "max-content",
      },
      borderRadius: {
        "5xl": "2.5rem",
        "10xl": "5rem",
        "20xl": "10rem",
      },
      screens: {
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
