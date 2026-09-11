import type { Metadata } from "next";
import "./globals.css";
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
      <body className="home page-template-core-home active-plugin-components">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
