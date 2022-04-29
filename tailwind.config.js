// import colors from 'tailwindcss/colors';

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
	mode: 'jit',
	content: [
		'./public/**/*.html',
		'./{components,pages,lib,hooks}/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'food-pattern': `url("/images/svg/i-like-food.svg")`,
				'cogs-pattern': `url("/images/svg/floating-cogs.svg")`,
			},
		},
	},
	variants: {},
	plugins: [
		require('flowbite/plugin'),
		require("@tailwindcss/forms")
	],
};
