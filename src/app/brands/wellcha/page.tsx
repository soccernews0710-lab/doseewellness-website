// src/app/brands/wellcha/page.tsx
"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import WellchaInfoAccordion from "@/components/WellchaInfoAccordion";
import ParallaxHero from "@/components/ParallaxHero";
import TeaFieldParallaxSection from "@/components/TeaFieldParallaxSection";

export default function WellChaPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
        {/* 背景の薄い光 */}
        <div className="pointer-events-none absolute inset-0">
          <div className="floating-blob -left-24 -top-24 h-64 w-64 bg-emerald-200/55" />
          <div className="floating-blob floating-blob--delay -right-20 top-40 h-72 w-72 bg-amber-200/45" />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center">
          {/* 左：テキスト */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] tracking-[0.32em] text-neutral-500 uppercase">
              WellCha — Japanese Tea Wellness
            </p>
            <h1 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight text-neutral-900">
              日本茶のやさしさで、<br />
              毎日をしなやかに整える。
            </h1>
            <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed max-w-xl">
              忙しい毎日の中で、「心・からだ・肌」をまとめて整える一杯を。
              WellCha の抹茶とほうじ茶が、集中・美容・リラックスの三方向から
              あなたを支えます。
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-[11px] md:text-xs text-neutral-700">
              <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white/70 backdrop-blur px-3 py-1">
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Matcha — 集中・美容・リラックス
              </span>
              <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white/70 backdrop-blur px-3 py-1">
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-amber-500" />
                Hojicha — 温もりと深いリラックス
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <a
                href="#matcha"
                className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-2.5 font-medium text-white hover:bg-neutral-800 transition"
              >
                抹茶ラテについて
              </a>
              <a
                href="#hojicha"
                className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-2 font-medium text-neutral-800 hover:bg-neutral-50 transition"
              >
                ほうじ茶ラテについて
              </a>
            </div>
          </motion.div>

          {/* 右：ビジュアル（シンプルなカード） */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative h-64 w-72 md:h-72 md:w-80 rounded-[2.1rem] bg-gradient-to-br from-emerald-900 via-emerald-700 to-amber-200 shadow-2xl overflow-hidden">
              <div className="absolute inset-[1px] rounded-[2rem] bg-emerald-950/20 backdrop-blur-[2px]" />
              <div className="relative flex h-full flex-col justify-between px-7 py-6 text-emerald-50">
                <div className="space-y-2">
                  <p className="text-[10px] tracking-[0.32em] uppercase text-emerald-100/90">
                    WELLCHA
                  </p>
                  <p className="text-xs text-emerald-50/80">
                    Calm energy, gentle warmth.
                  </p>
                </div>
                <div className="space-y-1.5 text-[11px] text-emerald-50/90">
                  <p>抹茶とほうじ茶の 2 ラインで、</p>
                  <p>毎日の “整う時間” をデザインします。</p>
                </div>
                <div className="flex flex-wrap gap-2 text-[10px]">
                  <span className="rounded-full bg-black/35 px-3 py-1">
                    Matcha Latte
                  </span>
                  <span className="rounded-full bg-black/35 px-3 py-1">
                    Hojicha Latte
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 茶畑パララックスセクション */}
        <TeaFieldParallaxSection />

      {/* ===== 抹茶セクション ===== */}
      <AnimatedSection
        id="matcha"
        className="border-t border-neutral-100 bg-white"
        delay={0.05}
      >
        <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
          {/* 左：テキスト */}
          <div>
            <p className="text-[11px] tracking-[0.28em] text-emerald-600 uppercase">
              MATCHA LATTE
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-neutral-900">
              現代人のコンディションを整える、<br />
              新しい抹茶習慣。
            </h2>

            <div className="mt-4 space-y-4 text-sm md:text-base text-neutral-700 leading-relaxed">
              <p>
                抹茶は、何百年も続く日本の茶文化から生まれた、
                いわば <span className="font-medium">“飲むウェルネス”</span>。
              </p>
              <p>
                DoSee Wellness は、その抹茶を
                <span className="font-medium">
                  「忙しい現代でも続けられるかたち」
                </span>
                にデザインしました。
              </p>
              <p>
                ここでは、抹茶がもたらす
                <span className="font-medium">
                  3つのちから – 集中・肌ケア・リラックス
                </span>
                を、わかりやすくご紹介します。
              </p>
            </div>

            {/* 3つのちから */}
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-neutral-100 bg-neutral-50/80 p-4 shadow-sm">
                <p className="text-xs font-semibold tracking-[0.16em] text-neutral-500 uppercase">
                  落ち着いた集中力
                </p>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  カテキンとテアニンの組み合わせで、焦らない・荒れない
                  「落ち着いた集中力」をサポート。
                  テアニンは脳に働きかけ、コーヒーとは違う
                  <span className="font-medium">静かに冴える集中状態</span>
                  をつくると言われています。
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-100 bg-neutral-50/80 p-4 shadow-sm">
                <p className="text-xs font-semibold tracking-[0.16em] text-neutral-500 uppercase">
                  飲むスキンケア
                </p>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  抗酸化成分とビタミンが透明感とツヤを守り、
                  まるで<span className="font-medium">“飲むスキンケア”</span>
                  のような毎日を。
                  ビタミンC・E、カテキンなどが、日々のダメージから肌を守り、
                  内側からコンディションを整えます。
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-100 bg-neutral-50/80 p-4 shadow-sm">
                <p className="text-xs font-semibold tracking-[0.16em] text-neutral-500 uppercase">
                  深いリラックス
                </p>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  ビタミン・抗酸化成分が、日々のコンディションや腸内環境、
                  心の緊張をクリアに。
                  テアニンは副交感神経にも働きかけるため、
                  <span className="font-medium">寝る前の一杯</span>や、
                  1日の終わりのリセットタイムにもぴったりです。
                </p>
              </div>
            </div>
          </div>

          {/* 右：How to & おすすめ ＋ 購入ボタン */}
          <div className="space-y-8 text-sm text-neutral-700 leading-relaxed">
            <div className="rounded-3xl border border-neutral-100 bg-neutral-50/80 p-5 shadow-sm">
              <p className="text-[11px] tracking-[0.2em] text-neutral-500 uppercase">
                あなたの1日に、どう取り入れる？
              </p>
              <ul className="mt-3 space-y-1.5">
                <li>・朝のコーヒーの代わりに。</li>
                <li>・仕事・勉強前のウォームアップに。</li>
                <li>・夜のリラックスタイムのお供に。</li>
              </ul>
              <p className="mt-3">
                DoSee Wellness の抹茶は、お湯だけでも、ミルクでラテにしても、
                すっと溶けて、やさしい味わい。
              </p>
              <p className="mt-2 text-neutral-600">
                「シャキッとしたい」と「落ち着きたい」その両方をかなえたいときの、
                新しい選択肢です。
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-100 bg-white/90 p-5 shadow-sm">
              <p className="text-[11px] tracking-[0.2em] text-neutral-500 uppercase">
                こんな方におすすめです
              </p>
              <ul className="mt-3 space-y-1.5">
                <li>・コーヒーは好きだけど、カフェインのドキドキ感がつらい</li>
                <li>・デスクワークや勉強が多く、集中力をキープしたい</li>
                <li>・スキンケアはしているけれど、内側からもケアしたい</li>
                <li>・夜、スマホを見過ぎてしまい、寝る前に気持ちを落ち着かせたい</li>
                <li>・エナジードリンクより、身体にやさしいものを選びたい</li>
              </ul>
              <p className="mt-3 text-neutral-600">
                今日の一杯を、抹茶に変えてみませんか？
                ほんの一杯の習慣が、集中力・コンディション・気分を、
                静かに変えていきます。
              </p>

              {/* 🛒 抹茶ラテ購入ボタン */}
              <div className="mt-5">
                <a
                  href="https://zkn8n1-dt.myshopify.com/products/matcha-latte"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition"
                >
                  抹茶ラテを購入する
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ===== ほうじ茶セクション ===== */}
      <AnimatedSection
        id="hojicha"
        className="border-t border-neutral-100 bg-neutral-50/70"
        delay={0.08}
      >
        <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
          {/* 左：テキスト */}
          <div>
            <p className="text-[11px] tracking-[0.28em] text-amber-700 uppercase">
              HOJICHA LATTE
            </p>
            <h2 className="mt-3 text-2px md:text-3xl font-semibold text-neutral-900">
              心・からだ・呼吸をほどく、<br />
              新しいほうじ茶習慣。
            </h2>

            <div className="mt-4 space-y-4 text-sm md:text-base text-neutral-700 leading-relaxed">
              <p>
                忙しい毎日の中で、心・からだ・呼吸をゆっくりほどいてくれる一杯を。
                DoSee Wellness のほうじ茶が、やさしい温もりと深いリラックスで、
                あなたをそっと包みます。
              </p>
              <p>
                ほうじ茶は、緑茶をじっくり焙じて生まれる、
                香ばしくてやさしい <span className="font-medium">“飲むウェルネス”</span>。
              </p>
              <p>
                カフェインが抑えめで、子どもから大人まで飲みやすく、
                心とからだをゆるめたいときにぴったりのお茶です。
              </p>
              <p>
                DoSee Wellness は、このほうじ茶を
                <span className="font-medium">
                  「忙しい現代でも毎日つづけられるかたち」
                </span>
                にデザインしました。
              </p>
              <p>
                ここでは、ほうじ茶がもたらす
                <span className="font-medium">
                  3つのちから – 自然のやさしい力・負担のない温もり・深いリラックス
                </span>
                をご紹介します。
              </p>
            </div>

            {/* 3つのちから */}
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-neutral-100 bg-white/90 p-4 shadow-sm">
                <p className="text-xs font-semibold tracking-[0.16em] text-neutral-500 uppercase">
                  自然のやさしい力
                </p>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  茶葉本来のミネラルとポリフェノールが、
                  日々のコンディションをやさしくサポート。
                  カフェインは控えめなのに、頭がぼんやりしすぎない
                  <span className="font-medium">“ちょうどいい目覚め”</span>
                  を手伝ってくれます。
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-100 bg-white/90 p-4 shadow-sm">
                <p className="text-xs font-semibold tracking-[0.16em] text-neutral-500 uppercase">
                  負担のない温もり
                </p>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  焙煎によって生まれる香ばしさと、
                  からだにしみ込むような温かさが特徴。
                  冷えを感じやすい方や、
                  「お腹にやさしい温かいもの」が欲しいタイミングにぴったりです。
                  食後や、ちょっと疲れた午後に飲むことで、胃腸をいたわりながら、
                  ほっと一息つける時間をつくります。
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-100 bg-white/90 p-4 shadow-sm">
                <p className="text-xs font-semibold tracking-[0.16em] text-neutral-500 uppercase">
                  深いリラックス
                </p>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  ほうじ茶は、リラックスに関わるテアニンを含みつつ、
                  カフェイン量が抑えられているのが大きな魅力。
                  寝る前の一杯や、スマホを置いて深呼吸したい夜の時間に寄り添ってくれます。
                  「もうひと頑張り」の気持ちをやさしくほどいて、
                  明日に向けて心を整えるお手伝いをします。
                </p>
              </div>
            </div>
          </div>

          {/* 右：How to & おすすめ ＋ 購入ボタン */}
          <div className="space-y-8 text-sm text-neutral-700 leading-relaxed">
            <div className="rounded-3xl border border-neutral-100 bg-white/90 p-5 shadow-sm">
              <p className="text-[11px] tracking-[0.2em] text-neutral-500 uppercase">
                あなたの1日に、どう取り入れる？
              </p>
              <ul className="mt-3 space-y-1.5">
                <li>・朝、コーヒーの前に一杯。</li>
                <li>・仕事や家事がひと区切りついたタイミングに。</li>
                <li>・夜ごはんのあと、寝るまでのリラックスタイムに。</li>
              </ul>
              <p className="mt-3">
                DoSee Wellness のほうじ茶は、お湯だけでも、ミルクでラテにしても、
                香ばしさとやさしい甘みがふわっと広がります。
              </p>
              <p className="mt-2 text-neutral-600">
                「しっかり休みたい」と「ほっと一息つきたい」
                その両方をかなえたいときの、新しい選択肢です。
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-100 bg-neutral-50/90 p-5 shadow-sm">
              <p className="text-[11px] tracking-[0.2em] text-neutral-500 uppercase">
                こんな方におすすめです
              </p>
              <ul className="mt-3 space-y-1.5">
                <li>・コーヒーやエナジードリンクだと、夜までカフェインが残りやすい</li>
                <li>・からだを冷やさない、温かいドリンクを習慣にしたい</li>
                <li>・リラックスしながらも、翌朝に疲れを残したくない</li>
                <li>・甘いドリンクではなく、身体にやさしい一杯を選びたい</li>
                <li>・家族みんなで飲める “やさしいお茶” を探している</li>
              </ul>
              <p className="mt-3 text-neutral-600">
                今日の一杯を、ほうじ茶に変えてみませんか？
                ほんの一杯の習慣が、からだの温まり方や、
                夜のリラックス度合いを、静かに変えていきます。
              </p>
              <p className="mt-1 text-neutral-600">
                DoSee Wellness のほうじ茶で、
                あなたらしい「ととのう夜時間」をはじめましょう。
              </p>

              {/* 🛒 ほうじ茶ラテ購入ボタン */}
              <div className="mt-5">
                <a
                  href="https://zkn8n1-dt.myshopify.com/products/hojicha-latte"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition"
                >
                  ほうじ茶ラテを購入する
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <WellchaInfoAccordion />
    </main>
  );
}
