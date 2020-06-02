const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

const plugins = [
  tailwindcss('./tailwind.config.js'),
  autoprefixer({
    add: true,
    grid: true
  })
]

module.exports = { plugins }
