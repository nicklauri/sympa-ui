import { importFluentTheme } from "$utils/import-theme"
import fluentLightTheme from "./fluent-light.json"
import fluentDarkTheme from "./fluent-dark.json"

export function importFluentLightTheme() {
  return importFluentTheme(fluentLightTheme, "fluent-light")
}

export function importFluentDarkTheme() {
  return importFluentTheme(fluentDarkTheme, "fluent-dark")
}
