import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vishwashree M | CS Student & Web Developer",
  description:
    "Personal portfolio of Vishwashree M - Computer Science student at BIT who loves building web apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
