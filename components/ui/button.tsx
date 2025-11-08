import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "rounded-xl bg-gradient-to-br from-primary via-yellow-500 to-orange-600 text-primary-foreground shadow-primary/25 hover:scale-[1.02] hover:from-primary hover:via-yellow-400 hover:to-orange-500 font-semibold",
        destructive:
          "rounded-xl bg-gradient-to-br from-red-600 via-red-500 to-rose-600 text-white shadow-red-500/25 hover:scale-[1.02] hover:from-red-700 hover:via-red-600 hover:to-rose-700 font-semibold focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "rounded-lg border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        gradientOutline:
          "btn-gradient-outline rounded-xl font-semibold text-sm tracking-tight hover:scale-[1.01]",
        sunriseOutline:
          "sunrise-outline-button font-semibold text-sm tracking-tight",
        secondary:
          "rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "rounded-lg hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 has-[>svg]:px-4",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 text-xs",
        lg: "h-12 rounded-xl px-6 has-[>svg]:px-4 text-base",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
