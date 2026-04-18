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
  title: {
    default: "Shuaib Khan | Web | MERN | Web3 Developer",
    template: "%s | Shuaib Khan"
  },
  description: "Results-driven Frontend & MERN Stack Developer with 2.5+ years of experience building user-focused web applications. Skilled in React.js, Next.js, Node.js, and API integration.",
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
    url: "https://shuaibkhan.dev", // Ideally update to actual URL
    title: "Shuaib Khan - Web | MERN | Web3 Developer",
    description: "Results-driven Frontend & MERN Stack Developer with 2.5+ years of experience building scalable, high-performance web applications.",
    siteName: "Shuaib Khan Portfolio",
    images: [
      {
        url: "/shuaib.jpeg", // Note: For best results, use a 1200x630 image.
        width: 800,
        height: 800,
        alt: "Shuaib Khan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shuaib Khan - Frontend Developer",
    description: "Results-driven Frontend & MERN Stack Developer specializing in React, Next.js, and Node.js.",
    creator: "@shuaibdev", // Update if different
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
                "jobTitle": "Frontend & MERN Stack Developer",
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
