/** @type {import('tailwindcss').Config} */
import starlightPlugin from '@astrojs/starlight-tailwind'
import colors from 'tailwindcss/colors'
import Nesting from 'tailwindcss/nesting'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: colors.indigo,
				gray: colors.zinc,
			},
			// fontFamily: {
			// 	sans: ['"Atkinson Hyperlegible"'],
			// 	mono: ['""']
			// }
		},
	},
	plugins: [
		Nesting(),
		starlightPlugin(),
	],
}
