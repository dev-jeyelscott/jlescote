import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "John Leward Escote — Senior Laravel & Full-Stack Engineer",
  description:
    "Senior Laravel and full-stack engineer with 6+ years of experience building APIs, CRM platforms, e-commerce systems, and developer tools.",
  keywords: [
    "John Leward Escote",
    "Software Engineer",
    "Laravel Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "Philippines",
  ],
  authors: [{ name: "John Leward Escote" }],
  openGraph: {
    title: "John Leward Escote — Senior Laravel & Full-Stack Engineer",
    description:
      "Backend specialist and technical leader building dependable business systems.",
    images: [
      {
        url: "/images/portfolio-preview.png",
        width: 1448,
        height: 1086,
        alt: "John Leward Escote portfolio preview",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Leward Escote — Senior Laravel & Full-Stack Engineer",
    description:
      "Backend specialist and technical leader building dependable business systems.",
    images: [
      {
        url: "/images/portfolio-preview.png",
        alt: "John Leward Escote portfolio preview",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth scroll-pt-[76px] motion-reduce:scroll-auto`}
    >
      <head>
        <link
          href="/images/dark-mode-favicon.ico"
          id="theme-favicon"
          rel="icon"
          sizes="any"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d="/images/dark-mode-favicon.ico";var l="/images/light-mode-favicon.ico";function f(t){var e=document.getElementById("theme-favicon");if(e)e.href=t==="light"?l:d}try{var t=localStorage.getItem("portfolio-theme");if(t!=="light"&&t!=="dark")t="dark";document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t;f(t)}catch(e){document.documentElement.dataset.theme="dark";f("dark")}})()`,
          }}
        />
      </head>
      <body className="m-0 bg-black font-sans text-white antialiased selection:bg-red-500/35 selection:text-white [&_*]:box-border [&_a]:text-inherit [&_a]:no-underline [&_*:focus-visible]:rounded-[3px] [&_*:focus-visible]:outline-2 [&_*:focus-visible]:outline-offset-4 [&_*:focus-visible]:outline-red-500">
        {children}
      </body>
    </html>
  );
}
