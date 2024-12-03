/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm-md": "640px", // Custom size between sm (default 640px) and md (default 768px)
        "md-lg": "900px", // Custom size between md (default 768px) and lg (default 1024px)
        xs: "480px", // Custom size for extra small screens (below 480px)
      },
      colors: {
        neutral: {
          "dark-blue-elements": "hsl(209, 23%, 22%)",
          "very-dark-blue-bg": "hsl(207, 26%, 17%)",
          "very-dark-blue-text": "hsl(200, 15%, 8%)",
          "dark-gray-input": "hsl(0, 0%, 52%)",
          "very-light-gray-bg": "hsl(0, 0%, 98%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
      fontSize: {
        "homepage-item": "14px",
        "detail-page": "16px",
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        semiBold: 600,
        bold: 800,
      },
    },
  },
  plugins: [],
};
