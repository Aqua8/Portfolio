import { motion } from 'framer-motion'
import { FiGithub, FiMail } from 'react-icons/fi'
import useScrollFadeIn from '../hooks/useScrollFadeIn'

export default function Contact() {
  const { ref, ...motionProps } = useScrollFadeIn()

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <motion.div ref={ref} {...motionProps}>
          <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
          <div className="w-12 h-1 bg-brand mx-auto mt-3 rounded-full" />

          <p className="mt-8 text-gray-500 leading-relaxed">
            새로운 기회나 협업에 항상 열려 있습니다.<br />
            언제든지 편하게 연락 주세요.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:huiwoo99@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand text-white rounded-full font-medium hover:bg-brand-hover transition-colors shadow-sm"
            >
              <FiMail size={17} />
              huiwoo99@gmail.com
            </a>
            <a
              href="https://github.com/Aqua8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-gray-200 text-gray-600 rounded-full font-medium hover:border-brand hover:text-brand transition-colors"
            >
              <FiGithub size={17} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
