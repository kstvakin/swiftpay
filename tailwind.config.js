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
      },
      backgroundImage:{
        'section-3-bg': 'url("../images/section-three-bg.png")',
        'section-four-box1': 'url("../images/section-four-box1.png")',
        'section-four-box2':'url("../images/section-four-box2.png")',
        'section-four-box3':'url("../images/section-four-box3.png")'
      }
    },
  },
  plugins: [],
}