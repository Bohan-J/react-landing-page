/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         colors: {
            gradient: {
               textHover:
                  'linear-gradient(93.51deg, #9B51E0 2.84%, #3081ED 99.18%)',
            },
            textColor: {
               navItem: '#BCBCBC',
            },
         },
      },
      // spacing: {
      //    1: '4px',
      //    2: '8px',
      //    3: '12px',
      //    4: '16px',
      //    5: '20px',
      //    6: '24px',
      // },
   },
   plugins: [],
};
