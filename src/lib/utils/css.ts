import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const px = (n: number) => `${n}px`

export const cn = (...classNames: ClassValue[]) => twMerge(clsx(...classNames))
