<script context="module" lang="ts">
  export type TabId = Symbol | string | number
  export type TabListContext = {
    selected: TabId | undefined
    onChange(tabId: TabId): void
    headerBtnMap: Map<TabId, HTMLElement>
  }

  type Props = {
    /**
     * Direction
     *
     * @defaultValue `"horizontal"`
     */
    direction?: "horizontal" | "vertical"
    selected?: TabId
    this?: HTMLDivElement
  }

  export const __ctx = Symbol("tablist-context")
</script>

<script lang="ts">
  import { px } from "$utils/css"
  import { DEFAULT_DOM_RECT } from "$utils/positioning"
  import { setContext, tick } from "svelte"
  import { writable } from "svelte/store"

  type $$Props = Props

  export let selected: TabId | undefined = undefined

  let this_: HTMLDivElement | undefined = undefined
  export { this_ as this }

  let indicatorEl: HTMLDivElement

  const ctx = writable({
    selected,
    onChange(tabId: TabId) {
      if ($ctx.selected !== tabId) {
        $ctx.selected = tabId
      }
    },
    headerBtnMap: new Map<TabId, HTMLElement>(),
  })
  setContext(__ctx, ctx)

  async function updateWH(selected: TabId, indicator: HTMLElement) {
    let selectedBtn = $ctx.headerBtnMap.get(selected)

    if (!selectedBtn) {
      await tick()
    }

    selectedBtn ??= $ctx.headerBtnMap.get(selected)

    if (!selectedBtn) {
      return
    }

    const elRect = selectedBtn.getBoundingClientRect()
    const parentRect = selectedBtn.offsetParent?.getBoundingClientRect() ?? DEFAULT_DOM_RECT
    const left = elRect.left - parentRect.left
    const width = elRect.width

    Object.assign(indicator.style, { width: px(width), left: px(left) })
  }

  $: $ctx.selected = selected
  $: $ctx.selected && indicatorEl && updateWH($ctx.selected, indicatorEl)
</script>

<div class={`tab-header`} bind:this={this_}>
  <div class="tab-indicator" bind:this={indicatorEl} />
  <slot />
</div>

<style>
  .tab-header {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
    position: relative;
  }

  .tab-header > .tab-indicator:first-child {
    --height: 3px;
    height: var(--height);
    position: absolute;
    display: inline-block;
    bottom: 0;
    border-radius: 10px;
    background-color: rgb(14 165 233);
    translate: 0 0;
    transform-origin: left;
    transition: 300ms ease all;
  }
</style>
