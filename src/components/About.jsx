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
    <section id="about" className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div ref={ref} {...motionProps}>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">About</h2>
            <div className="w-12 h-1 bg-brand mx-auto mt-3 rounded-full" />
          </div>

          <div className="mt-8 md:mt-14 grid md:grid-cols-5 gap-8 md:gap-12">
            <div className="md:col-span-3 space-y-10">
              <div>
                <h3 className="text-xs font-semibold text-brand uppercase tracking-widest mb-4">소개</h3>
                <p className="text-gray-600 leading-relaxed">
                  백엔드부터 프론트엔드, 인프라까지 서비스 전 과정을 직접 다루는 풀스택 개발자입니다.
                  기능 구현에 그치지 않고 실제로 배포하고 운영하며 개선하는 경험을 중요하게 생각합니다.
                </p>
                <p className="text-gray-600 leading-relaxed mt-3">
                  데이터를 기반으로 의사결정하는 것을 좋아해 웹 서비스 통계 대시보드 플랫폼을 직접 개발했고,
                  이를 통해 방문자 데이터를 수집하고 서비스를 개선하는 사이클을 경험하고 있습니다.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-brand uppercase tracking-widest mb-4">학력</h3>
                <div className="space-y-4">
                  <div className="space-y-0.5">
                    <p className="font-semibold text-gray-800">학점은행제 · 컴퓨터공학과 (학사)</p>
                    <p className="text-sm text-gray-400">2022.01 — 2024.02</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="font-semibold text-gray-800">한국폴리텍Ⅱ대학 인천캠퍼스 · 컴퓨정보과 (전문학사)</p>
                    <p className="text-sm text-gray-400">2018.02 — 2022.03</p>
                  </div>
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
