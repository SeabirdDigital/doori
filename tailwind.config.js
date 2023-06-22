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
				space: "'Space Mono', sans-serif",
				indie: "'Indie Flower', sans-serif"
			},
			colors: {
				background: {
					100: "#fefefd",
					200: "#fdfdfb",
					300: "#fcfbf9",
					400: "#fbfaf7",
					500: "#faf9f5",
					600: "#c8c7c4",
					700: "#969593",
					800: "#646462",
					900: "#323231"
				},
				purple: {
					100: "#ede9f6",
					200: "#dbd3ed",
					300: "#c8bde5",
					400: "#b6a7dc",
					500: "#a491d3",
					600: "#8374a9",
					700: "#62577f",
					800: "#423a54",
					900: "#211d2a"
				},
				yellow: {
					100: "#feedd2",
					200: "#fddba6",
					300: "#fbca79",
					400: "#fab84d",
					500: "#f9a620",
					600: "#c7851a",
					700: "#956413",
					800: "#64420d",
					900: "#322106"
				},
				red: {
					100: "#fbdcd2",
					200: "#f7b8a6",
					300: "#f49579",
					400: "#f0714d",
					500: "#ec4e20",
					600: "#bd3e1a",
					700: "#8e2f13",
					800: "#5e1f0d",
					900: "#2f1006"
				}
			}
		},
		plugins: []
	}
};
