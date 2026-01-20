import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-2xl border-2 border-[#C1B9AA]/30 bg-white/80 backdrop-blur-sm px-5 py-3 text-sm text-[#141414] placeholder:text-[#988A78] focus:outline-none focus:ring-2 focus:ring-[#0E564C]/20 focus:border-[#0E564C] disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:border-[#C1B9AA]/50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
