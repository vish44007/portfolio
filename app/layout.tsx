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
    <html lang="en" className="scroll-smooth dark">
      <body className="min-h-screen bg-[#070f26] text-slate-100 antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
