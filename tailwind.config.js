/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        third: "var(--third)",
        last: "var(--last)",
        gradient: "var(--gradient)",
        hover: "var(--hover)",
      },
      gridTemplateColumns: {
        header: "1fr 2fr",
        sixtyForty: "2fr 1fr",
        admin: "1fr 4fr",
        admin2: "1fr 3fr",
        admin3: "1fr 2fr",
        add: "10fr 1fr",
        footer: "3fr 2fr 1.5fr 1.5fr",
        list: "1fr 11fr",
      },
      backgroundImage: {
        heroBg: "url(/src/images/hero-bg.webp)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
