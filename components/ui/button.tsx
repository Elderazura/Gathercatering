import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0E564C]/20 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-[#0E564C] text-white hover:bg-[#0a453d] shadow-lg hover:shadow-xl hover:shadow-[#0E564C]/20 hover:-translate-y-0.5",
        secondary:
          "bg-[#A28979] text-white hover:bg-[#8b7565] shadow-lg hover:shadow-xl hover:shadow-[#A28979]/20 hover:-translate-y-0.5",
        outline:
          "border-2 border-[#0E564C] bg-transparent text-[#0E564C] hover:bg-[#0E564C] hover:text-white hover:shadow-lg",
        ghost: "hover:bg-[#F4F3F1] text-[#141414] hover:text-[#0E564C]",
      },
      size: {
        default: "h-10 px-5 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-11 px-8 text-base font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
