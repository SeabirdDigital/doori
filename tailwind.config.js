/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "2rem"
			},
			fontFamily: {
				quicksand: "'Quicksand', sans-serif",
				indie: "'Indie Flower', sans-serif"
			},
			colors: {
				background: "#fff6eb",
				brown: "#786b59"
			}
		},
		plugins: []
	}
};
