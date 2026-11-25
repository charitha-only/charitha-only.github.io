import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://malsanka.com"),
  title: {
    default: "Charitha — Full AI Vibe Coder",
    template: "%s | Charitha"
  },
  description: "Charitha is a full AI vibe coder building thoughtful digital products, AI-powered applications, intelligent agents and automation systems.",
  applicationName: "Charitha Portfolio",
  alternates: { canonical: "https://malsanka.com" },
  openGraph: {
    title: "Charitha — Building the future with AI",
    description: "Full AI Vibe Coder · Full-Stack Developer · AI Agent & Automation Builder",
    url: "https://malsanka.com",
    siteName: "Charitha",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Charitha — Full AI Vibe Coder" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Charitha — Building the future with AI",
    description: "Full AI Vibe Coder · Full-Stack Developer · AI Agent & Automation Builder"
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090909"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}