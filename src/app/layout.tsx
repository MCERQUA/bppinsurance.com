import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://bppinsurance.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BPP Insurance | Protecting What Matters Most",
    template: "%s | BPP Insurance",
  },
  description:
    "Your trusted insurance partner for home, auto, life, and business coverage. Personalized protection since 1998.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "BPP Insurance",
    title: "BPP Insurance | Protecting What Matters Most",
    description:
      "Your trusted insurance partner for home, auto, life, and business coverage. Personalized protection since 1998.",
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BPP Insurance — Protecting What Matters Most",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BPP Insurance | Protecting What Matters Most",
    description:
      "Your trusted insurance partner for home, auto, life, and business coverage.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "BPP Insurance",
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  image: `${SITE_URL}/og-image.png`,
  description:
    "Family-owned insurance agency providing home, auto, life, and business coverage since 1998.",
  foundingDate: "1998",
  telephone: "+18449675247",
  email: "josh@contractorschoiceagency.com",
  founder: { "@type": "Person", name: "Josh Cotner" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "12220 E Riggs Road Suite #105",
    addressLocality: "Chandler",
    addressRegion: "AZ",
    postalCode: "85249",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  areaServed: { "@type": "Country", name: "United States" },
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Insurance Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Home Insurance" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Auto Insurance" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Life Insurance" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Business Insurance" },
      },
    ],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BPP Insurance",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/blog?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
