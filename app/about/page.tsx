import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: "Our story, principles, and the hospitality experience behind Gather Catering.",
};

export default function About() {
  return <AboutContent />;
}
