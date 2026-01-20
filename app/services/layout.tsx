import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "What we take off your plate. Full hosting responsibility from menu planning to cleanup.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
