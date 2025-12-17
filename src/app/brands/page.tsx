export default function BrandsPage() {
  return (
    <section className="section">
      <p className="section-title-ja">BRANDS</p>
      <h1 className="section-title-en">Brands under DoSee Wellness</h1>

      <div className="mt-8 space-y-10">
        <BrandBlock
          title="WellCha"
          subtitle="Organic Matcha & Hojicha Latte"
          body={[
            "WellCha は、抹茶とほうじ茶をベースにしたラテ専用ブランドです。",
            "ミルクと合わせるだけで、カフェクオリティの一杯が自宅で簡単に完成します。",
          ]}
        />
        <BrandBlock
          title="7-Day Ginger Boost"
          subtitle="Powdered Ginger Shot"
          body={[
            "ジンジャー・シトラス・ターメリック・ビタミンCなどをブレンドした、7日間のリセット習慣のためのショットドリンクです。",
            "お湯や水に溶かすだけで、キリッとした目覚めと身体の温まりをサポートします。",
          ]}
        />
      </div>
    </section>
  );
}

function BrandBlock({
  title,
  subtitle,
  body,
}: {
  title: string;
  subtitle?: string;
  body: string[];
}) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white/80 p-6">
      <h2 className="text-xl font-serif tracking-wide text-dw-forest">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-500">
          {subtitle}
        </p>
      )}
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-700">
        {body.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
    </div>
  );
}