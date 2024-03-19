import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightConfig, { locales } from './config/starlight.config';
import tailwind from "@astrojs/tailwind";
export { locales };


// https://astro.build/config
export default defineConfig({
	site: 'https://astro-starlight-fabric-design.vercel.app',
  integrations: [
		starlight(starlightConfig), 
		tailwind({
			applyBaseStyles: false,
		})
	]
});