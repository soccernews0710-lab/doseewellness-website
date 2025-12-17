// src/app/brands/dosee/page.tsx
"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

export default function DoSeePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden border-b border-neutral-100">
        {/* ぼんやりした背景グラデーション（ジンジャー系カラー） */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-amber-100 blur-3xl opacity-70" />
          <div className="absolute right-0 bottom-[-80px] h-80 w-80 rounded-full bg-orange-100 blur-3xl opacity-60" />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-28 md:pb-20 grid gap-10 md:grid-cols-[3fr,2fr] items-center">
          {/* 左：テキスト */}
          <div>
            <p className="text-[11px] tracking-[0.35em] text-neutral-500 uppercase">
              BRAND / DOSEE
            </p>
            <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight">
              1日を前向きにする、
              <br className="hidden md:block" />
              小さな一杯。
            </h1>
            <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed max-w-xl">
              DoSee は、負担なく続けられるショット系ウェルネスライン。
              「ちゃんと整えたいけれど、時間も気力も限られている」そんな毎日のために、
              さっと飲めて、からだと気分をやさしく前に進める一杯を目指しています。
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-[11px] md:text-xs text-neutral-600">
              <span className="inline-flex items-center rounded-full border border-amber-100 bg-amber-50/70 px-3 py-1">
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-amber-500" />
                Ginger &amp; Botanical Wellness
              </span>
              <span className="inline-flex items-center rounded-full border border-neutral-200 px-3 py-1">
                Daily small ritual
              </span>
              <span className="inline-flex items-center rounded-full border border-neutral-200 px-3 py-1">
                Shot style, easy to keep
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-500">
                Online Store — Coming soon
              </span>
              <a
                href="/"
                className="inline-flex items-center text-sm text-neutral-700 hover:text-neutral-900 underline-offset-4 hover:underline"
              >
                Back to DoSee Wellness →
              </a>
            </div>
          </div>

          {/* 右：ビジュアル（ジンジャーショットのカードっぽく） */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative h-64 w-56 md:h-72 md:w-60 rounded-3xl bg-gradient-to-br from-amber-500 via-orange-400 to-rose-200 shadow-2xl flex flex-col items-center justify-center text-amber-50">
              <span className="text-[10px] tracking-[0.35em] uppercase">
                DOSEE
              </span>
              <p className="mt-3 text-sm text-center leading-relaxed px-6">
                7-Day Ginger Shot
                <br />
                Daily Small Wellness Ritual
              </p>
              <div className="absolute inset-x-6 bottom-6 h-[1px] bg-amber-100/70" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== STORY ===== */}
      <AnimatedSection className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <p className="text-[11px] tracking-[0.35em] text-neutral-500 uppercase">
          STORY
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-neutral-900">
          「ちゃんと整えたい」と「続けられない」のあいだで。
        </h2>
        <div className="mt-4 space-y-4 text-sm md:text-base text-neutral-600 leading-relaxed">
          <p>
            サプリメントや健康食品はたくさんあるのに、
            結局はどれも続かなかった——。DoSee が見つめたのは、
            その「続かなさ」そのものです。
          </p>
          <p>
            忙しい日々のなかで、からだのことを後回しにしたくない。
            けれど、難しいことを毎日続ける余裕はない。
            DoSee は、そんな気持ちに寄り添うために生まれた、
            <span className="font-medium">“ショット系” のウェルネスライン</span>
            です。
          </p>
          <p>
            必要なものをぎゅっと凝縮しながらも、
            一気飲みして終わりではなく、
            「今日もひとつ、自分のために何かをしてあげられた」という
            小さな実感を残せる存在でありたいと考えています。
          </p>
        </div>
      </AnimatedSection>

      {/* ===== LINEUP (7-Day Ginger Shot) ===== */}
      <AnimatedSection className="max-w-6xl mx-auto px-6 pb-20 md:pb-24" delay={0.05}>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] tracking-[0.35em] text-neutral-500 uppercase">
              LINEUP
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-neutral-900">
              7-Day Ginger Shot — 一週間のリセット習慣。
            </h2>
            <p className="mt-2 text-sm text-neutral-600 max-w-xl">
              朝に一杯、または気持ちを切り替えたいタイミングで。
              からだの内側から、今日を前向きにスタートさせるための
              「7日分のショット」をイメージしたプロダクトです。
            </p>
          </div>
          <span className="inline-flex items-center rounded-full bg-neutral-900 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white">
            Coming soon
          </span>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-[3fr,2fr] items-start">
          {/* 左：説明カード */}
          <motion.article
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="rounded-3xl border border-neutral-100 bg-white/90 p-6 shadow-sm hover:shadow-md transition"
          >
            <p className="text-[11px] tracking-[0.3em] text-amber-600 uppercase">
              7-DAY GINGER SHOT
            </p>
            <h3 className="mt-3 text-lg font-semibold text-neutral-900">
              キュッと一杯で、からだと気分をオンにする。
            </h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              ジンジャーの温かさと、柑橘のすっきり感を組み合わせたショット。
              朝いちばんの目覚ましとして、または午後のリセットとして。
              糖分やカフェインに頼りすぎず、からだ本来のリズムをやさしく後押しします。
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-neutral-600">
              <li>・ 朝の一杯で、1日を前向きにスタートしたいとき</li>
              <li>・ コーヒーやエナジードリンクを減らしたいとき</li>
              <li>・ 食べ過ぎた日や、からだをリセットしたい一週間のはじまりに</li>
            </ul>
            <p className="mt-4 text-[11px] text-neutral-500">
              ※詳細な配合・フレーバーは現在開発中です。
            </p>
          </motion.article>

          {/* 右：小さな情報カード */}
          <div className="space-y-4 text-sm text-neutral-600">
            <div className="rounded-2xl border border-dashed border-amber-200 bg-amber-50/60 p-4">
              <p className="text-xs font-semibold text-amber-800 uppercase tracking-[0.2em]">
                CONCEPT
              </p>
              <p className="mt-2 text-sm text-neutral-700">
                「飲まなきゃいけない」ではなく、
                「飲んであげたい」と思える量と味わいを目指しています。
                がんばりすぎなくても、自分をケアできる選択肢として。
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white/80 p-4">
              <p className="text-xs font-semibold text-neutral-800 uppercase tracking-[0.2em]">
                STATUS
              </p>
              <p className="mt-2">
                7-Day Ginger Shot は現在、
                レシピ・フレーバー・ラインナップ構成を開発中です。
                リリース時期が決まり次第、このページと公式サイトでお知らせします。
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ===== RITUAL / HOW TO ENJOY（将来の飲み方ガイド） ===== */}
      <AnimatedSection className="border-t border-neutral-100 bg-neutral-50/60">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid gap-10 md:grid-cols-[3fr,2fr] items-center">
          <div>
            <p className="text-[11px] tracking-[0.35em] text-neutral-500 uppercase">
              FUTURE RITUAL
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-neutral-900">
              「今日をリセットする一杯」を、もっと手軽に。
            </h2>
            <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed">
              最終的な仕様は変更になる可能性がありますが、
              DoSee のジンジャーショットは、
              <span className="font-medium">“冷蔵庫から取り出して、そのまま一杯”</span>
              をイメージしています。
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-neutral-600">
              <li>1. 朝、歯磨きのあとにキュッと一杯。</li>
              <li>2. または午後のだるさをリセットしたいタイミングで。</li>
              <li>3. 一週間続けることで、からだの「軽さ」を実感できる設計を目指します。</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white/80 p-6 text-sm text-neutral-600">
            <p className="font-medium text-neutral-900">
              DoSee のショットは、「気合い」ではなく「習慣」で続けるためのもの。
            </p>
            <p className="mt-3">
              忙しくても、自分を気づかう「1アクション」だけは残しておきたい。
              そのための、一番ささやかで、一番続けやすい形を、
              これからも探し続けていきます。
            </p>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}