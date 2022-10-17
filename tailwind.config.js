/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [ 
  "./public/*.{html,js,css}",
  "./views/*.ejs",
  "./views/layouts/*.ejs",
  "./views/partials/*.ejs",
  './node_modules/tw-elements/dist/js/**/*.js'

],
  theme: {
    fontFamily: {
      sintony: ['sintony', 'sans-serif'],
      sourcesanspro: ['sourcesanspro', 'sans-serif'],
      barlow:['Barlow', 'sans-serif'],
      poppins:['Poppins', 'sans-serif' ]

    },
    height: {
      '128': '32rem',
    }, 
    extend: {
      backgroundImage: {
        'nav-image':"url('/images/peaks.svg')",
        'minds': "url('/images/mind.png')",
        'footer-texture': "url('/img/footer-texture.png')",
        'backg-wave': "url('/images/wave.svg')",
        'backg-wave-middle': "url('/images/wavey.svg')",
        'backg-wave-end': "url('/images/wave-bottom.svg')",
        'circles': "url('/images/circled.svg')",
        'wave-line': "url('/images/wave-line.svg')",

      }
    },
  },
  plugins: [
 

  ],
}

