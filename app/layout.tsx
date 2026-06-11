import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samiksha Shelar — Digital Marketing & Brand Strategist",
  description:
    "Portfolio of Samiksha Shelar — Performance Marketing, Meta Ads, Brand Strategy, AI Content Creation, Creative Direction. 3+ Years | 100+ Campaigns | Mumbai.",
  keywords: ["Digital Marketing", "Performance Marketing", "Meta Ads", "Brand Strategy", "AI Content", "Mumbai", "Samiksha Shelar"],
  openGraph: {
    title: "Samiksha Shelar — Digital Marketing & Brand Strategist",
    description: "Creative and performance-driven Digital Marketing Professional. Meta Ads | Brand Strategy | AI Content | Creative Direction.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
