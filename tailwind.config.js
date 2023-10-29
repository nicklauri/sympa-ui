import tailwindConfig from "./src/lib/theme/tailwind.config.ts"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  presets: [tailwindConfig],
}
