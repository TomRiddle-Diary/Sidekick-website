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
    existingSite: '',
    pageCount: '',
    maintenancePlan: '',
    deadline: '',
    priority: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理は後で実装
    console.log('Form submitted:', formData);
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
                        '事業の構想・アイデア相談',
                        'Webサイトの必要性の相談',
                        '自作方法の相談',
                        '予算・費用感の相談',
                        'デザイン・機能の相談',
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
                  {/* 希望プラン */}
                  <div>
                    <label htmlFor="plan" className="block text-body font-noto font-semibold text-main mb-2">
                      希望プラン
                    </label>
                    <select
                      id="plan"
                      name="plan"
                      value={formData.plan}
                      onChange={handleChange}
                      className="w-full px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                    >
                      <option value="">選択してください</option>
                      <option value="starter">Starter Plan（55,000円）</option>
                      <option value="student">学生応援プラン（33,000円）</option>
                      <option value="undecided">未定</option>
                      <option value="custom">その他（カスタム）</option>
                    </select>
                  </div>

                  {/* 既存サイトの有無 */}
                  <div>
                    <label htmlFor="existingSite" className="block text-body font-noto font-semibold text-main mb-2">
                      既存サイトの有無
                    </label>
                    <select
                      id="existingSite"
                      name="existingSite"
                      value={formData.existingSite}
                      onChange={handleChange}
                      className="w-full px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                    >
                      <option value="">選択してください</option>
                      <option value="new">新規作成</option>
                      <option value="renewal">リニューアル</option>
                    </select>
                  </div>

                  {/* 希望するページ数 */}
                  <div>
                    <label htmlFor="pageCount" className="block text-body font-noto font-semibold text-main mb-2">
                      希望するページ数
                    </label>
                    <select
                      id="pageCount"
                      name="pageCount"
                      value={formData.pageCount}
                      onChange={handleChange}
                      className="w-full px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                    >
                      <option value="">選択してください</option>
                      <option value="1">1ページ</option>
                      <option value="3-5">3-5ページ</option>
                      <option value="5+">5ページ以上</option>
                      <option value="undecided">未定</option>
                    </select>
                  </div>

                  {/* 保守運用プラン */}
                  <div>
                    <label htmlFor="maintenancePlan" className="block text-body font-noto font-semibold text-main mb-2">
                      月額での保守運用・支援の希望
                    </label>
                    <select
                      id="maintenancePlan"
                      name="maintenancePlan"
                      value={formData.maintenancePlan}
                      onChange={handleChange}
                      className="w-full px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                    >
                      <option value="">選択してください</option>
                      <option value="interested">希望する</option>
                      <option value="not-interested">希望しない</option>
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

                  {/* 特に重視すること */}
                  <div>
                    <label htmlFor="priority" className="block text-body font-noto font-semibold text-main mb-2">
                      特に重視すること
                    </label>
                    <select
                      id="priority"
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      className="w-full px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all"
                    >
                      <option value="">選択してください</option>
                      <option value="design">デザイン性</option>
                      <option value="seo">SEO対策</option>
                      <option value="mobile">スマホ対応</option>
                      <option value="easy-update">更新しやすさ</option>
                      <option value="budget">予算重視</option>
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

              <div className="flex justify-center mt-2">
                <div className="transform scale-110 lg:scale-125">
                  <CtaButton size="large">送信する</CtaButton>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
