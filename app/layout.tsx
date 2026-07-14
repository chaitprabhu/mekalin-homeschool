import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mekalin-homeschool.com"),
  title: {
    default: "Mekalin Homeschool - Epistemic Depth in Education",
    template: "%s | Mekalin Homeschool",
  },
  description:
    "An authority engine for advanced homeschooling families, built on the intersection of molecular biology, investigative journalism, and master-level instructional design. Authored by Chaitanya Prabhu Hak.",
  keywords: [
    "epistemic depth homeschooling",
    "instructional design homeschool",
    "systems thinking curriculum",
    "homeschool assessment portfolio",
    "STOBLS methodology",
    "project-based assessment homeschool",
    "cognitive load theory homeschool",
  ],
  authors: [{ name: "Chaitanya Prabhu Hak" }],
  creator: "Chaitanya Prabhu Hak",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mekalin-homeschool.com",
    siteName: "Mekalin Homeschool",
    title: "Mekalin Homeschool - Epistemic Depth in Education",
    description:
      "An authority engine built at the intersection of molecular biology x investigative journalism x instructional design.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mekalin Homeschool - Epistemic Depth in Education",
    description:
      "An authority engine built at the intersection of molecular biology x investigative journalism x instructional design.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Mekalin Homeschool",
              url: "https://mekalin-homeschool.com",
              author: {
                "@type": "Person",
                name: "Chaitanya Prabhu Hak",
                jobTitle: "Molecular Biologist, Investigative Journalist, Instructional Designer",
              },
              description: "Authority engine for advanced homeschooling families built on Epistemic Depth methodology.",
            }),
          }}
        />
      </head>
      <body className="bg-parchment text-ink antialiased">{children}</body>
    </html>
  );
}
