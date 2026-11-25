import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://malsanka.com"),
  title: {
    default: "Charitha — Independent Developer & AI Builder",
    template: "%s | Charitha"
  },
  description: "Charitha is an independent developer and AI builder building thoughtful digital products, intelligent tools, agent workflows and automation systems.",
  applicationName: "Charitha Portfolio",
  authors: [{ name: "Charitha", url: "https://malsanka.com" }],
  creator: "Charitha",
  keywords: [
    "Charitha",
    "Independent Developer",
    "AI Builder",
    "AI Vibe Coder",
    "Sri Lanka Developer",
    "Full-Stack Developer",
    "Agent Systems",
    "Workflow Automation",
    "Next.js",
    "React",
    "TypeScript",
    "Rust",
    "malsanka.com"
  ],
  alternates: { canonical: "https://malsanka.com" },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" }
    ],
    apple: "/icon.svg"
  },
  openGraph: {
    title: "Charitha — Independent Developer & AI Builder",
    description: "Designing what's next with modern code, agent systems and AI intelligence.",
    url: "https://malsanka.com",
    siteName: "Charitha",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Charitha — Developer & AI Builder" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Charitha — Independent Developer & AI Builder",
    description: "Designing what's next with modern code, agent systems and AI intelligence.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090909"
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://malsanka.com/#person",
      "name": "Charitha",
      "url": "https://malsanka.com",
      "image": "https://malsanka.com/images/portfolio-portrait-dark-hero.webp",
      "jobTitle": "Independent Developer & AI Builder",
      "sameAs": ["https://github.com/charitha-only"],
      "knowsAbout": [
        "Full-Stack Development",
        "Artificial Intelligence",
        "AI Agents",
        "Automation Systems",
        "TypeScript",
        "Next.js",
        "React",
        "Rust",
        "Flutter"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "LK"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://malsanka.com/#website",
      "url": "https://malsanka.com",
      "name": "Charitha Portfolio",
      "publisher": { "@id": "https://malsanka.com/#person" },
      "inLanguage": "en"
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}