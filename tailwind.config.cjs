/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    //'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
       colors: {
        'primary': '#003F62',
        'secondary': '#EDA415',
        'details': '#E2F4FF',
        'error': '#E5363D',
        'success': '#19D076',
        'text1': '#292D32',
        'text2': '#ffffff',
        'text3': '#ff77e9',
        'dark1': '#201E34',
        'dark2': '#282541',
        'dark_bg': '#1C1A2E',
        'dark_shade': '#1E1C30',
        'key_black': '#363A3F',
        'gray1': '#FAFAFA',
        'gray2': '#F8F8F8',
        'gray3': '#F5F5F5',
        'border':'#A5A5A5',
      },
      fontFamily: {
        KumbhSans:['Kumbh Sans', 'sans-serif']
      },
    },
    screens: {
      'xs': '375px',
      '-xs': {max: '375px'},
      '-sm': {max: '640px'},
      '-md': {max: '768px'},
      '-lg': {max:'1024px'},
      '-xl': {max:'1280px'},
      '-2xl':{max:'1536px'},
      ...defaultTheme.screens,
    },
  },
  plugins: [
    //require('flowbite/plugin')
  ],
}

console.log(defaultTheme.screens)