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
				background: "#fff9f2",
				brown: "#786b59",
				grey: "#545454"
			}
		},
		plugins: []
	}
};
