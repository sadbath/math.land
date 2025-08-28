import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(),mdx()],
	site: 'https://sadbath.github.io',
	base: '/math.land',
	markdown: {// Add this shikiConfig block

		shikiConfig: {
			// Choose a theme. "Dracula" is a great dark theme.
			// Other popular options: "Nord", "Monokai", "Material Theme Palenight"

			// Set this to true to enable word wrapping for long lines.
			// Set to false to enable horizontal scrolling.
			wrap: false,
		},
	},

});
