'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import CtaButton from './CtaButton';

export default function Contact() {
  const [formData, setFormData] = useState({
    inquiryType: 'consultation',
    name: '',
    email: '',
    company: '',
    message: '',
    // 無料相談用
    consultationTopics: [] as string[],
    consultationMethod: '',
    // 制作依頼用
    plan: '',
    budget: '',
    maintenancePlan: '',
    deadline: '',
    priority: '',
    expectations: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [agreeToPrivacyPolicy, setAgreeToPrivacyPolicy] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'お問い合わせを送信しました！自動返信メールをご確認ください。',
        });
        // フォームをリセット
        setFormData({
          inquiryType: 'consultation',
          name: '',
          email: '',
          company: '',
          message: '',
          consultationTopics: [],
          consultationMethod: '',
          plan: '',
          budget: '',
          maintenancePlan: '',
          deadline: '',
          priority: '',
          expectations: '',
        });
        setAgreeToPrivacyPolicy(false);
      } else {
        setSubmitStatus({
          type: 'error',
          message: '送信に失敗しました。もう一度お試しください。',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'エラーが発生しました。もう一度お試しください。',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (topic: string) => {
    setFormData({
      ...formData,
      consultationTopics: formData.consultationTopics.includes(topic)
        ? formData.consultationTopics.filter((t) => t !== topic)
        : [...formData.consultationTopics, topic],
    });
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-light-pink py-8 lg:py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-h1 font-lato font-bold text-white text-start mb-6 lg:mb-8"
        >
          CONTACT
        </motion.h2>

        {/* White Background Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl bg-white px-6 py-8 lg:px-12 lg:py-10 max-w-3xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex flex-col items-start gap-4 mb-8 lg:mb-10">
            <p className="text-section-subtitle font-noto font-semibold text-main">
              まずは気軽にお話ししましょう
            </p>
            <p className="text-body font-noto font-medium text-main opacity-85">
              契約を前提としない相談も大歓迎です。「Webサイトの作り方を教えてほしい」「自分でやるか依頼するか迷っている」「まだ何も決まっていない」そんな方も大歓迎です。
            </p>
          </div>

          {/* Contact Form */}
          <div className="w-full max-w-3xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* お問い合わせ種別 */}
              <div>
                <label htmlFor="inquiryType" className="block text-body font-noto font-semibold text-main mb-2">
                  お問い合わせ種別 <span className="text-primary-red">*</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                >
                  <option value="consultation">無料相談（30分程度）</option>
                  <option value="project">制作依頼・お見積もり</option>
                  <option value="other">その他</option>
                </select>
              </div>

              {/* お名前 */}
              <div>
                <label htmlFor="name" className="block text-body font-noto font-semibold text-main mb-2">
                  お名前 <span className="text-primary-red">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                  placeholder="山田太郎"
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label htmlFor="email" className="block text-body font-noto font-semibold text-main mb-2">
                  メールアドレス <span className="text-primary-red">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                  placeholder="example@email.com"
                />
              </div>

              {/* 会社名・屋号 */}
              <div>
                <label htmlFor="company" className="block text-body font-noto font-semibold text-main mb-2">
                  会社名・屋号
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                  placeholder="株式会社〇〇 / 個人事業主"
                />
              </div>

              {/* 無料相談の追加フィールド */}
              {formData.inquiryType === 'consultation' && (
                <>
                  {/* ご相談内容のジャンル */}
                  <div>
                    <label className="block text-body font-noto font-semibold text-main mb-2">
                      ご相談内容のジャンル <span className="text-body font-noto font-medium opacity-70">(複数選択可)</span>
                    </label>
                    <div className="flex flex-col gap-2">
                      {[
                        'Webサイトが必要かどうか迷っている',
                        'Webサイトを作る効果やメリットが知りたい',
                        '集客効果（SEO）について知りたい',
                        '自分で作るか、依頼するか迷っている',
                        '予算やコストの相場が知りたい',
                        'デザインや機能について相談したい',
                        'その他',
                      ].map((topic) => (
                        <label key={topic} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            value={topic}
                            checked={formData.consultationTopics.includes(topic)}
                            onChange={() => handleCheckboxChange(topic)}
                            className="w-4 h-4 text-primary-red focus:ring-primary-red rounded"
                          />
                          <span className="text-body font-noto font-medium text-main">{topic}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 希望する相談方法 */}
                  <div>
                    <label htmlFor="consultationMethod" className="block text-body font-noto font-semibold text-main mb-2">
                      希望する相談方法
                    </label>
                    <select
                      id="consultationMethod"
                      name="consultationMethod"
                      value={formData.consultationMethod}
                      onChange={handleChange}
                      className="w-full px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                    >
                      <option value="">選択してください</option>
                      <option value="online">オンライン（Google Meet）</option>
                      <option value="offline">オフライン（長崎県佐世保市）</option>
                      <option value="email">メールで相談</option>
                    </select>
                  </div>
                </>
              )}

              {/* 制作依頼の追加フィールド */}
              {formData.inquiryType === 'project' && (
                <>
                  {/* Webサイト制作にかけられる予算感 */}
                  <div>
                    <label htmlFor="budget" className="block text-body font-noto font-semibold text-main mb-2">
                      Webサイト制作にかけられる予算感
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                    >
                      <option value="">選択してください</option>
                      <option value="under-30k">3万円以下</option>
                      <option value="30k-50k">3万円〜5万円</option>
                      <option value="50k-100k">5万円〜10万円</option>
                      <option value="100k-200k">10万円〜20万円</option>
                      <option value="over-200k">20万円以上</option>
                      <option value="undecided">未定・相談したい</option>
                    </select>
                  </div>

                  {/* 保守運用プラン */}
                  <div>
                    <label htmlFor="maintenancePlan" className="block text-body font-noto font-semibold text-main mb-2">
                      月額での保守・運用サポートプランがあれば欲しいと思いますか？
                    </label>
                    <select
                      id="maintenancePlan"
                      name="maintenancePlan"
                      value={formData.maintenancePlan}
                      onChange={handleChange}
                      className="w-full px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                    >
                      <option value="">選択してください</option>
                      <option value="interested">はい</option>
                      <option value="not-interested">いいえ</option>
                      <option value="maybe">詳しく聞いてから決めたい</option>
                    </select>
                  </div>

                  {/* 納期 */}
                  <div>
                    <label htmlFor="deadline" className="block text-body font-noto font-semibold text-main mb-2">
                      納期
                    </label>
                    <select
                      id="deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className="w-full px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                    >
                      <option value="">選択してください</option>
                      <option value="flexible">特になし・急いでない</option>
                      <option value="1month">1ヶ月以内</option>
                      <option value="2weeks">2週間以内（お急ぎ）</option>
                    </select>
                  </div>

                  {/* Webサイトを作る目的 */}
                  <div>
                    <label htmlFor="priority" className="block text-body font-noto font-semibold text-main mb-2">
                      Webサイトを作る目的
                    </label>
                    <select
                      id="priority"
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      className="w-full px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                    >
                      <option value="">選択してください</option>
                      <option value="branding">ブランディング（名刺代わり）</option>
                      <option value="lead-generation">集客・顧客獲得</option>
                      <option value="information">情報発信</option>
                      <option value="sales">商品・サービスの販売</option>
                      <option value="recruitment">採用・求人</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  {/* 期待していること */}
                  <div>
                    <label htmlFor="expectations" className="block text-body font-noto font-semibold text-main mb-2">
                      自分に対して最も期待していること
                    </label>
                    <select
                      id="expectations"
                      name="expectations"
                      value={formData.expectations}
                      onChange={handleChange}
                      className="w-full px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                    >
                      <option value="">選択してください</option>
                      <option value="design">デザイン</option>
                      <option value="functionality">機能性・拡張性</option>
                      <option value="speed">納品までの速さ</option>
                      <option value="cost">コストパフォーマンス</option>
                      <option value="support">サポート対応</option>
                    </select>
                  </div>
                </>
              )}

              {/* メッセージ */}
              <div>
                <label htmlFor="message" className="block text-body font-noto font-semibold text-main mb-2">
                  メッセージ <span className="text-primary-red">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all resize-none"
                  placeholder="お気軽にご相談内容をお書きください"
                />
              </div>

              {/* 個人情報の取り扱い同意 */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreeToPrivacyPolicy"
                  checked={agreeToPrivacyPolicy}
                  onChange={(e) => setAgreeToPrivacyPolicy(e.target.checked)}
                  className="mt-1 w-4 h-4 text-primary-red focus:ring-primary-red rounded cursor-pointer"
                  required
                />
                <label htmlFor="agreeToPrivacyPolicy" className="text-body font-noto text-main cursor-pointer">
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-red hover:underline font-semibold"
                  >
                    個人情報の取り扱い
                  </a>
                  について同意の上送信します。 <span className="text-primary-red">*</span>
                </label>
              </div>

              {/* 送信状態メッセージ */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  <p className="text-body font-noto font-medium">{submitStatus.message}</p>
                </div>
              )}

              <div className="flex justify-center mt-2">
                <div className="transform scale-110 lg:scale-125">
                  <CtaButton
                    size="large"
                    type="submit"
                    disabled={isSubmitting || !agreeToPrivacyPolicy}
                  >
                    {isSubmitting ? '送信中...' : '送信する'}
                  </CtaButton>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
