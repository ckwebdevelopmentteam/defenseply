import type { Metadata } from "next";
import "./globals.css";
import { LocalNavigation } from "@/components/layout/LocalNavigation";
export const metadata: Metadata = {
  title: "Discover Cosentino and its materials - Cosentino USA",
  description:
    "Sustainable surfaces for architecture and design. Discover Cosentino architectural surfaces, kitchens, bathrooms, and inspiring spaces.",
  robots: { index: false, follow: false },
  icons: { icon: "/assets/favicon.ico" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body>
        <a
          className="fixed -top-25 left-5 z-[2147483646] bg-white p-3 text-black focus:top-2.5"
          href="#main-content"
        >
          Skip to content
        </a>
        <LocalNavigation />
        {children}
      </body>
    </html>
  );
}
