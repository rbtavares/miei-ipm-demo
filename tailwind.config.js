/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			'sans': ['Inter', 'sans-serif'],
			'serif': ['Roboto Serif', 'serif'],
			'mono': ['Roboto Mono', 'monos']
		},
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {},
			animation: {
				'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
				shine: 'shine var(--duration) infinite linear'
			},
			backgroundImage: {
				'macos': "url('/images/macos.jpg')",
				'macos2': "url('/images/macos2.jpg')",
				'macos3': "url('/images/macos3.jpg')",
			},
			keyframes: {
				'border-beam': {
					'100%': {
						'offset-distance': '100%'
					}
				},
				shine: {
					'0%': {
						'background-position': '0% 0%'
					},
					'50%': {
						'background-position': '100% 100%'
					},
					to: {
						'background-position': '0% 0%'
					}
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}