// src/components/TeaFieldParallaxSection.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function TeaFieldParallaxSection() {
  const ref = useRef<HTMLDivElement | null>(null);

  // セクション内スクロールに応じて、背景画像を少しだけ上下させる
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // セクションが入ってくる〜出て行く
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      className="relative border-t border-neutral-100 bg-white"
    >
      <div className="relative h-[420px] md:h-[460px] overflow-hidden">
        {/* 背景の茶畑（パララックス） */}
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/images/tea-field-hero.jpg"
            alt="Japanese tea fields"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* 下から浮き上がる説明カード */}
        <motion.div
          initial={{ opacity: 0, y: 56 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-x-4 bottom-6 md:inset-x-1/2 md:bottom-10 md:w-[720px] md:-translate-x-1/2"
        >
          <div className="rounded-3xl border border-white/70 bg-white/85 backdrop-blur-sm shadow-[0_18px_45px_rgba(0,0,0,0.18)] px-5 py-5 md:px-7 md:py-6">
            <p className="text-[11px] tracking-[0.28em] text-emerald-600 uppercase">
              TEA FIELDS × WELLNESS
            </p>
            <h2 className="mt-2 text-lg md:text-2xl font-semibold text-neutral-900">
              茶畑の静けさを、そのまま一杯に。
            </h2>
            <p className="mt-3 text-sm md:text-base text-neutral-700 leading-relaxed">
              静岡の茶畑で育った茶葉の力を、忙しい毎日でも続けられるラテのかたちに。
              自然のグラデーションのような茶畑の奥から、心とからだをそっと整える時間が
              浮かび上がるイメージでデザインしました。
            </p>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              一日のどこかでふっと呼吸を深くしたくなったとき、
              WellCha の抹茶・ほうじ茶が、スパのような静けさを思い出させてくれます。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}