import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tiiwa — for the hours between sleeps",
    template: "%s · Tiiwa",
  },
  description:
    "Feeds, sleep, and nappies — logged in one tap, even at 3am. A private baby-care log that stays on your phone.",
  applicationName: "Tiiwa",
  keywords: [
    "baby tracker",
    "newborn log",
    "feed sleep nappy",
    "private baby app",
    "Tiiwa",
  ],
  openGraph: {
    title: "Tiiwa — for the hours between sleeps",
    description:
      "Everything about today, in one glance. Feeds, sleep, and nappies on this phone — not in the cloud.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiiwa — for the hours between sleeps",
    description:
      "A private baby-care log. One tap at 3am. No cloud sync.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-canvas font-sans text-ink">
        <div className="grain" aria-hidden />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
