// src/components/PhilosophySection.tsx
"use client";

import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const cards = [
  {
    key: "mind",
    label: "MIND",
    title: "こころ",
    body: [
      "カフェインとテアニンのバランスで、",
      "張りつめた思考をほぐし、静かな集中へ。",
    ],
  },
  {
    key: "body",
    label: "BODY",
    title: "からだ",
    body: [
      "ビタミンやポリフェノールなど、",
      "日々のコンディションを支える成分をやさしく一杯に。",
    ],
  },
  {
    key: "skin",
    label: "SKIN",
    title: "肌",
    body: [
      "抗酸化成分やビタミンCを含む素材で、",
      "内側から満ちるような透明感をイメージしたブレンド設計。",
    ],
  },
];

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="max-w-6xl mx-auto px-6 py-20 md:py-24"
    >
      <p className="text-xs tracking-[0.35em] text-neutral-500 uppercase">
        OUR PHILOSOPHY
      </p>
      <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-neutral-900">
        Wellness that fits into busy lives.
      </h2>
      <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed max-w-2xl">
        DoSee Wellness は、「時間がないからこそ整えたい人」のためのブランドです。
        むずかしいルールやストイックさではなく、日々の一杯を通じて
        「こころ・からだ・肌」を少しずつ整えていく。そんな、無理のないウェルネス習慣をデザインしています。
      </p>

      {/* 3カード：Mind / Body / Skin */}
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-8 grid gap-5 md:grid-cols-3"
      >
        {cards.map((card) => (
          <motion.li
            key={card.key}
            variants={cardVariants}
            className="group relative"
          >
            {/* グラデーションの細いライン（hover でふわっと出る） */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-[1px] rounded-[1.4rem] bg-gradient-to-r from-emerald-400 via-amber-300 to-rose-300 blur-sm opacity-80" />
            </div>

            {/* 本体カード */}
            <div className="relative rounded-3xl bg-white/80 border border-neutral-100 px-6 py-6 md:px-7 md:py-7 shadow-sm group-hover:shadow-md transition-shadow">
              <p className="text-[11px] tracking-[0.3em] text-neutral-400 uppercase">
                {card.label}
              </p>
              <h3 className="mt-3 text-sm font-semibold text-neutral-900 leading-snug">
                {card.title}
              </h3>
              <p className="mt-3 text-xs md:text-sm text-neutral-600 leading-relaxed space-y-0.5">
                {card.body.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}