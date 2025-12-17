// src/components/AboutSection.tsx
"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function AboutSection() {
  return (
    <AnimatedSection
      id="about-brand"
      className="border-t border-neutral-100 bg-neutral-50/70"
      delay={0.05}
    >
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
        {/* 左：ブランドストーリー */}
        <div>
          <p className="text-[11px] tracking-[0.28em] text-neutral-500 uppercase">
            ABOUT DOSEE WELLNESS
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-neutral-900">
            A small, gentle ritual for every day.
          </h2>

          <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed">
            DoSee Wellness は、「がんばるために整える」のではなく、
            忙しい日々の中でも自分を大切にするための、小さな一杯を届ける
            ことを目指しています。ライフスタイルや好みに合わせて、
            抹茶・ほうじ茶・ジンジャーなど、いくつかのラインを展開しながら、
            「続けやすさ」と「心地よさ」のバランスを大切にしています。
          </p>

          <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
            海外と日本をつなぐ視点から、原料や味わい、デザインにこだわり、
            日常の中でそっと寄りそうウェルネスブランドでありたいと考えています。
          </p>

          {/* 3つのキーワード */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3 text-xs md:text-sm">
            <div>
              <p className="font-semibold text-neutral-900">Effortless</p>
              <p className="mt-1 text-neutral-600 leading-relaxed">
                難しいルールではなく、続けやすい習慣として。
              </p>
            </div>
            <div>
              <p className="font-semibold text-neutral-900">Everyday</p>
              <p className="mt-1 text-neutral-600 leading-relaxed">
                忙しい日でも、さっと取り入れられる形で届けます。
              </p>
            </div>
            <div>
              <p className="font-semibold text-neutral-900">Gentle</p>
              <p className="mt-1 text-neutral-600 leading-relaxed">
                からだとこころに、やさしく寄りそう味わいと設計。
              </p>
            </div>
          </div>
        </div>

        {/* 右：ブランドカード / メッセージ */}
        <div className="rounded-3xl border border-neutral-100 bg-white/80 p-6 shadow-sm text-sm text-neutral-700 leading-relaxed">
          <p className="text-[11px] tracking-[0.3em] text-neutral-500 uppercase">
            MESSAGE
          </p>
          <p className="mt-3">
            「整えなきゃ」と力むのではなく、
            ふっと一息ついたときにそばにいてくれる一杯を。
          </p>
          <p className="mt-3">
            WellCha や Ginger Shot など、プロダクトごとに世界観は
            少しずつ違っても、その中心には“やさしく整える”という
            共通の軸があります。
          </p>
          <p className="mt-3">
            DoSee Wellness をお選びいただく時間が、あなたの日常に
            静かな余白と、前向きなエネルギーをもたらしますように。
          </p>

          <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-neutral-500">
            <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1">
              Japanese tea &amp; botanicals
            </span>
            <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1">
              Designed for busy days
            </span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}