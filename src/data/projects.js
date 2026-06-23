const projects = [
  {
    id: 1,
    name: '웹 서비스 통계 대시보드 플랫폼',
    description:
      '웹사이트에 트래킹 스크립트를 삽입하면 방문자 수, 체류시간, 유입 경로 등을 실시간으로 수집하고 시각화하는 대시보드 플랫폼입니다.',
    tech: ['React', 'Spring Boot', 'MariaDB', 'Docker'],
    github: 'https://github.com/Aqua8/Statistics',
    deploy: import.meta.env.VITE_STATS_URL,
  },
  {
    id: 2,
    name: '포트폴리오 웹',
    description:
        '박희우 포트폴리오 웹 사이트.',
    tech: ['React'],
    github: 'https://github.com/Aqua8/Portfolio',
    deploy: import.meta.env.VITE_PORTFOLIO_URL,
  },
  {
    id: 3,
    name: '맛/집 - 맛집 지도 리뷰 서비스',
    description:
      '카카오 지도 기반으로 맛집을 검색·북마크하고, 별점과 사진이 담긴 리뷰를 작성·공유하는 서비스입니다.',
    tech: ['React', 'Spring Boot', 'MariaDB', 'Kakao Maps', 'GCS', 'Docker'],
    github: 'https://github.com/Aqua8/MatJip',
    deploy: import.meta.env.VITE_MATJIP_URL,
  },
]

export default projects
