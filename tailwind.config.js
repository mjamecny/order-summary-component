/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      sans: ["'Red Hat Display'", "sans-serif"],
    },
    spacing: {
      0.2: "2px",
      0.4: "4px",
      0.8: "8px",
      1.2: "12px",
      1.6: "16px",
      2.4: "24px",
      3.2: "32px",
      4.8: "48px",
      6.4: "64px",
      8: "80px",
      9.6: "96px",
      12.8: "128px",
    },
    fontSize: {
      1: "10px",
      1.2: "12px",
      1.4: "14px",
      1.6: "16px",
      1.8: "18px",
      2: "20px",
      2.4: "24px",
      3: "30px",
      3.6: "36px",
      4.4: "44px",
      5.2: "52px",
      6.2: "62px",
      7.4: "74px",
      8.6: "86px",
      9.8: "98px",
    },
    colors: {
      paleBlue: "hsl(225, 100%, 94%)",
      brightBlue: "hsl(245, 75%, 52%)",
      veryPaleBlue: "hsl(225, 100%, 98%)",
      desaturatedBlue: "hsl(224, 23%, 55%)",
      darkBlue: "hsl(223, 47%, 23%)",
    },
  },
  plugins: [],
}
