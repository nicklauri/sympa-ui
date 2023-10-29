import { nth } from "../utils/functional"
import type { FluentThemeSettings } from "$utils/import-theme"
import type { Config } from "tailwindcss"
import fluentLight from "./fluent-light.json"

const tailwindcssConfig: Config = {
  content: [],
  theme: {
    extend: {
      spacing: {
        none: "var(--spacingHorizontalNone, 0)",
        xxs: "var(--spacingHorizontalXXS, 2px)",
        xs: "var(--spacingHorizontalXS, 4px)",
        snudge: "var(--spacingHorizontalSNudge, 6px)",
        s: "var(--spacingHorizontalS, 8px)",
        mnudge: "var(--spacingHorizontalMNudge, 10px)",
        m: "var(--spacingHorizontalM, 12px)",
        l: "var(--spacingHorizontalL, 16px)",
        xl: "var(--spacingHorizontalXL, 20px)",
        xxl: "var(--spacingHorizontalXXL, 24px)",
        xxxl: "var(--spacingHorizontalXXXL, 32px)",
      },
      transitionDuration: {
        "ultra-fast": "var(--durationUltraFast, 50ms)",
        faster: "var(--durationFaster, 100ms)",
        fast: "var(--durationFast, 150ms)",
        normal: "var(--durationNormal, 200ms)",
        gentle: "var(--durationGentle, 250ms)",
        slow: "var(--durationSlow, 300ms)",
        slower: "var(--durationSlower, 400ms)",
        "ultra-slow": "var(--durationUltraSlow, 500ms)",
      },
      transitionTimingFunction: {
        "accelerate-max": "var(--curveAccelerateMax, cubic-bezier(1,0,1,1))",
        "accelerate-mid": "var(--curveAccelerateMid, cubic-bezier(0.7,0,1,0.5))",
        "accelerate-min": "var(--curveAccelerateMin, cubic-bezier(0.8,0,1,1))",
        "decelerate-max": "var(--curveDecelerateMax, cubic-bezier(0,0,0,1))",
        "decelerate-mid": "var(--curveDecelerateMid, cubic-bezier(0.1,0.9,0.2,1))",
        "decelerate-min": "var(--curveDecelerateMin, cubic-bezier(0.33,0,0.1,1))",
        "easy-ease-max": "var(--curveEasyEaseMax, cubic-bezier(0.8,0,0.1,1))",
        "easy-ease": "var(--curveEasyEase, cubic-bezier(0.33,0,0.67,1))",
        linear: "var(--curveLinear, cubic-bezier(0,0,1,1))",
      },
      fontSize: {
        "base-100": "var(--fontSizeBase100, 10px)",
        "base-200": "var(--fontSizeBase200, 12px)",
        "base-300": "var(--fontSizeBase300, 14px)",
        "base-400": "var(--fontSizeBase400, 16px)",
        "base-500": "var(--fontSizeBase500, 20px)",
        "base-600": "var(--fontSizeBase600, 24px)",
        "hero-700": "var(--fontSizeHero700, 28px)",
        "hero-800": "var(--fontSizeHero800, 32px)",
        "hero-900": "var(--fontSizeHero900, 40px)",
        "hero-1000": "var(--fontSizeHero1000, 68px)",
        "fui-base-100": ["var(--fontSizeBase100, 10px)", "var(--lineHeightBase100, 14px)"],
        "fui-base-200": ["var(--fontSizeBase200, 12px)", "var(--lineHeightBase200, 16px)"],
        "fui-base-300": ["var(--fontSizeBase300, 14px)", "var(--lineHeightBase300, 20px)"],
        "fui-base-400": ["var(--fontSizeBase400, 16px)", "var(--lineHeightBase400, 22px)"],
        "fui-base-500": ["var(--fontSizeBase500, 20px)", "var(--lineHeightBase500, 28px)"],
        "fui-base-600": ["var(--fontSizeBase600, 24px)", "var(--lineHeightBase600, 32px)"],
        "fui-hero-700": ["var(--fontSizeHero700, 28px)", "var(--lineHeightHero700, 36px)"],
        "fui-hero-800": ["var(--fontSizeHero800, 32px)", "var(--lineHeightHero800, 40px)"],
        "fui-hero-900": ["var(--fontSizeHero900, 40px)", "var(--lineHeightHero900, 52px)"],
        "fui-hero-1000": ["var(--fontSizeHero1000, 68px)", "var(--lineHeightHero1000, 92px)"],
      },
      lineHeight: {
        "base-100": "var(--lineHeightBase100, 14px)",
        "base-200": "var(--lineHeightBase200, 16px)",
        "base-300": "var(--lineHeightBase300, 20px)",
        "base-400": "var(--lineHeightBase400, 22px)",
        "base-500": "var(--lineHeightBase500, 28px)",
        "base-600": "var(--lineHeightBase600, 32px)",
        "hero-700": "var(--lineHeightHero700, 36px)",
        "hero-800": "var(--lineHeightHero800, 40px)",
        "hero-900": "var(--lineHeightHero900, 52px)",
        "hero-1000": "var(--lineHeightHero1000, 92px)",
      },
      fontFamily: {
        "fui-base": "var(--fontFamilyBase)",
        "fui-monospace": "var(--fontFamilyMonospace)",
        "fui-numeric": "var(--fontFamilyNumeric)",
      },
      fontWeight: {
        regular: "var(--fontWeightRegular, 400)",
        normal: "var(--fontWeightRegular, 400)",
        medium: "var(--fontWeightMedium, 500)",
        semibold: "var(--fontWeightSemibold, 600)",
        bold: "var(--fontWeightBold, 700)",
      },
      colors: ({ theme, colors }) => {
        return processColor(fluentLight)
      },
    },
  },
}

export default tailwindcssConfig

function token(...tokens: string[]): [string, string][] {
  return tokens.map((token) => [token, token])
}

function processColor(input: FluentThemeSettings) {
  const prefixes = ["color"]
  const removedPrefixes = prefixes.map((str) => [str, `-${str.toLowerCase()}`])

  const map = [
    ["neutral", "n"],
    ["foreground1", "fg1"],
    ["foreground2", "fg2"],
    ["foreground3", "fg3"],
    ["foreground4", "fg4"],
    ["foreground5", "fg5"],
    ["foreground6", "fg6"],
    ["foreground", "fg"],
    ["hover", "h"],
    ["pressed", "p"],
    ["selected", "s"],
    ["inverted", "i"],
    ["inverted2", "i2"],
    ["brand", "b"],
    ["disabled", "d"],
    ["focus", "f"],
    ["static", "static"],
    ["background1", "bg1"],
    ["background2", "bg2"],
    ["background3", "bg3"],
    ["background4", "bg4"],
    ["background5", "bg5"],
    ["background6", "bg6"],
    ["background", "bg"],
    ["light", "light"],
    ["alpha", "a"],
    ["palette", ""],
    ["interactive", "ir"],
    ...token(
      "active",
      "scrollbar",
      "overlay",
      "on",
      "compound",
      "link",
      "regular",
      "stroke",
      "shadow",
      "ambient",
      "key",
      "darker",
      "stencil",
      "accessible",
      "red",
      "green",
      "darkorange",
      "darkred",
      "yellow",
      "berry",
      "lightgreen",
      "cranberry",
      "pumpkin",
      "peach",
      "gold",
      "marigold",
      "brass",
      "brown",
      "forest",
      "seafoam",
      "darkgreen",
      "lightteal",
      "teal",
      "steel",
      "blue",
      "royalblue",
      "cornflower",
      "navy",
      "lavender",
      "purple",
      "grape",
      "lilac",
      "pink",
      "magenta",
      "plum",
      "beige",
      "mink",
      "platinum",
      "anchor",
      "status",
      "success",
      "warning",
      "danger",
      "border",
    ),
  ]
    .map(([name, value]) => [name, `-${value}`])
    .concat(removedPrefixes)

  const trim = [...removedPrefixes.map(nth(1, "")), "--", "-"]

  return Object.entries(input)
    .filter(([input]) => prefixes.some((str) => input.startsWith(str)))
    .reduce((obj, [name, cssValue]) => {
      let result = map.reduce((formatted, [name, value]) => formatted.replaceAll(name, value), name.toLowerCase())

      result = trim.reduce((str, trim) => (str.startsWith(trim) ? str.slice(trim.length) : str), result)

      obj[result] = `var(--${name}, ${cssValue})`

      return obj
    }, {} as Record<string, string>)
}
