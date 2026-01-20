import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "taupe" | "off-white" | "white";
}

export default function Section({
  children,
  className,
  background = "default",
}: SectionProps) {
  const bgClasses = {
    default: "bg-gradient-to-b from-[#F4F3F1] to-white",
    taupe: "bg-gradient-to-br from-[#A28979] to-[#8b7565]",
    "off-white": "bg-[#F4F3F1]",
    white: "bg-white",
  };

  return (
    <section className={cn("py-28 md:py-36", bgClasses[background], className)}>
      {children}
    </section>
  );
}
