/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [ 
  "./public/*.{html,js,css}",
  "./views/*.ejs",
  "./views/layouts/*.ejs",
  "./views/partials/*.ejs"
],
  theme: {
    fontFamily: {
      sintony: ['sintony', 'sans-serif'],
      sourcesanspro: ['sourcesanspro', 'sans-serif'],
      barlow:['Barlow', 'sans-serif']
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
        'backg-wave-end': "url('/images/secondwave.svg')",
        'circles': "url('/images/circle-scatter.svg')",


     
      }
    }
    ,
  },
  plugins: [],
}

