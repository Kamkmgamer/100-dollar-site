import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bella Italia | Authentic Italian Restaurant",
  description: "Experience authentic Italian cuisine at Bella Italia",
  openGraph: {
    title: "Bella Italia Restaurant",
    description: "Experience authentic Italian cuisine at Bella Italia",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
