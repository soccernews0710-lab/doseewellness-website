// src/components/HeroVisualSlider.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  { src: "/images/hero-matcha.jpg", label: "Matcha Latte" },
  { src: "/images/hero-hojicha.jpg", label: "Hojicha Latte" },
  { src: "/images/hero-matcha1.jpg", label: "Matcha Latte" },
  { src: "/images/hero-hojicha1.jpg", label: "Hojicha Latte" },
];

export default function HeroVisualSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const current = slides[index];

  return (
    <div className="relative h-64 w-72 md:h-72 md:w-80 rounded-[2.1rem] shadow-2xl overflow-hidden bg-neutral-900">
      {/* 写真スライド */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1 }}
        >
          <Image
            src={current.src}
            alt={current.label}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* 上にかぶせるグラデーションレイヤー */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/35 to-black/10" />

      {/* テキストレイヤー */}
      <div className="relative flex h-full flex-col justify-between px-7 py-6 text-emerald-50">
        <div className="space-y-2">
          <p className="text-[10px] tracking-[0.32em] uppercase text-emerald-100/90">
            MATCHA &amp; HOJICHA
          </p>
          <p className="text-xs text-emerald-50/80">
            Calm energy &amp; gentle boost.
          </p>
        </div>

        <div className="space-y-2 text-[11px] text-emerald-50/85">
          <p>MIND・BODY・SKIN をまとめて整える、日常のための一杯。</p>
          <p className="text-emerald-50/70">
            朝の立ち上がりから、夜のクールダウンまで寄り添うウェルネスライン。
          </p>
        </div>

        {/* プロダクトラインのタグ */}
        <div className="flex flex-wrap gap-2 text-[10px]">
          <span className="rounded-full bg-black/45 px-3 py-1">
            WellCha — Japanese Tea
          </span>
          <span className="rounded-full bg-black/45 px-3 py-1">
            DoSee — Ginger Shot
          </span>
        </div>
      </div>
    </div>
  );
}