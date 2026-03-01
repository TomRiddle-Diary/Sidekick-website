'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export interface ProjectDetails {
  name: string;
  url?: string;
  heroImage: string;
  overview: string;
  challenge?: string;
  target?: string;
  purpose?: string;
  design?: string;
  screenshots: string[];
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDetails | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景オーバーレイ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 z-50"
            onClick={onClose}
          />

          {/* モーダルコンテンツ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 bg-white rounded-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ヘッダー：プロジェクト名・URL・閉じるボタン */}
            <div className="flex justify-between items-center p-4 lg:p-6 border-b border-gray-200">
              <div className="flex flex-col gap-1">
                <h2 className="text-h4 lg:text-h3 font-lato font-bold text-main">
                  {project.name}
                </h2>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-small lg:text-body font-noto text-primary-red hover:underline"
                  >
                    {project.url}
                  </a>
                )}
              </div>
              <button
                onClick={onClose}
                className="text-main hover:text-primary-red transition-colors p-2 shrink-0"
                aria-label="閉じる"
              >
                <svg
                  className="w-6 h-6 lg:w-8 lg:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* スクロール可能なコンテンツエリア */}
            <div className="flex-1 overflow-y-auto">
              <div className="px-6 py-8 lg:px-12 lg:py-12 space-y-8 lg:space-y-12">
                {/* 1. 大きな写真（Hero画像） */}
                <div className="w-full h-[250px] md:h-[400px] lg:h-[500px] relative rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={project.heroImage}
                    alt={project.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* 2. 概要・こだわりなど */}
                <div className="space-y-6 lg:space-y-8">
                  {/* 概要 */}
                  <div>
                    <h3 className="text-h4 font-noto font-bold text-main mb-3">
                      概要
                    </h3>
                    <p className="text-body font-noto text-main leading-loose whitespace-pre-line">
                      {project.overview}
                    </p>
                  </div>

                  {/* お客様の課題 */}
                  {project.challenge && (
                    <div>
                      <h3 className="text-h4 font-noto font-bold text-main mb-3">
                        お客様の課題
                      </h3>
                      <p className="text-body font-noto text-main leading-loose whitespace-pre-line">
                        {project.challenge}
                      </p>
                    </div>
                  )}

                  {/* ターゲット */}
                  {project.target && (
                    <div>
                      <h3 className="text-h4 font-noto font-bold text-main mb-3">
                        ターゲット
                      </h3>
                      <p className="text-body font-noto text-main leading-loose whitespace-pre-line">
                        {project.target}
                      </p>
                    </div>
                  )}

                  {/* サイトの目的 */}
                  {project.purpose && (
                    <div>
                      <h3 className="text-h4 font-noto font-bold text-main mb-3">
                        サイトの目的
                      </h3>
                      <p className="text-body font-noto text-main leading-loose whitespace-pre-line">
                        {project.purpose}
                      </p>
                    </div>
                  )}

                  {/* デザイン */}
                  {project.design && (
                    <div>
                      <h3 className="text-h4 font-noto font-bold text-main mb-3">
                        デザイン
                      </h3>
                      <p className="text-body font-noto text-main leading-loose whitespace-pre-line">
                        {project.design}
                      </p>
                    </div>
                  )}
                </div>

                {/* 3. Webサイトの全体像 */}
                {project.screenshots.length > 0 && (
                  <div>
                    <h3 className="text-h4 font-noto font-bold text-main mb-6">
                      Webサイトの全体像
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.screenshots.map((screenshot, index) => (
                        <div key={index} className="w-full space-y-3">
                          <h4 className="text-body font-noto font-bold text-main">
                            {index === 0 ? 'デスクトップ' : 'スマホ'}
                          </h4>
                          <Image
                            src={screenshot}
                            alt={`${project.name} スクリーンショット ${index + 1}`}
                            width={1920}
                            height={1080}
                            className="w-full h-auto rounded-lg border border-gray-200"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
