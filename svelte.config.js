import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'
import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

  kit: {
    adapter: adapter(),

    // remove this if you don't want prerendering
    prerender: {
      entries: ['*', '/sitemap.xml', '/rss.xml']
    },

    csp: {
      directives: {
        'script-src': ['self']
      },
      reportOnly: {
        'script-src': ['self'],
        'report-to': ['/reporting/main'],
        'report-uri': ['/reporting/main']
      }
    }
  }
}

export default config
