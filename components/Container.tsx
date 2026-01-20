import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}

export default function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  const sizeClasses = {
    default: "max-w-6xl",
    wide: "max-w-7xl",
    narrow: "max-w-4xl",
  };

  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 md:px-8 lg:px-12",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}
