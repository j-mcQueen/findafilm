/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        interB: ["Inter Bold", "sans-serif"],
      },
      colors: {
        bg: "#00092A",
        bgL: "#485996",
        bgXL: "#7C99FF",
        red: "#D83737",
        tred: "rgba(216, 55, 55, 0.25)",
        gray: "#BFBFBF",
        ylw: "#FFEE51",
        tylw: "rgba(255, 238, 81, 0.5)",
      },
      boxShadow: {
        coral: "4px 4px 6px 0 rgba(255, 151, 151, 0.5)",
      },
    },
  },
  plugins: [],
};
