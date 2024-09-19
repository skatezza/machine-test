// tailwind.config.js
export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}", 
      "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          slideInFromLeft: {
            '0%': { transform: 'translateX(-100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
          warpSpeed: {
            '0%': { backgroundPosition: '0% 0%' },
            '50%': { backgroundPosition: '100% 100%' },
            '100%': { backgroundPosition: '0% 0%' },
          },
        },
        animation: {
          slideInFromLeft: 'slideInFromLeft 1s ease-out forwards',
          'warp-speed': 'warpSpeed 5s linear infinite',
        },
        backgroundSize: {
          '300%': '300% 300%',
        },
      },
    },
    plugins: [],    
  };
  