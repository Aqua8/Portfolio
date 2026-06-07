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
                  대규모 SI 프로젝트를 거치며 꼼꼼함과 책임감을 갖춘 5년차 풀스택 개발자입니다.
                  초기에는 놓치는 부분도 있었지만, 수천 대 장비의 실시간 데이터를 다루는 환경에서
                  작은 실수가 큰 장애로 이어질 수 있다는 것을 몸소 경험하며 세밀함을 키워왔습니다.
                </p>
                <p className="text-gray-600 leading-relaxed mt-3">
                  다양한 프로젝트에서 많은 업무를 동시에 맡으면서도 새로운 기술과 도메인을 빠르게 습득해
                  적응해왔으며, 맡은 업무는 기간 내에 반드시 마무리하고 지시를 기다리기보다 필요한 일을
                  먼저 찾아 움직이는 편입니다. React, Node.js, Spring을 주력으로 프론트엔드부터 백엔드,
                  DB 설계, AI 모델 개발까지 전 과정을 경험했으며, 현재는 Claude AI를 활용해 꾸준히
                  자기개발을 이어가고 있습니다.
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
