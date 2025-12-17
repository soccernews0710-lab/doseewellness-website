// src/components/WellchaInfoAccordion.tsx
"use client";

import Accordion, { AccordionItem } from "@/components/Accordion";

export default function WellchaInfoAccordion() {
  const items: AccordionItem[] = [
    {
      id: "how-to",
      eyebrow: "HOW TO DRINK",
      label: "おいしい抹茶ラテ / ほうじ茶ラテのつくり方",
      content: (
        <div className="space-y-3">
          <p>
            バリスタが行う基本のひと手間を取り入れて、
            ご自宅でもカフェクオリティの一杯に。
          </p>
          <ol className="list-decimal pl-5 space-y-1.5">
            <li>
              カップにラテ用粉末 <strong>20g</strong> を入れ、
              <strong>お湯 20ml</strong> を注ぎ、ペースト状になるまでよく溶かします。
            </li>
            <li>
              <strong>ミルク 100ml</strong>{" "}
              （牛乳・オーツミルク・豆乳など）を加え、やさしく混ぜます。
            </li>
            <li>
              アイスの場合は氷を加え、シェイカーを使うと、驚くほどなめらかな口あたりに。
            </li>
          </ol>

          <div className="pt-1 space-y-1.5 text-xs text-neutral-600">
            <p className="font-medium text-neutral-800">おすすめアレンジ</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>朝：ミルク＋氷で「目覚めのアイスラテ」</li>
              <li>仕事前：ミルク濃いめで「集中したいときの一杯」</li>
              <li>夜：ホットミルクで「深くやさしいナイトラテ」</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "ingredients",
      eyebrow: "INGREDIENTS",
      label: "原材料について",
      content: (
        <div className="space-y-3">
          <p>抹茶ラテ / ほうじ茶ラテの原材料は、とてもシンプルです。</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>静岡県産 有機抹茶・有機ほうじ茶</li>
            <li>鹿児島県産 有機さとうきび糖</li>
          </ul>
          <p>
            香料・保存料・着色料は一切使用していません。
            茶葉本来の香りと、さとうきび由来のやさしい甘さだけで仕上げています。
          </p>
        </div>
      ),
    },
    {
      id: "organic",
      eyebrow: "ORGANIC",
      label: "オーガニック（有機）へのこだわり",
      content: (
        <div className="space-y-3">
          <p>
            DoSee Wellness の茶葉は、<strong>有機JAS認証</strong> を取得した農園で栽培されています。
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>化学農薬や化学肥料に頼らない、土壌づくりからの栽培</li>
            <li>茶葉本来の香りと旨みを引き出す、ていねいな加工工程</li>
            <li>毎日飲み続けても、身体に負担を感じにくい設計</li>
          </ul>
          <p>
            「身体に入れるものは、できるだけクリーンに」という想いから、
            原料選びと加工方法の両方でオーガニックにこだわっています。
          </p>
        </div>
      ),
    },
    {
      id: "faq",
      eyebrow: "FAQ",
      label: "よくあるご質問",
      content: (
        <div className="space-y-4 text-sm">
          <div>
            <p className="font-medium text-neutral-900">
              Q1. 1日にどのくらい飲んでも大丈夫ですか？
            </p>
            <p className="mt-1 text-neutral-700">
              目安としては 1〜2杯程度をおすすめしています。
              カフェインに敏感な方は、まずは1杯から様子を見ながらお楽しみください。
            </p>
          </div>

          <div>
            <p className="font-medium text-neutral-900">
              Q2. ミルク以外（オーツミルク・豆乳など）でも作れますか？
            </p>
            <p className="mt-1 text-neutral-700">
              はい、作れます。牛乳はもちろん、オーツミルク・アーモンドミルク・豆乳など、
              お好みのミルク代替でもおいしくお飲みいただけます。
            </p>
            <ul className="mt-1 list-disc pl-5 text-xs text-neutral-600 space-y-0.5">
              <li>すっきり：水＋少量のミルク</li>
              <li>とろり：ミルク100％ or 植物性ミルク100％</li>
            </ul>
            <p className="mt-1 text-xs text-neutral-600">
              好みに合わせて濃さ・コクを調整してみてください。
            </p>
          </div>

          <div>
            <p className="font-medium text-neutral-900">
              Q3. 甘さはどのくらいですか？
            </p>
            <p className="mt-1 text-neutral-700">
              市販のカフェラテやボトルドリンクよりも控えめで、
              「甘すぎないけれど、物足りなさは感じない」バランスを目指しています。
              より甘さを抑えたい方は、ミルクや氷で少し薄めて調整いただけます。
            </p>
          </div>

          <div>
            <p className="font-medium text-neutral-900">
              Q4. 夜に飲んでも眠れなくなりませんか？
            </p>
            <p className="mt-1 text-neutral-700">
              抹茶・ほうじ茶にはカフェインが含まれますが、
              テアニンによるリラックス作用も期待されています。
              カフェインに敏感な方は、ほうじ茶ラテを選んでいただくか、
              夜は少なめの量からお試しください。
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
        作り方・原材料・オーガニック・FAQ
      </h2>
      <p className="mb-6 text-sm text-neutral-600">
        抹茶ラテ・ほうじ茶ラテを、毎日気持ちよく続けていただくための情報をまとめました。
      </p>
      <Accordion items={items} />
    </section>
  );
}