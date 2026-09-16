import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NavigationProvider } from "@/components/sections/NavigationState";
import type { Metadata } from "next";
import "./globals.css";
import { LocalNavigation } from "@/components/layout/LocalNavigation";

export const metadata: Metadata = {
  title: "DefensePly | WPC & PVC Boards, Doors and Frames",
  description:
    "Explore DefensePly WPC and PVC boards, doors and frames for interiors, furniture and commercial applications.",
  robots: { index: false, follow: false },
  icons: {
    icon: "/assets/fav-icon.webp",
  },
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
        <NavigationProvider>
          <Header />
          {children}
          <Footer />
        </NavigationProvider>
      </body>
    </html>
  );
}
