/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			screen: {
				sm: "500px",
				"max-sm": { max: "500px" },
			},
		},
	},
	plugins: [],
};
