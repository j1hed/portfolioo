/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  './pages/**/*.{js,jsx,ts,tsx}',
	  './components/**/*.{js,ts,tsx,jsx}',
	  './app/**/*.{js,ts,tsx,jsx}',
	  './src/**/*.{js,ts,tsx,jsx}',
	],
	theme: {
	  container: {
		center: true,
		padding: '15px',
		screens: {
		  sm: '648px',
		  md: '768px',
		  lg: '960px',
		  xl: '1200px',
		},
	  },
	  extend: {
		fontFamily: {
		  primary: ['var(--font-jetBrains Mono)'],
		},
		colors: {
		  primary: '#1c1c22',
		  accent: {
			DEFAULT: '#00ff99',
			hover: '#00e187',
		  },
		},
		keyframes: {
		  "accordion-down": {
			from: { height: "0" },
			to: { height: "var(--radix-accordion-content-height)" },
		  },
		  "accordion-up": {
			from: { height: "var(--radix-accordion-content-height)" },
			to: { height: "0" },
		  },
		},
		animation: {
		  "accordion-up": "accordion-up 0.2s ease-out",
		  "accordion-down": "accordion-down 0.2s ease-out",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };