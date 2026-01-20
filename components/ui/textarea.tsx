import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[140px] w-full rounded-2xl border-2 border-[#C1B9AA]/30 bg-white/80 backdrop-blur-sm px-5 py-4 text-sm text-[#141414] placeholder:text-[#988A78] focus:outline-none focus:ring-2 focus:ring-[#0E564C]/20 focus:border-[#0E564C] disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:border-[#C1B9AA]/50 resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
