// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "DoSee Wellness",
  description:
    "Busy days, gently reset. DoSee Wellness は、こころ・からだ・肌を整える一杯を届けるウェルネスブランドです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="font-sans bg-white text-neutral-900 antialiased">
        <Navbar />
        {/* ナビが固定なので上に余白 */}
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}