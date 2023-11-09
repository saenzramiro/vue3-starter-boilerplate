/** @type {import('tailwindcss').Config} */

export default {
	// configure the paths to all of your source files
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js'],
	// enable dark mode via class strategy
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [require('preline/plugin')],
};
