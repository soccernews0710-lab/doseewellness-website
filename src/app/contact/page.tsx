export default function ContactPage() {
  return (
    <section className="section max-w-3xl">
      <p className="section-title-ja">CONTACT</p>
      <h1 className="section-title-en">Get in touch</h1>

      <p className="mt-4 text-sm leading-relaxed text-neutral-700">
        卸販売・コラボレーション・メディア掲載・OEM などのご相談は、
        下記フォームまたはメールにてお問い合わせください。
      </p>

      <div className="mt-6 rounded-2xl border border-black/5 bg-white/80 p-6 text-sm text-neutral-700">
        {/* ひとまずメールリンク。後でフォームサービスに置き換えも可能 */}
        <p className="font-medium">Email</p>
        <p className="mt-1">
          <a
            href="mailto:info@dosee-wellness.com"
            className="text-dw-forest underline underline-offset-4"
          >
            info@dosee-wellness.com
          </a>
        </p>
        <p className="mt-4 text-xs text-neutral-500">
          ※ 仮のメールアドレスです。実際の運用アドレスに差し替えてください。
        </p>
      </div>
    </section>
  );
}