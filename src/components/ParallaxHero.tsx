// src/components/ParallaxHero.tsx
"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

type ParallaxHeroProps = {
  image: string;
  height?: number;        // 表示高さ（px）
  strength?: number;      // パララックスの強さ
  overlayOpacity?: number;
};

export default function ParallaxHero({
  image,
  height = 320,
  strength = 80,
  overlayOpacity = 0.3,
}: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [strength, -strength]);

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height }}
    >
      <motion.div className="relative h-full w-full" style={{ y: translateY }}>
        <Image
          src={image}
          alt="Tea field"
          fill
          priority
          className="object-cover object-center"
        />

        {/* 上にかぶせるグラデーション */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0))",
            opacity: overlayOpacity,
          }}
        />
      </motion.div>
    </div>
  );
}