import adapter from "@sveltejs/adapter-auto"
import { vitePreprocess } from "@sveltejs/kit/vite"
import { resolve } from "path"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
    alias: {
      $actions: resolve("./src/lib/actions"),
      $components: resolve("./src/lib/components"),
      $utils: resolve("./src/lib/utils"),
    },
  },
}

export default config
