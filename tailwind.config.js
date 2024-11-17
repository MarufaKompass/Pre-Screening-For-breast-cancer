/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        'mainPadding': '60px',
      },
    },
  },
  screens: {
    xs: "450px",
    // => @media (min-width: 400px) { ... }
    sm: "640px",
    // => @media (min-width: 640px) { ... }

    md: "768px",
    // => @media (min-width: 768px) { ... }

    lg: "1024px",
    // => @media (min-width: 1024px) { ... }

    xl: "1280px",
    // => @media (min-width: 1280px) { ... }

    "2xl": "1536px",
    // => @media (min-width: 1536px) { ... }
    "3xl": "1700px",
    // => @media (min-width: 1536px) { ... }
  },

  fontSize: {
    sm: '0.8rem',
    base: '1.2rem',

     xl: '14px',

    xl: '1.2rem',

    '2xl': '1.563rem',
    '3xl': '1.953rem',
    '4xl': '2.441rem',
    '5xl': '3.052rem',
  },



  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#12a9b2",
  //         secondary: "#149999",
  //         accent: "#3A4256",
  //         neutral: "#647393",
  //         "base-100": "#ffffff",
  //         info: "#ABE3E6",
  //         success: "#3A4256",
  //       },
  //     },
  //   ],
  // },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f57da5",
          secondary: "#149999",
          accent: "#efceda",
          neutral: "#647393",
          "base-100": "#ffffff",
          info: "#ABE3E6",
          success: "#3A4256",
        },
      },
      
    ],
  },
 

  plugins: [require("daisyui")],
};
