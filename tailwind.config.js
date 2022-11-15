/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        segoe: ["Segoe"],
      },
      backgroundImage: {
        'lockscreen-background-1': "url('./LoginPage/images/win-background.webp')",
        'lockscreen-background-2': "url('./LoginPage/images/lockscreen1.jpg')",
        'lockscreen-background-3': "url('./LoginPage/images/lockscreen2.jpg')",
        'lockscreen-background-4': "url('./LoginPage/images/lockscreen3.jpg')",
        'lockscreen-background-5': "url('./LoginPage/images/lockscreen4.jpg')",
        'windowsten': "url('./components/Icons/windowsten.jpg')"
      }
    },
  },

  plugins: [],
}