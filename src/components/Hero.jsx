import { motion } from 'framer-motion'
import { FiGithub, FiMail } from 'react-icons/fi'

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay },
  }),
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.p
          className="text-brand font-semibold text-base tracking-wide mb-3"
          custom={0}
          variants={item}
          initial="hidden"
          animate="visible"
        >
          안녕하세요,
        </motion.p>

        <motion.h1
          className="text-5xl md:text-6xl font-bold text-gray-800 mb-4"
          custom={0.1}
          variants={item}
          initial="hidden"
          animate="visible"
        >
          박희우입니다.
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 font-medium mb-6"
          custom={0.2}
          variants={item}
          initial="hidden"
          animate="visible"
        >
          Fullstack Developer
        </motion.p>

        <motion.p
          className="text-gray-500 mb-10 max-w-sm mx-auto leading-relaxed"
          custom={0.3}
          variants={item}
          initial="hidden"
          animate="visible"
        >
          백엔드부터 프론트엔드까지,<br />
          사용자 경험을 고민하며 개발합니다.
        </motion.p>

        <motion.div
          className="flex gap-3 justify-center flex-wrap"
          custom={0.4}
          variants={item}
          initial="hidden"
          animate="visible"
        >
          <a
            href="https://github.com/Aqua8"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 bg-brand text-white rounded-full font-medium hover:bg-brand-hover transition-colors shadow-sm"
          >
            <FiGithub size={17} />
            GitHub
          </a>
          <a
            href="mailto:huiwoo99@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3 border-2 border-brand text-brand rounded-full font-medium hover:bg-brand hover:text-white transition-colors"
          >
            <FiMail size={17} />
            Email
          </a>
        </motion.div>
      </div>
    </section>
  )
}
