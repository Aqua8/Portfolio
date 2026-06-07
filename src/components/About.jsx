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
                <h3 className="text-xs font-semibold text-brand uppercase tracking-widest mb-4">경력</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-800">주식회사 에스티엔인포텍 · 주임 연구원</p>
                    <p className="text-sm text-gray-400">2021.07 — 2025.09</p>
                  </div>
                  <div className="pl-4 border-l-2 border-brand/20 space-y-6">
                    <div>
                      <p className="text-sm font-semibold text-gray-700">국방 광대역 통합망 (M-BcN)</p>
                      <p className="text-xs text-gray-400 mb-2">2023.01 — 2025.08</p>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">
                        전국 약 2,000개 부대를 연결하는 약 1만 대 장비 데이터를 수집·분석하여
                        실시간 장애를 탐지하고 관리하는 국방 통합 관제 시스템 개발
                      </p>
                      <ul className="space-y-1.5 text-sm text-gray-600">
                        {[
                          'DB 및 웹 서버 초기 세팅·설치부터 서비스 배포·유지보수 전 과정 담당',
                          '전체 관제 도메인 개발 및 데이터 모델링 주도',
                          '쿼리 튜닝 및 인덱스 재설계로 DB 조회 성능 평균 70% 개선',
                          '트래픽 데이터를 분석해 이상 징후를 예측하는 AI 모델 개발 및 배포',
                          '협력사와 API 연동 및 개발 생산성·유지보수성 개선',
                          '오프라인 환경에 최적화된 서버 세팅 및 배포 환경 구성',
                        ].map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-brand shrink-0">·</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {['React', 'Java', 'Spring Framework', 'Python', 'MyBatis', 'Tibero', 'Git'].map((t) => (
                          <span key={t} className="px-2 py-0.5 bg-brand/10 text-brand rounded text-xs font-medium">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">KT AiON</p>
                      <p className="text-xs text-gray-400 mb-2">2021.08 — 2022.01</p>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">
                        KT 네트워크 관제 솔루션 SI 개발
                      </p>
                      <ul className="space-y-1.5 text-sm text-gray-600">
                        {[
                          'AI 모델 등록·수정·삭제를 관리하는 모델 관리 페이지 개발',
                          '실시간 트래픽 현황을 모니터링·분석하는 트래픽 관제 페이지 개발',
                        ].map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-brand shrink-0">·</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {['React', 'Node.js', 'MySQL', 'SVN', 'Git'].map((t) => (
                          <span key={t} className="px-2 py-0.5 bg-brand/10 text-brand rounded text-xs font-medium">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">독자 솔루션</p>
                      <p className="text-xs text-gray-400 mb-2">2022.01 — 2022.08</p>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">
                        윈도우 종속적인 ASP & MS SQL 기반 솔루션을 Node.js & MariaDB 환경으로
                        전환하는 마이그레이션 프로젝트
                      </p>
                      <ul className="space-y-1.5 text-sm text-gray-600">
                        {[
                          'ASP 기반 성능 관리·보고서 관리·환경설정 페이지를 Node.js로 마이그레이션 및 고도화, 서버 환경 제약 해소',
                          'MS SQL → MariaDB 마이그레이션 후 쿼리 튜닝·인덱스 작업으로 성능 개선',
                          '오프라인 환경에 최적화된 서버 세팅 및 배포 환경 구성',
                        ].map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-brand shrink-0">·</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {['Node.js', 'jQuery', 'MariaDB', 'Python', 'SVN'].map((t) => (
                          <span key={t} className="px-2 py-0.5 bg-brand/10 text-brand rounded text-xs font-medium">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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
