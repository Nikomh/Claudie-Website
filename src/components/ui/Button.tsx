import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-semibold tracking-tight whitespace-nowrap select-none transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tuerkis focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-tuerkis text-white hover:bg-tuerkis-80 active:scale-[0.98] shadow-sm hover:shadow-md",
        secondary:
          "border-2 border-tuerkis text-tuerkis bg-transparent hover:bg-tuerkis hover:text-white active:scale-[0.98]",
        dark:
          "bg-anthrazit text-white hover:bg-anthrazit-80 active:scale-[0.98] shadow-sm hover:shadow-md",
        accent:
          "bg-orange-rot text-white hover:brightness-110 active:scale-[0.98] shadow-sm hover:shadow-md",
        ghost:
          "bg-transparent text-anthrazit hover:bg-bg-section active:scale-[0.98]",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-base md:text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";
