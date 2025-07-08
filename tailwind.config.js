/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        mona: ["Mona Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
        kyiv: ["var(--font-kyiv), sans-serif"],
        marck: ["Marck Script, serif"],
        // Add more custom font families as needed
      },
    },
    screens: {
      // sm: '640px',   // Small screens (mobile)
      sm: "375px",
      sml: "425px",
      md: "768px", // Medium screens (tablets)
      lg: "1024px", // Large screens (laptops)
      xl: "1280px", // Extra-large screens (desktops)
    },
  },
  plugins: [],
};
