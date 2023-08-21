import { cva } from "class-variance-authority"

export const tabButton = cva("sui-tab", {
  variants: {
    variant: {
      primary: "text-primary",
      secondary: "",
    },
  },
})
