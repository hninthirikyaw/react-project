/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-section': "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5mLQi2Wfn6gAZT_Pg6FenPyoUAlxTIhr5YA&usqp=CAU')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
        transitionDelay: {
          '0': '0ms',
          '2000': '2000ms',
        }
  },
  plugins: [],
}
};
