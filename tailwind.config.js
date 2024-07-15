/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
       'primaryWhithe': {
        '50': '#f5f5f5', //default
        '100': '#efefef',
        '200': '#dcdcdc',
        '300': '#9999',
        '400': '#989898',
        '500': '#7c7c7c',
        '600': '#000000b3',
        '700': '#525252',
        '800': '#464646',
        '900': '#3d3d3d',
        '950': '#292929',
    },
    'mainBlue': {
        '50': '#effaff',
        '100': '#daf3ff',
        '200': '#beeaff',
        '300': '#91dfff',
        '400': '#5dcbfd',
        '500': '#37affa',
        '600': '#2c98f0', //default
        '700': '#197adc',
        '800': '#1b62b2',
        '900': '#1c548c',
        '950': '#163355',
    },
    
    
      },
      letterSpacing: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',

      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin'),
    require('daisyui'),
  ],
}

