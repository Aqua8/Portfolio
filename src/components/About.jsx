import { motion } from 'framer-motion'
import useScrollFadeIn from '../hooks/useScrollFadeIn'

const techStack = [
  { category: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Spring Boot', 'Java', 'Node.js'] },
  { category: 'Database', items: ['MySQL', 'PostgreSQL', 'Redis'] },
  { category: 'Infra', items: ['AWS', 'Docker', 'Git'] },
]

export default function About() {
  const { ref, ...motionProps } = useScrollFadeIn()

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div ref={ref} {...motionProps}>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">About</h2>
            <div className="w-12 h-1 bg-brand mx-auto mt-3 rounded-full" />
          </div>

          <div className="mt-14 grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 space-y-10">
              <div>
                <h3 className="text-xs font-semibold text-brand uppercase tracking-widest mb-4">소개</h3>
                <p className="text-gray-600 leading-relaxed">
                  사용자 경험을 중심으로 생각하는 풀스택 개발자입니다.
                  백엔드 API 설계부터 프론트엔드 UI 구현, 클라우드 배포까지
                  서비스의 전 과정을 이해하고 개발합니다.
                </p>
                <p className="text-gray-600 leading-relaxed mt-3">
                  데이터 기반의 의사결정을 중요하게 생각하며, 직접 개발한
                  통계 대시보드 플랫폼을 통해 서비스를 운영하고 개선하는 경험을 쌓고 있습니다.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-brand uppercase tracking-widest mb-4">학력</h3>
                <div className="space-y-1 text-gray-600">
                  <p className="font-semibold text-gray-800">[학교명] · [학과]</p>
                  <p className="text-sm text-gray-400">20XX.03 — 20XX.02</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-xs font-semibold text-brand uppercase tracking-widest mb-4">기술 스택</h3>
              <div className="space-y-5">
                {techStack.map(({ category, items }) => (
                  <div key={category}>
                    <p className="text-xs text-gray-400 mb-2">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-white text-gray-600 border border-gray-200 rounded-full text-sm hover:border-brand hover:text-brand transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
