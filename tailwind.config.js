/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        jumping: {
          "9%,23%,43%,56%,76%,89%": { transform: "translateY(0px)" },
          "0%,33%,66%,100%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        wiggle: "wiggle 4s ease-in-out infinite",
        jumping: "jumping 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
