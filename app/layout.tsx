import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Leward Escote — Software Engineer",
  description: "Backend-first full-stack software engineer with 6+ years of experience building business systems, APIs, CRM platforms, and modern web applications.",
  keywords: ["John Leward Escote", "Software Engineer", "Laravel Developer", "Full Stack Developer", "Next.js Developer", "Philippines"],
  authors: [{ name: "John Leward Escote" }],
  openGraph: { title: "John Leward Escote — Software Engineer", description: "Building serious products for real-world problems.", type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title: "John Leward Escote — Software Engineer", description: "Building serious products for real-world problems." },
};

export const viewport: Viewport = { themeColor: "#09090b", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}><body className="antialiased">{children}</body></html>;
}
