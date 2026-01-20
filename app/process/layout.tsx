import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process",
  description: "How it works. From enquiry to execution, we handle every detail so you can stay present.",
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
