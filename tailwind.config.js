/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./src/**/*.html",
    "./App.tsx",
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        'section-three-gradient-1':'rgba(255, 255, 255, 1)',
        'section-three-gradient-2':'rgba(255, 255, 255, 0.8)',
        'section-five-gradient-1':'rgba(255, 255, 255, 1)',
        'section-five-gradient-2':'rgba(198, 245, 217, 0.3)',
        'section-five-gradient-3':'rgba(141, 236, 180, 1)',
        'testimonial-gradient-1': '#FFFFFF',
        'testimonial-gradient-2': '#D9E0FF',
        'input': 'rgba(160, 161, 162, 0.05)',
        'input-border':'rgba(238, 238, 238, 0.93)',
        'button': '#82C07F',
        'dashbord-green':'#41B06E',
        'dashboard-black': '#141E46',
        'faded': 'rgba(0, 0, 0, 0.2)',
        'faded-two': 'rgba(119, 119, 119, 0.2)',
        'search-bar': 'rgba(238, 238, 238, 0.93)',
        'send-black': 'rgba(0, 54, 0, 1)',
        'edit-green': 'rgba(78, 144, 74, 1)'
      },
      backgroundImage:{
        'section-3-bg': 'url("../images/section-three-bg.png")',
        'section-four-box1': 'url("../images/section-four-box1.png")',
        'section-four-box2':'url("../images/section-four-box2.png")',
        'section-four-box3':'url("../images/section-four-box3.png")',
        'semi-circle-1':'url("../images/semi-circle-1.png")',
        'calender':'url("../images/calender.png")',
        'custom-border':'url("../images/custom-border.png")',
        'circles':'url("../images/circles.png")',
        'rectangle': 'url("../images/rectangle.png")'
      },
      dropShadow: {
        'sidebar-boxshadow': '0 0 20px rgba(0, 0, 0, 0.1)',
        'recipient-boxshadow': '0 4px 15px 0 rgba(0, 0, 0, 0.08)'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeOut: 'fadeOut 1s ease-in-out',
      },
    },
  },
  plugins: [],
}