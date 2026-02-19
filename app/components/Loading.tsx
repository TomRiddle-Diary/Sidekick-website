'use client';

import { motion } from 'framer-motion';

interface LoadingProps {
  onComplete?: () => void;
}

export default function Loading({ onComplete }: LoadingProps = {}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* ローディングアニメーション - Hero SVGベース */}
        <div className="relative w-full max-w-md px-8">
          <svg
            viewBox="0 0 460 450"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            {/* Business Circle - Left */}
            <motion.g
              opacity="0.8"
              style={{ mixBlendMode: 'multiply' }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.1, 1],
                opacity: [0, 0.9, 0.8]
              }}
              transition={{
                duration: 1,
                times: [0, 0.6, 1],
                ease: "easeOut"
              }}
            >
              <motion.circle
                cx="150"
                cy="300"
                r="120"
                fill="#D81E5B"
                animate={{
                  scale: [1, 1.03, 1]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.g>

            {/* Engineering Circle - Top */}
            <motion.g
              opacity="0.8"
              style={{ mixBlendMode: 'multiply' }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.1, 1],
                opacity: [0, 0.9, 0.8]
              }}
              transition={{
                duration: 1,
                delay: 0.25,
                times: [0, 0.6, 1],
                ease: "easeOut"
              }}
            >
              <motion.circle
                cx="230"
                cy="150"
                r="120"
                fill="#A31621"
                animate={{
                  scale: [1, 1.03, 1]
                }}
                transition={{
                  duration: 2.5,
                  delay: 0.25,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.g>

            {/* Design Circle - Right */}
            <motion.g
              opacity="0.8"
              style={{ mixBlendMode: 'multiply' }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.1, 1],
                opacity: [0, 0.9, 0.8]
              }}
              transition={{
                duration: 1,
                delay: 0.5,
                times: [0, 0.6, 1],
                ease: "easeOut"
              }}
            >
              <motion.circle
                cx="310"
                cy="300"
                r="120"
                fill="#FF6B6B"
                animate={{
                  scale: [1, 1.03, 1]
                }}
                transition={{
                  duration: 2.5,
                  delay: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.g>
          </svg>
        </div>

        {/* メッセージ */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <h2 className="text-h4 font-lato font-bold text-main">
            Loading...
          </h2>
        </motion.div>

        {/* ドット */}
        <motion.div
          className="flex gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.7 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: i === 0 ? '#D81E5B' : i === 1 ? '#A31621' : '#FF6B6B' }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

