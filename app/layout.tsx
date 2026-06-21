import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Leward Escote — Senior Laravel & Full-Stack Engineer",
  description: "Senior Laravel and full-stack engineer with 6+ years of experience building APIs, CRM platforms, e-commerce systems, and developer tools.",
  keywords: ["John Leward Escote", "Software Engineer", "Laravel Developer", "Full Stack Developer", "Next.js Developer", "Philippines"],
  authors: [{ name: "John Leward Escote" }],
  openGraph: { title: "John Leward Escote — Senior Laravel & Full-Stack Engineer", description: "Backend specialist and technical leader building dependable business systems.", type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title: "John Leward Escote — Senior Laravel & Full-Stack Engineer", description: "Backend specialist and technical leader building dependable business systems." },
};

export const viewport: Viewport = { themeColor: "#000000", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth scroll-pt-[76px] motion-reduce:scroll-auto`}>
      <body className="m-0 overflow-x-hidden bg-black font-sans text-white antialiased selection:bg-red-500/35 selection:text-white [&_*]:box-border [&_a]:text-inherit [&_a]:no-underline [&_*:focus-visible]:rounded-[3px] [&_*:focus-visible]:outline-2 [&_*:focus-visible]:outline-offset-4 [&_*:focus-visible]:outline-red-500">
        {children}
      </body>
    </html>
  );
}
