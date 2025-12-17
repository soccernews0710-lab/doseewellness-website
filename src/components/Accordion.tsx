// src/components/Accordion.tsx
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type AccordionItem = {
  id: string;
  label: string;          // 見出し（例：HOW TO DRINK）
  eyebrow?: string;       // 小さいラベル（任意）
  content: React.ReactNode; // 中身は自由（p, ul, div なんでもOK）
};

type Props = {
  items: AccordionItem[];
  className?: string;
};

export default function Accordion({ items, className = "" }: Props) {
  const [openId, setOpenId] = useState<string | null>(
    items[0]?.id ?? null // デフォルトで1つ目を開いておく
  );

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`divide-y divide-neutral-200 rounded-3xl border border-neutral-200 bg-white/90 ${className}`}>
      {items.map((item) => {
        const isOpen = item.id === openId;

        return (
          <div key={item.id} className="overflow-hidden">
            {/* ヘッダー行（クリックエリア） */}
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-4.5 text-left hover:bg-neutral-50/80 transition"
            >
              <div>
                {item.eyebrow && (
                  <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-400">
                    {item.eyebrow}
                  </p>
                )}
                <p className="mt-0.5 text-sm md:text-base font-medium text-neutral-900">
                  {item.label}
                </p>
              </div>

              {/* ＋／− アイコン（アニメーション） */}
              <motion.span
                className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 text-xs text-neutral-600 bg-white"
                initial={false}
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.18 }}
              >
                +
              </motion.span>
            </button>

            {/* コンテンツ部分 */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  <div className="px-5 pb-4 pt-0 md:px-6 md:pb-5 text-sm text-neutral-700 leading-relaxed bg-neutral-50/60">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}