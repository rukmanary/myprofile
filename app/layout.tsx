import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ryandhika Rukmana - Full Stack Engineer, Specializing in React Native",
    template: "%s | Ryandhika Rukmana"
  },
  description: "Professional Full Stack Engineer and React Native Specialist. Building scalable mobile and web applications with modern TypeScript and JavaScript stacks. Passionate about educational technology, ERP systems, and impactful software solutions.",
  keywords: [
    "Ryandhika Rukmana",
    "Full Stack Engineer",
    "React Native Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Mobile App Development",
    "Web App Development",
    "Expo",
    "NodeJS",
    "ExpressJS",
    "Laravel",
    "Software Engineer",
    "System Analyst",
    "ERP System",
    "Education Technology",
    "Edutech Developer",
    "Modern Web Development",
    "Frontend Engineer",
    "Backend Engineer",
    "Senior React Native Developer",
    "Muslim Developer",
    "Islamic Tech",
    "Halal Tech",
    "Faith-driven Developer"
  ],
  authors: [{ name: "Ryandhika Rukmana" }],
  creator: "Ryandhika Rukmana",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rukmana-dev.my.id",
    title: "Ryandhika Rukmana - Full Stack Engineer | Specializing in React Native",
    description: "Professional Full Stack Engineer and React Native Specialist. Building scalable mobile and web applications with modern TypeScript and JavaScript stacks. Passionate about educational technology, ERP systems, and impactful software solutions.",
    siteName: "Ryandhika Rukmana Portfolio",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Ryandhika Rukmana - Full Stack Engineer | Specializing in React Native"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryandhika Rukmana - Full Stack Engineer | Specializing in React Native",
    description: "Professional Full Stack Engineer and React Native Specialist. Building scalable mobile and web applications with modern TypeScript and JavaScript stacks. Passionate about educational technology, ERP systems, and impactful software solutions.",
    images: ["/og-image.jpeg"],
    creator: "@ryandhikarukmana"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification=wytLCx8unxonAb-Pwq6znFx-6Kb5cqLknwHXbt4Pvow",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#2B3046" />
        <meta name="msapplication-TileColor" content="#2B3046" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
