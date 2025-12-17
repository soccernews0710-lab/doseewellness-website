// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur shadow-sm"
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        
        {/* ★ ロゴ画像に変更 */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/image.png"
            alt="DoSee Wellness Logo"
            width={120}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* メニュー */}
        <div className="hidden md:flex gap-6 text-sm text-neutral-700">
          <a href="#about-brand" className="hover:text-neutral-900 transition">
            About
          </a>
          <a href="#products" className="hover:text-neutral-900 transition">
            Products
          </a>
          <a
            href="https://zkn8n1-dt.myshopify.com"
            className="rounded-full border border-neutral-900 px-4 py-1.5 text-neutral-900 hover:bg-neutral-900 hover:text-white transition"
          >
            Online Store
          </a>
        </div>
      </nav>
    </header>
  );
}