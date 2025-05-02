module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '8.85': '8.85deg', // Adds your precise rotation
      },
      colors: {
        'custom-blue': '#05022E', // Names your gradient colors
      },
    },
  },
  plugins: [],
}