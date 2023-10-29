<script lang="ts">
  import { importFluentLightTheme } from "$lib/theme/fluent"
  import { cn } from "$utils/css"
  import { TabList, Tab } from "../lib"

  const themeClassName = importFluentLightTheme()
</script>

<div class={cn(themeClassName, "")}>
  <h1>Welcome to your library project</h1>
  <p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation...</p>

  <TabList>
    <Tab value="home-tab">Home</Tab>
    <Tab value="info-tab">Info</Tab>
    <Tab value="about-tab">About</Tab>
    <Tab value="contact-tab">Contact</Tab>
  </TabList>

  <br />
  <TabList>
    <Tab>Home</Tab>
    <Tab>Info</Tab>
    <Tab>About</Tab>
    <Tab>Contact</Tab>
  </TabList>
</div>

<style>
  :global(body) {
    font-family: Inter;
    font-size: 14px;
  }
</style>
