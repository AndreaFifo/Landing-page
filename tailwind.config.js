/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "overpass": "Overpass",
        "ubuntu": "Ubuntu"
      },
      backgroundImage: {
        'blue-circle': "url('../../src/images/bg-pattern-circles.svg')"
      }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "white": "#ffff",
      "lg-red": "#FF8B70",
      "vlg-red": "#FF4457",
      "vdk-blue": "hsl(208, 49%, 24%)",
      "grayish-blue": "hsl(240, 2%, 79%)",
      "vdk-grayish-blue": "hsl(207, 13%, 34%)",
      "vdk-black-blue": "hsl(240, 10%, 16%)",
      "hover": "#FF7B88"
    }
  },
  plugins: [],
  mode: "jit",
  purge: [
    "./public/*.{html,js}",
  ],
}