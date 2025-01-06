/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',

    // "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gold-to-blue': 'radial-gradient(300.55% 959.41% at 293.35% -237.5%, #00502F 0%, #0A6F47 67.24%, #629F0D 98.3%)'

}},
    fontFamily: {
      'default': ['Manrope', 'sans-serif'],
    },
    colors: {
      'see-blue': '#005993',
      'crimson': '#D7153A',
      'pale-cyan': '#7ED3F7',
      'pale-cyan-light': '#F2FBFE',
      'picton-blue': '#4CB8E9',
      'white': '#FFFFFF',
      'black': '#000000',
      'neutral': '#637083',
      'neutral-1': '#02083D',
      'neutral-grey': '#344051',
      'neutral-primary': '#292929',
      'premium': '#002F54',
      'rosegold': '#D8A298',
      'rosegold-light': '#F3E2DF',
    },
  },
  plugins: [
    require("daisyui"),
    // require('flowbite/plugin'),
  ],
}

