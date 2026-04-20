import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   metadataBase: new URL("https://www.welivesoft.com"),
  title: {
    default: "Shuaib Khan | Web | MERN | Web3 Developer",
    template: "%s | Shuaib Khan"
  },
  description: "Results-driven Frontend, MERN Stack & Web3 Developer with 2.5+ years of experience building user-focused web and decentralized applications. Skilled in React.js, Next.js, Node.js, Web3, and API integration.",
   alternates: {
    canonical: "/",
  },
  keywords: [
    "Shuaib Khan",
    "Web Developer",
    "MERN Stack Developer",
    "Web3 Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Solidity",
    "Portfolio"
  ],
  authors: [{ name: "Shuaib Khan" }],
  creator: "Shuaib Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shuaibkhan.dev", 
    title: "Shuaib Khan - Web | MERN | Web3 Developer",
    description: "Results-driven Frontend, MERN Stack & Web3 Developer with 2.5+ years of experience building scalable, high-performance web and decentralized applications.",
    siteName: "Shuaib Khan Portfolio",
    images: [
      {
        url: "/shuaib.jpeg",
        width: 800,
        height: 800,
        alt: "Shuaib Khan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shuaib Khan - Web | MERN | Web3 Developer",
    description: "Results-driven Frontend, MERN Stack & Web3 Developer specializing in React, Next.js, Node.js, and Web3 technologies.",
    creator: "shuaib_dev",
    images: ["/shuaib.jpeg"],
  },
  icons: {
    icon: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Shuaib Khan",
                "url": "https://shuaibkhan.dev",
                "jobTitle": "Frontend, MERN Stack & Web3 Developer",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Islamabad",
                  "addressCountry": "Pakistan"
                },
                "sameAs": [
                  "https://github.com/shuaibkhandev",
                  "https://linkedin.com/in/shuaibdev"
                ]
              }),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
