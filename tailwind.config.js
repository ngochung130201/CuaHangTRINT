/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js"


  ],


  theme: {
    extend: {
      colors: {
        'color-main': '#333333',
        'color-primary': '#1435c3'
      },
      backgroundImage: {
        'dealBackground': "url('https://cdn.nguyenkimmall.com/images/companies/_1/MKT_ECM/1122/TITLE%20HOME/Title-T11-WEB.png')"
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin")]
}
