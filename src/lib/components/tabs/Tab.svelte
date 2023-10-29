<script context="module" lang="ts">
  type Props = {
    value?: TabId
    disableSpaceReservation?: boolean
    this?: HTMLButtonElement
  }

  const [createId] = createIncrementIdFn("default-tab-id-")
</script>

<script lang="ts">
  import { getContext, onDestroy } from "svelte"
  import { __ctx, type TabId, type TabListContext } from "./TabList.svelte"
  import type { Writable } from "svelte/store"
  import { createIncrementIdFn } from "$utils/increment-id"
  import { cn } from "$utils/css"

  type $$Props = Props

  const ctx = getContext<Writable<TabListContext>>(__ctx)

  export let value: TabId = Symbol(createId())
  export let disableSpaceReservation = false

  let el: HTMLButtonElement | undefined = undefined
  export { el as this }

  $: el && $ctx.headerBtnMap.set(value, el)

  onDestroy(() => {
    $ctx.headerBtnMap.delete(value)
  })

  let tabBtnClass = cn("text-fui-base-300")
</script>

<button class="sui-tab" class:active={$ctx.selected === value} on:click={() => ($ctx.selected = value)} bind:this={el}>
  <span class="sui-tab-content">
    <slot />
  </span>

  {#if $ctx.selected !== value && !disableSpaceReservation}
    <span class="sui-tab-reserve-space">
      <slot />
    </span>
  {/if}
</button>

<style>
  .sui-tab {
    min-height: 32px;
    border-radius: 6px;
    display: grid;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    font-size: 14px;
  }

  .sui-tab.active,
  .sui-tab-reserve-space {
    font-weight: 600;
  }

  .sui-tab::after {
    transition: 0.3s ease background-color;
  }

  .sui-tab-content,
  .sui-tab-reserve-space {
    grid-column-start: 1;
    grid-row-start: 1;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  .sui-tab:hover::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    border-radius: 10px;
    background-color: hsl(0 0% 90%);
    z-index: -1;
  }

  button {
    background: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    padding: 0;
  }

  .sui-tab-reserve-space {
    visibility: hidden;
  }
</style>
