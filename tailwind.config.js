/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#d7d7d7",
					200: "#afafaf",
					300: "#878787",
					400: "#5f5f5f",
					500: "#373737",
					600: "#2c2c2c",
					700: "#212121",
					800: "#161616",
					900: "#0b0b0b",
				},
				secondary: {
					100: "#fdfdfd",
					200: "#fbfbfb",
					300: "#f8f8f8",
					400: "#f6f6f6",
					500: "#f4f4f4",
					600: "#c3c3c3",
					700: "#929292",
					800: "#626262",
					900: "#313131",
				},
				tertiary: {
					100: "#f8f6f2",
					200: "#f1ece6",
					300: "#eae3d9",
					400: "#e3d9cd",
					500: "#dcd0c0",
					600: "#b0a69a",
					700: "#847d73",
					800: "#58534d",
					900: "#2c2a26",
				},
				quaternary: {
					100: "#f2f0e6",
					200: "#e6e0cd",
					300: "#d9d1b5",
					400: "#cdc19c",
					500: "#c0b283",
					600: "#9a8e69",
					700: "#736b4f",
					800: "#4d4734",
					900: "#26241a",
				},
			},
			keyframes: {
				slideRight: {
					"0%": { transform: "translate(0%)" },
					"100%": { transform: "translate(99%)" },
				},
				slideLeft: {
					"0%": { transform: "translate(100%)" },
					"100%": { transform: "translate(0%)" },
				},
				slowPulse: {
					"0%": { opacity: 1 },
					"50%": { opacity: 0.9 },
					"80%": { opacity: 0.6 },
					"100%": { opacity: 1 },
				},
			},
			animation: {
				slideRight: "slideRight 1.5s ease-in-out forwards",
				slideLeft: "slideLeft 1.5s ease-in-out forwards",
				slowPulse: "slowPulse 5s ease-in-out infinite",
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
