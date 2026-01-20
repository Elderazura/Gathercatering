import type { Metadata } from "next";

const siteName = "Gather Catering";
const siteDescription =
  "Premium catering and hosting. International menus, elegant setups, warm hospitality. We host gatherings, not just cater events.";

export const defaultMetadata: Metadata = {
  title: {
    template: `%s | ${siteName}`,
    default: siteName,
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gathercatering.com", // Update with actual domain
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/og/og.jpg",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/og/og.jpg"],
  },
};
