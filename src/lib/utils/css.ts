import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const px = (n: number) => `${n}px`

export const cn = (...classNames: ClassValue[]) => twMerge(clsx(...classNames))

export const createStyleClass = (className: string, rules: string): boolean => {
  if (!className || !rules) {
    return false
  }

  const style = document.createElement("style")
  style.innerHTML = `.${className} {\n${rules}\n}`

  if (!document.head) {
    console.warn(`<sympa-ui>: could not create style element since document.head is unavailable!`)
    return false
  }

  document.head.appendChild(style)

  return true
}
