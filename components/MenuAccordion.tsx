"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface MenuItem {
  title: string;
  category: string;
  items: string[];
}

interface MenuAccordionProps {
  menus: MenuItem[];
}

export default function MenuAccordion({ menus }: MenuAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {menus.map((menu, index) => (
        <AccordionItem key={index} value={`menu-${index}`}>
          <AccordionTrigger className="text-left">
            <div>
              <div className="font-serif text-xl text-[#141414]">
                {menu.title}
              </div>
              <div className="text-sm text-[#988A78] font-normal mt-1">
                {menu.category}
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-3 text-[#988A78]">
              {menu.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#0E564C] mr-3">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
