import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Team Synergy Showcase",
  description: "Maps & Search Expertise - SAM, Jenkins, Rick, Doc Oc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-to-b from-[#131520] to-[#0d0e14]">
        {children}
      </body>
    </html>
  );
}
