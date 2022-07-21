/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          900: "#131517",
        },
        btnBg: {
          900: "#5028B1",
        },
       card: {
          900: "#3B3B3B",
       }
      },
    },
  },
  plugins: [],
}
