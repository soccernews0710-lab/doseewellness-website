// src/components/ProductLinesSection.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ProductDetailModal, {
  ProductDetail,
} from "@/components/ProductDetailModal";

// ---------- 詳細データ（モーダル用） ----------
const productDetails: ProductDetail[] = [
  {
    id: "matcha-latte",
    brand: "WellCha",
    name: "Matcha Latte",
    catch: "落ち着いた集中と、飲むスキンケアを一杯に。",
    description:
      "抹茶本来の香りとやさしい甘さで、こころを静かに整えながら、日々のコンディションと肌のケアもサポートするウェルネスラテです。忙しい日常でも無理なく続けられる、ほどよいコクと後味の軽さが特徴です。",
    effects: [
      "テアニンとカフェインのバランスで、静かな集中状態をサポート",
      "カテキンなどの抗酸化成分が、日々のコンディションケアに貢献",
      "ミルクと合わせて、満足感のある一杯で間食代わりにも",
    ],
    ingredients: [
      "有機抹茶パウダー（JAS認証）",
      "オーガニックシュガー",
      "植物性ミルクパウダー など",
    ],
    howTo:
      "お湯またはお好みのミルク 150〜200ml に対してパウダーを溶かし、よく混ぜてお召し上がりください。ホットでもアイスでも楽しめます。",
    shopUrl:
      "https://zkn8n1-dt.myshopify.com/products/matcha-latte",
  },
  {
    id: "hojicha-latte",
    brand: "WellCha",
    name: "Hojicha Latte",
    catch: "カフェイン控えめで、夜にもやさしい焙じ茶ラテ。",
    description:
      "香ばしい焙じ茶の香りをそのまま感じられる、やさしい甘さのラテ。カフェイン控えめなので、夜のリラックスタイムや寝る前の一杯にもおすすめです。",
    effects: [
      "焙じ茶の香ばしさで、気持ちをゆるめるリラックスタイムに",
      "カフェイン控えめで、夜でも飲みやすい",
      "ミルクと合わせることで、デザート感のある満足感をプラス",
    ],
    ingredients: [
      "焙じ茶パウダー",
      "オーガニックシュガー",
      "植物性ミルクパウダー など",
    ],
    howTo:
      "ホットの場合は、温めたミルク 150〜200ml にパウダーを溶かして。アイスラテにする場合は、少量のお湯でといた後、冷たいミルクと氷を加えてください。",
    shopUrl:
      "https://zkn8n1-dt.myshopify.com/products/hojicha-latte",
  },
  {
    id: "ginger-shot",
    brand: "DoSee",
    name: "7-Day Ginger Shot",
    catch: "1日を前向きにする、小さな一杯。",
    description:
      "ジンジャーのキレとシトラスの爽やかさを、毎日続けやすい1ショットに閉じ込めました。朝のスイッチや、ちょっと気持ちを切り替えたいときにぴったりのウェルネスショットです。",
    effects: [
      "ジンジャーの温かさで、からだの内側からポカポカをサポート",
      "シトラスとビタミンで、1日のスタートをすっきりと",
      "小さな1杯なので、忙しい日でも続けやすい",
    ],
    ingredients: [
      "ジンジャーパウダー",
      "シトラス系果汁パウダー",
      "ビタミンC など",
    ],
    howTo:
      "そのままショットとして飲むか、水やソーダで割ってお楽しみください。朝や運動前、気分を切り替えたいタイミングにおすすめです。",
    comingSoon: true,
    // shopUrl: undefined → Coming soon 表示
  },
];

// --------- 一覧カード用の軽いデータ（id で詳細と紐付け） ----------
const wellChaListItems = [
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    summary: "集中力とリラックスを両立する、抹茶ベースのウェルネスラテ。",
  },
  {
    id: "hojicha-latte",
    name: "Hojicha Latte",
    summary: "カフェイン控えめで、夜にもやさしい焙じ茶ラテ。",
  },
];

const doSeeListItems = [
  {
    id: "ginger-shot",
    name: "7-Day Ginger Shot",
    summary: "1日を前向きにする、小さな一杯。クリーンなジンジャーショット習慣。",
  },
];

export default function ProductLinesSection() {
  const [open, setOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState<ProductDetail | null>(null);

  const handleOpen = (id: string) => {
    const found = productDetails.find((p) => p.id === id) || null;
    setActiveProduct(found);
    setOpen(!!found);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveProduct(null);
  };

  return (
    <>
      <AnimatedSection
        id="product-lines"
        className="max-w-6xl mx-auto px-6 pb-24"
        delay={0.1}
      >
        {/* 見出し */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs tracking-[0.35em] text-neutral-500 uppercase">
              PRODUCT LINES
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-neutral-900">
              DoSee Wellness Lineup
            </h2>
            <p className="mt-2 text-sm text-neutral-600 max-w-xl">
              日本茶ベースの <span className="font-medium">WellCha</span> と、
              ショット系ウェルネス <span className="font-medium">DoSee</span>。
              忙しい日々でも続けやすい形で、こころ・からだのケアを届けます。
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-xs md:text-sm">
            <a
              href="https://zkn8n1-dt.myshopify.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-neutral-900 px-4 py-1.5 font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white transition"
            >
              Open WellCha Store
            </a>
            <span className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-1.5 text-neutral-400">
              DoSee Online Store — Coming soon
            </span>
          </div>
        </div>

        {/* 2つのブランドカード */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* WellCha カード */}
          <motion.section
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative overflow-hidden rounded-3xl border border-neutral-100 bg-white/80 p-6 shadow-sm hover:shadow-md transition"
          >
            {/* 上部の細いグラデーションバー */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-emerald-500 via-emerald-300 to-amber-300" />

            <p className="text-[11px] tracking-[0.32em] text-neutral-500 uppercase">
              WellCha
            </p>
            <h3 className="mt-3 text-lg font-semibold text-neutral-900">
              日本茶のやさしさで、毎日をしなやかに整える。
            </h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              抹茶とほうじ茶の自然なエネルギーで、忙しい日々に落ち着きと集中を。
            </p>

            {/* ブランドページへのリンク（必要なら後で別ページを作成） */}
            <a
              href="/brands/wellcha"
              className="mt-4 inline-flex items-center text-xs font-medium text-emerald-800 hover:text-emerald-900 hover:underline"
            >
              About WellCha →
            </a>

            <div className="mt-5 space-y-3">
              {wellChaListItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleOpen(item.id)}
                  className="group w-full text-left rounded-2xl border border-neutral-100 bg-neutral-50/60 px-4 py-3 text-sm hover:bg-white hover:shadow-sm hover:border-emerald-200 transition"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-medium text-neutral-900 group-hover:text-emerald-700">
                      {item.name}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 group-hover:text-emerald-500">
                      View details →
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-600">
                    {item.summary}
                  </p>
                </button>
              ))}
            </div>
          </motion.section>

          {/* DoSee カード */}
          <motion.section
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative overflow-hidden rounded-3xl border border-neutral-100 bg-white/80 p-6 shadow-sm hover:shadow-md transition"
          >
            {/* 上部の細いライン：ジンジャーっぽいオレンジ系 */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-amber-400 via-orange-300 to-rose-300" />

            <p className="text-[11px] tracking-[0.32em] text-neutral-500 uppercase">
              DoSee
            </p>
            <h3 className="mt-3 text-lg font-semibold text-neutral-900">
              1日を前向きにする、小さな一杯。
            </h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              DoSeeは、負担なく続けられるショット系ウェルネスライン。
              必要なときの一杯が、あなたのコンディションをやさしく整えます。
            </p>

            <a
              href="/brands/dosee"
              className="mt-4 inline-flex items-center text-xs font-medium text-neutral-800 hover:text-neutral-900 hover:underline"
            >
              About DoSee →
            </a>

            <div className="mt-5 space-y-3">
              {doSeeListItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleOpen(item.id)}
                  className="group w-full text-left rounded-2xl border border-dashed border-neutral-200 bg-neutral-50/60 px-4 py-3 text-sm hover:border-orange-200 hover:bg-white transition"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-medium text-neutral-900">
                      {item.name}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-neutral-900 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white group-hover:bg-neutral-800">
                      Coming soon
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-600">
                    {item.summary}
                  </p>
                </button>
              ))}
            </div>
          </motion.section>
        </div>
      </AnimatedSection>

      {/* 🔽 モーダル本体 */}
      <ProductDetailModal
        open={open}
        product={activeProduct}
        onClose={handleClose}
      />
    </>
  );
}