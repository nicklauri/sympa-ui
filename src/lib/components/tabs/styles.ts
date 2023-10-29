import { cva } from "class-variance-authority"

const tabButtonDefaultClasses = "sui-tab"

export const tabButton = cva(tabButtonDefaultClasses, {
  variants: {
    variant: {
      subtle: "subtle",
      transparent: "transparent",
    },

    size: {
      small: "small",
      medium: "medium",
      large: "large",
    },

    direction: {
      horizonal: "horizontal",
      vertical: "vertical ",
    },
  },
  defaultVariants: {
    variant: "transparent",
    size: "medium",
    direction: "horizonal",
  },
})
