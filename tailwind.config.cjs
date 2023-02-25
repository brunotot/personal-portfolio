/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					light: "var(--color-primary-light)",
					base: "var(--color-primary-base)",
					dark: "var(--color-primary-dark)",
					darker: "var(--color-primary-darker)",
				},
				secondary: {
					light: "var(--color-secondary-light)",
					base: "var(--color-secondary-base)",
					dark: "var(--color-secondary-dark)",
					darker: "var(--color-secondary-darker)",
				},
				tertiary: {
					light: "var(--color-tertiary-light)",
					base: "var(--color-tertiary-base)",
					dark: "var(--color-tertiary-dark)",
					darker: "var(--color-tertiary-darker)",
				},
			},
		},
	},
	plugins: [],
};
