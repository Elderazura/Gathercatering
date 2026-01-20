"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  value: string[];
  onValueChange: (value: string[]) => void;
  type: "single" | "multiple";
  collapsible: boolean;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(
  null
);

interface AccordionProps {
  type?: "single" | "multiple";
  collapsible?: boolean;
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  children: React.ReactNode;
  className?: string;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      type = "single",
      collapsible = false,
      defaultValue,
      value: controlledValue,
      onValueChange,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState<string[]>(
      Array.isArray(defaultValue)
        ? defaultValue
        : defaultValue
        ? [defaultValue]
        : []
    );

    const value = controlledValue
      ? Array.isArray(controlledValue)
        ? controlledValue
        : [controlledValue]
      : internalValue;

    const handleValueChange = React.useCallback(
      (newValue: string[]) => {
        if (!controlledValue) {
          setInternalValue(newValue);
        }
        if (onValueChange) {
          onValueChange(type === "single" ? newValue[0] || "" : newValue);
        }
      },
      [controlledValue, onValueChange, type]
    );

    return (
      <AccordionContext.Provider value={{ value, onValueChange: handleValueChange, type, collapsible }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("border-b border-[#C1B9AA]/30", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, ...props }, ref) => {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionTrigger must be inside Accordion");

  const itemContext = React.useContext(AccordionItemContext);
  if (!itemContext)
    throw new Error("AccordionTrigger must be inside AccordionItem");

  const isOpen = context.value.includes(itemContext.value);

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "flex w-full items-center justify-between py-6 text-left font-medium transition-all hover:opacity-80 [&[data-state=open]>svg]:rotate-180",
        className
      )}
      onClick={() => {
        if (context.type === "single") {
          if (isOpen && context.collapsible) {
            // Close if collapsible
            context.onValueChange([]);
          } else if (!isOpen) {
            // Open this item
            context.onValueChange([itemContext.value]);
          }
        } else {
          // Multiple mode
          const newValue = isOpen
            ? context.value.filter((v) => v !== itemContext.value)
            : [...context.value, itemContext.value];
          context.onValueChange(newValue);
        }
      }}
      {...props}
    >
      <span className="text-lg font-serif text-[#141414]">{children}</span>
      <ChevronDown
        className="h-5 w-5 shrink-0 text-[#988A78] transition-transform duration-200"
        aria-hidden="true"
      />
    </button>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, ...props }, ref) => {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionContent must be inside Accordion");

  const itemContext = React.useContext(AccordionItemContext);
  if (!itemContext)
    throw new Error("AccordionContent must be inside AccordionItem");

  const isOpen = context.value.includes(itemContext.value);

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden text-sm text-[#988A78] transition-all",
        isOpen ? "animate-accordion-down" : "animate-accordion-up"
      )}
      {...props}
    >
      <div className={cn("pb-6 pt-0", className)}>{children}</div>
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

const AccordionItemContext = React.createContext<{ value: string } | null>(
  null
);

const AccordionItemWithContext = React.forwardRef<
  HTMLDivElement,
  AccordionItemProps
>(({ value, children, ...props }, ref) => {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <AccordionItem ref={ref} value={value} {...props}>
        {children}
      </AccordionItem>
    </AccordionItemContext.Provider>
  );
});
AccordionItemWithContext.displayName = "AccordionItem";

export {
  Accordion,
  AccordionItemWithContext as AccordionItem,
  AccordionTrigger,
  AccordionContent,
};
