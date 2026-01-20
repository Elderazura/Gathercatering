import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menus",
  description: "International-forward menus. No regional focus. Adaptable, elegant, globally-inspired.",
};

export default function MenusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
