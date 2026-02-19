import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24 lg:pt-28 pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-h3 font-lato font-bold text-main mb-8">
            個人情報の取り扱い
          </h1>

          <div className="space-y-8 text-body font-noto text-main">
            {/* 前文 */}
            <section>
              <p className="leading-relaxed">
                当サイト（以下「本サイト」）では、お客様の個人情報の保護を重要な責務と考え、以下のプライバシーポリシー（以下「本ポリシー」）に従い、適切な取り扱いと保護に努めます。
              </p>
            </section>

            {/* 1. 収集する情報 */}
            <section>
              <h2 className="text-section-subtitle font-noto font-bold text-main mb-4">
                1. 収集する個人情報
              </h2>
              <p className="leading-relaxed mb-3">
                本サイトでは、お問い合わせフォームを通じて以下の情報を収集します：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>お名前</li>
                <li>メールアドレス</li>
                <li>会社名・屋号（任意）</li>
                <li>お問い合わせ内容</li>
              </ul>
            </section>

            {/* 2. 利用目的 */}
            <section>
              <h2 className="text-section-subtitle font-noto font-bold text-main mb-4">
                2. 個人情報の利用目的
              </h2>
              <p className="leading-relaxed mb-3">
                収集した個人情報は、以下の目的でのみ使用します：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>お問い合わせへの回答・対応</li>
                <li>サービスに関するご案内</li>
                <li>お見積もりの作成・提示</li>
                <li>無料相談の日程調整</li>
              </ul>
              <p className="leading-relaxed mt-3">
                ※上記以外の目的で使用することはありません。
              </p>
            </section>

            {/* 3. 第三者提供 */}
            <section>
              <h2 className="text-section-subtitle font-noto font-bold text-main mb-4">
                3. 第三者への提供
              </h2>
              <p className="leading-relaxed mb-3">
                本サイトでは、メール送信サービスとして「Resend」を使用しています。お問い合わせフォームから送信された情報は、Resendのサーバーを経由して送信されます。
              </p>
              <p className="leading-relaxed mb-3">
                Resendのプライバシーポリシー：
                <a
                  href="https://resend.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-red hover:underline ml-1"
                >
                  https://resend.com/legal/privacy-policy
                </a>
              </p>
              <p className="leading-relaxed">
                上記を除き、お客様の同意なく第三者に個人情報を提供することはありません。ただし、法令に基づく場合を除きます。
              </p>
            </section>

            {/* 4. 保管期間 */}
            <section>
              <h2 className="text-section-subtitle font-noto font-bold text-main mb-4">
                4. 個人情報の保管期間
              </h2>
              <p className="leading-relaxed">
                お問い合わせ内容への対応完了後、原則として2年間保管し、その後適切に削除いたします。
              </p>
            </section>

            {/* 5. 安全管理措置 */}
            <section>
              <h2 className="text-section-subtitle font-noto font-bold text-main mb-4">
                5. 安全管理措置
              </h2>
              <p className="leading-relaxed">
                お預かりした個人情報は、不正アクセス、紛失、破壊、改ざん、漏洩などを防止するため、適切なセキュリティ対策を実施します。
              </p>
            </section>

            {/* 6. 開示・訂正・削除 */}
            <section>
              <h2 className="text-section-subtitle font-noto font-bold text-main mb-4">
                6. 個人情報の開示・訂正・削除
              </h2>
              <p className="leading-relaxed">
                お客様ご本人から個人情報の開示、訂正、削除を求められた場合は、速やかに対応いたします。お問い合わせフォームよりご連絡ください。
              </p>
            </section>

            {/* 7. Cookie */}
            <section>
              <h2 className="text-section-subtitle font-noto font-bold text-main mb-4">
                7. Cookieの使用について
              </h2>
              <p className="leading-relaxed">
                本サイトでは、ユーザー体験の向上のためCookieを使用する場合があります。Cookieには個人を特定する情報は含まれません。
              </p>
            </section>

            {/* 8. 個人情報の取り扱いの変更 */}
            <section>
              <h2 className="text-section-subtitle font-noto font-bold text-main mb-4">
                8. 個人情報の取り扱いの変更
              </h2>
              <p className="leading-relaxed">
                本ポリシーの内容は、法令の変更や事業内容の変更に伴い、予告なく変更する場合があります。変更後の個人情報の取り扱いは、本ページに掲載した時点から効力を生じるものとします。
              </p>
            </section>

            {/* 9. お問い合わせ */}
            <section>
              <h2 className="text-section-subtitle font-noto font-bold text-main mb-4">
                9. お問い合わせ窓口
              </h2>
              <p className="leading-relaxed">
                個人情報の取り扱いに関するお問い合わせは、本サイトのお問い合わせフォームよりご連絡ください。
              </p>
            </section>

            {/* 制定日 */}
            <section className="pt-8 border-t border-gray-200">
              <p className="text-small text-main opacity-70">
                制定日：2026年2月19日
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
