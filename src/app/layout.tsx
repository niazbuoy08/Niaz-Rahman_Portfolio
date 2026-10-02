import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Niaz Rahman is a Software Engineering graduate working across backend development, applied machine learning, and business analysis — currently a Business Analyst at Sheba Technologies on live FinTech and banking products.";

export const metadata: Metadata = {
  title: "Niaz Rahman — Backend Engineer & Business Analyst",
  description,
  openGraph: {
    type: "website",
    title: "Niaz Rahman — Backend Engineer & Business Analyst",
    description,
    siteName: "Niaz Rahman",
  },
  twitter: {
    card: "summary",
    title: "Niaz Rahman — Backend Engineer & Business Analyst",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
