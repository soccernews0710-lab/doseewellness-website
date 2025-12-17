// src/app/page.tsx
"use client";

import { motion } from "framer-motion";

import AnimatedSection from "@/components/AnimatedSection";
import PhilosophySection from "@/components/PhilosophySection";
import ProductLinesSection from "@/components/ProductLinesSection";
import HeroVisualSlider from "@/components/HeroVisualSlider";
import AboutSection from "@/components/AboutSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* ====== HERO ====== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-white to-white">
        {/* 背景の柔らかい光 */}
        <div className="pointer-events-none absolute inset-0">
          <div className="floating-blob -left-24 -top-24 h-72 w-72 bg-emerald-200/55" />
          <div className="floating-blob floating-blob--delay -right-20 top-40 h-80 w-80 bg-amber-200/55" />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-28 pb-24 grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
          {/* 左：テキスト */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.35em] text-neutral-500 uppercase">
              DOSEE WELLNESS
            </p>

            <h1 className="mt-5 text-3xl md:text-4xl lg:text-[2.6rem] font-semibold leading-tight text-neutral-900">
              Busy days, gently reset.
            </h1>

            <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed max-w-xl">
              DoSee Wellness は、忙しい毎日の中で「こころ・からだ・肌」を
              やさしく整える一杯を届けるウェルネスブランドです。
              無理なく続けられるシンプルさと、上質で澄んだ心地よさを大切にしています。
            </p>

            {/* 3つの軸 */}
            <div className="mt-6 flex flex-wrap gap-3 text-[11px] md:text-xs text-neutral-700">
              <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white/60 backdrop-blur px-3 py-1 shadow-sm">
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Mind — 静かな集中と落ち着き
              </span>
              <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white/60 backdrop-blur px-3 py-1 shadow-sm">
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-sky-500" />
                Body — 日々のコンディションケア
              </span>
              <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white/60 backdrop-blur px-3 py-1 shadow-sm">
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-amber-500" />
                Skin — 内側から満ちる透明感
              </span>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#product-lines"
                className="inline-flex items-center rounded-full px-6 py-2.5 text-sm font-medium text-white shadow-md bg-neutral-900 hover:bg-neutral-800 transition"
              >
                View Product Lines
              </a>
              <a
                href="#about-brand"
                className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium border border-neutral-300 text-neutral-800 hover:bg-neutral-50 transition"
              >
                About DoSee
              </a>
            </div>

            {/* サブテキスト */}
            <p className="mt-4 text-[11px] text-neutral-500">
              Matcha / Hojicha / Ginger Shot など、日常に溶け込む
              ウェルネスドリンクを展開しています。
            </p>
          </motion.div>

          {/* 右：ビジュアルスライダー */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <HeroVisualSlider />
          </motion.div>
        </div>

        {/* スクロールインジケーター */}
        <div className="hidden md:flex absolute left-1/2 bottom-6 -translate-x-1/2 flex-col items-center text-[10px] tracking-[0.28em] text-neutral-400">
          <span>SCROLL</span>
          <span className="mt-2 h-8 w-px bg-gradient-to-b from-neutral-400 to-neutral-200 animate-pulse" />
        </div>
      </section>

      {/* PHILOSOPHY */}
      <PhilosophySection />

      {/* PRODUCT LINES */}
      <ProductLinesSection />

      {/* ABOUT BRAND */}
      <AboutSection />
    </main>
  );
}