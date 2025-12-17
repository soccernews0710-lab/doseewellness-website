// src/components/ProductDetailModal.tsx
"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type ProductDetail = {
  id: string;
  brand: "WellCha" | "DoSee";
  name: string;
  catch: string;
  description: string;
  effects: string[];      // 効果・ポイント 3つ程度
  ingredients: string[];  // 主な成分
  howTo?: string;         // 飲み方など
  shopUrl?: string;       // Shopify 商品ページ
  comingSoon?: boolean;
};

type Props = {
  open: boolean;
  product: ProductDetail | null;
  onClose: () => void;
};

export default function ProductDetailModal({ open, product, onClose }: Props) {
  // ESC で閉じる
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // 背景スクロールロック（お好みで）
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && product && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* 背景オーバーレイ */}
          <motion.div
            className="absolute inset-0 bg-black/35 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* モーダル本体 */}
          <motion.div
            className="relative z-10 w-full max-w-2xl rounded-3xl bg-white/95 shadow-2xl border border-neutral-100 px-6 py-6 md:px-8 md:py-7"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
          >
            {/* 閉じるボタン */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white/80 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 transition text-xs"
              aria-label="閉じる"
            >
              ✕
            </button>

            {/* ブランドタグ */}
            <p className="text-[11px] tracking-[0.28em] text-neutral-500 uppercase">
              {product.brand === "WellCha" ? "WellCha — Japanese Tea" : "DoSee — Ginger Shot"}
            </p>

            {/* タイトル */}
            <h2
              id="product-modal-title"
              className="mt-2 text-xl md:text-2xl font-semibold text-neutral-900"
            >
              {product.name}
            </h2>
            <p className="mt-1 text-sm font-medium text-neutral-700">
              {product.catch}
            </p>

            {/* レイアウト：左に説明、右にリスト */}
            <div className="mt-5 grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
              {/* 左：説明 */}
              <div className="space-y-3 text-sm text-neutral-700 leading-relaxed">
                <p>{product.description}</p>
                {product.howTo && (
                  <p className="text-neutral-600">
                    <span className="font-medium text-neutral-800">飲み方：</span>
                    {product.howTo}
                  </p>
                )}
              </div>

              {/* 右：効果・成分 */}
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-neutral-500 uppercase">
                    EFFECTS
                  </p>
                  <ul className="mt-2 space-y-1.5 text-neutral-700">
                    {product.effects.map((effect) => (
                      <li key={effect} className="flex gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-900" />
                        <span>{effect}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-neutral-500 uppercase">
                    INGREDIENTS
                  </p>
                  <ul className="mt-2 space-y-1.5 text-neutral-700">
                    {product.ingredients.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* フッター CTA */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              {product.shopUrl ? (
                <a
                  href={product.shopUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition"
                >
                  Shopify で商品を見る
                </a>
              ) : (
                <span className="inline-flex items-center rounded-full bg-neutral-100 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                  Coming soon
                </span>
              )}

              <p className="text-[11px] text-neutral-400">
                ※ 実際の栄養成分・表示は商品パッケージをご確認ください。
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}