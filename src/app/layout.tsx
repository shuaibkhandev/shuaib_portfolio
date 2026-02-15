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
    default: "Shuaib Khan | Frontend & MERN Stack Developer",
    template: "%s | Shuaib Khan"
  },
  description: "Portfolio of Shuaib Khan, a Results-driven Frontend & MERN Stack Developer specializing in React.js, Next.js, and high-performance web applications.",
  keywords: [
    "Shuaib Khan",
    "Frontend Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Islamabad",
    "JavaScript Developer",
    "Full Stack Developer",
    "Portfolio",
    "UI/UX"
  ],
  authors: [{ name: "Shuaib Khan" }],
  creator: "Shuaib Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shuaibkhan.dev", // Ideally update to actual URL
    title: "Shuaib Khan - Frontend & MERN Stack Developer",
    description: "Building exceptional digital experiences with modern web technologies.",
    siteName: "Shuaib Khan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shuaib Khan - Frontend Developer",
    description: "Results-driven Frontend & MERN Stack Developer specializing in React, Next.js, and Node.js.",
    creator: "@shuaibdev", // Update if different
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
