import { createStyleClass } from "./css"

export type FluentThemeSettings = Record<string, string | number>
export type ImportFluentThemeResult = string

const themeCache = new Map<string, string>()

export const importFluentTheme = (theme: FluentThemeSettings, name: string): ImportFluentThemeResult => {
  const cachedThemeClass = themeCache.get(JSON.stringify(theme))
  if (cachedThemeClass) {
    return cachedThemeClass
  }

  const cssVars = Object.entries(theme)
    .map(([name, value]) => `--${name}: ${value};`)
    .join("\n")

  createStyleClass(name, cssVars)

  return name
}
