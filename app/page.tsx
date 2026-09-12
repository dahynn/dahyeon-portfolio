/* oxlint-disable next/no-img-element -- 원본 GIF 애니메이션과 고정 비율 포트폴리오 자산을 그대로 표시합니다. */
import { PageSnap } from '../components/PageSnap';
import { ArrowDown, CheckCircle2, Mail, UsersRound } from 'lucide-react';
import { ProjectCaseStudies } from '../components/ProjectCaseStudies';
import { PersonalStrengths } from '../components/PersonalStrengths';
import './case-studies.css';

const projects = [
  {
    name: 'CapSure', summary: '필요한 보장을 고르고 월 단위로 구독하는 보험 시뮬레이터', icon: '/assets/project-capsure-hd.png', href: '#capsure',
    stack: [{ name: 'Java 21', icon: '/assets/tech-icons/java.png' }, { name: 'Spring Boot', icon: '/assets/tech-icons/spring.png' }, { name: 'PostgreSQL', icon: '/assets/tech-icons/postgresql.svg' }, { name: 'React', icon: '/assets/tech-icons/react.svg' }],
    team: '5명', teamDetail: 'BE 3, FE 1, INFRA 1', role: ['상품 선택과 가입 흐름', '결제 결과와 구독 확정', '반응형 화면 구현'],
  },
  {
    name: 'Roundy', summary: '성향 퀴즈와 얼굴 인증으로 시작하는 온라인 로테이션 미팅', icon: '/assets/project-roundy-hd.png', href: '#roundy',
    stack: [{ name: 'Java 21', icon: '/assets/tech-icons/java.png' }, { name: 'Spring Boot', icon: '/assets/tech-icons/spring.png' }, { name: 'Redis', icon: '/assets/tech-icons/redis.png' }, { name: 'React', icon: '/assets/tech-icons/react.svg' }],
    team: '팀 프로젝트', teamDetail: '매칭과 인증 기능 담당', role: ['성향 퀴즈 흐름 연결', '얼굴 인증과 방 접근', '마스킹 미팅 화면 구현'],
  },
  {
    name: 'SAN', summary: '크롬 확장 프로그램으로 저장한 자료를 다시 찾고 정리하는 서비스', icon: '/assets/project-san-hd.png', href: '#san',
    stack: [{ name: 'Java 21', icon: '/assets/tech-icons/java.png' }, { name: 'Spring Boot', icon: '/assets/tech-icons/spring.png' }, { name: 'PostgreSQL', icon: '/assets/tech-icons/postgresql.svg' }, { name: 'React', icon: '/assets/tech-icons/react.svg' }],
    team: '7명', teamDetail: 'BE 3, FE 1', role: ['서버 검색 기능 구현', 'AI 입력 보호 설계', '작업 상태 관리'],
  },
];

const activities = [
  { date: '2021.03–2025.08', title: '동국대학교', detail: '경영정보학과 · 융합소프트웨어' },
  { date: '2022.03–2022.12', title: '멋쟁이사자처럼 10기', detail: 'HTML · CSS · 자바스크립트 웹 프로젝트' },
  {
    date: '2023.01–2023.02',
    title: '부스트코스 코칭스터디 9기',
    detail: '인공지능 기초 다지기 · 6주 코칭스터디 수료',
    education: true,
    dateDetail: '참여: 2023.01.12–2023.02.23 · 수료: 2023.03.02',
  },
  { date: '2023.03–2023.12', title: "IT 소모임장 'ProMIS'", detail: '신입생 대상 프로그래밍 스터디 기획 및 운영' },
  { date: '2023.03–2024.02', title: 'GDSC(Google Developer Student Clubs) 1기', detail: '앱 개발 프로젝트 · 팀 협업' },
  { date: '2024.09–2025.02', title: 'University of Lancashire', detail: '영국 교환학생 · 최우수 성적' },
  { date: '2025.03–2025.06', title: '구름톤 유니브 4기', detail: '개발자 커뮤니케이션' },
  { date: '2025.07–2026.06', title: '삼성청년SW·AI 아카데미 14기', detail: '자바 · 스프링 기반 백엔드 개발' },
  { date: '2025.08', title: '한화금융캠퍼스 15기', detail: '금융 실무 교육 · 현직자 멘토링' },
];
const awards = [
  { date: '2025.11', awardedOn: '2025-11', title: 'AICompS 2025 Best Poster Award', issuer: '한국정보처리학회' },
  { date: '2025.06', awardedOn: '2025-06-10', title: '2025년도 여름 종합설계 결과발표회 우수상', issuer: '동국대학교' },
];
const certificates = [
  { date: '2026.09', acquiredOn: '2026-09-11', title: '정보처리기사', issuer: '한국산업인력공단' },
  { date: '2026.08', title: 'ADsP', issuer: '한국데이터산업진흥원' },
  { date: '2025.12', title: 'SQL 개발자(SQLD)', issuer: '한국데이터산업진흥원' },
  { date: '2021.09', title: '컴퓨터활용능력 2급', issuer: '대한상공회의소' },
  { date: '2020.02', title: 'ITQ 한글엑셀 A등급', issuer: '한국생산성본부' },
];
const skills = [
  { name: 'Java', icon: '/assets/tech-icons/java.png', level: 4 },
  { name: 'Spring Boot', icon: '/assets/tech-icons/spring.png', level: 4 },
  { name: 'Spring Security', icon: '/assets/tech-icons/spring.png', level: 3 },
  { name: 'Redis', icon: '/assets/tech-icons/redis.png', level: 3 },
  { name: 'SQL', icon: '/assets/tech-icons/sql.svg', level: 3 },
  { name: 'React', icon: '/assets/tech-icons/react.svg', level: 4 },
  { name: 'TypeScript', icon: '/assets/tech-icons/typescript.svg', level: 4 },
];

function BrandLogo() {
  return (
    <span className="hanwha-logo" aria-label="한화생명">
      <img src="/assets/hanwha-life-wordmark-transparent.png" alt="" aria-hidden="true" />
    </span>
  );
}

export default function Home() {
  return (
    <main className="portfolio">
      <PageSnap />
      <nav className="page-navigation" aria-label="포트폴리오 페이지 이동">
        <a href="#introduction" title="프로필"><span>01</span><b>프로필</b></a>
        <a href="#journey" title="개발 여정"><span>02</span><b>개발 여정</b></a>
        <a href="#projects" title="Project Store"><span>03</span><b>Project Store</b></a>
        <a href="#capsure" title="CapSure"><span>04</span><b>CapSure</b></a>
        <a href="#roundy" title="Roundy"><span>06</span><b>Roundy</b></a>
        <a href="#san" title="SAN"><span>08</span><b>SAN</b></a>
      </nav>
      <section className="cover-page" data-page id="introduction" aria-labelledby="portfolio-title">
        <div className="profile-intro">
          <div className="photo-slot"><img src="/assets/profile.png" alt="유다현 프로필 사진" /></div>
          <p className="profile-name">유다현</p>
          <p className="profile-role">개발자</p>
          <section className="profile-contact" aria-labelledby="profile-contact-title">
            <h2 id="profile-contact-title">Contact</h2>
            <dl>
              <div><dt>이메일</dt><dd><a href="mailto:lyra0720@naver.com"><Mail size={14} strokeWidth={1.9} aria-hidden="true" /><span>lyra0720@naver.com</span></a></dd></div>
              <div><dt>깃허브</dt><dd><a href="https://github.com/dahynn" target="_blank" rel="noreferrer"><img src="https://cdn.simpleicons.org/github/33363d" alt="" aria-hidden="true" width="14" height="14" /><span>github.com/dahynn</span></a></dd></div>
            </dl>
          </section>
        </div>
        <div className="profile-details">
          <h1 id="portfolio-title"><span>고객의 <em>금융 여정</em>을</span><span className="cover-title-follow"><em>끝까지</em> 따라가는 개발자</span></h1>
          <PersonalStrengths />
          <div className="cover-secondary">
            <aside className="cover-info-panel journey-awards" aria-labelledby="cover-awards-title">
              <h3 id="cover-awards-title">Awards &amp; Certificates</h3>
              {awards.map((award) => (
                <p className="certificate-item" key={award.title}>
                  <span title={`${award.awardedOn} 수상`}>
                    <time dateTime={award.awardedOn}>{award.date}</time>
                  </span>
                  <strong>{award.title}<small>{award.issuer}</small></strong>
                </p>
              ))}
              {certificates.map((certificate) => (
                <p className="certificate-item" key={certificate.title}>
                  <span title={certificate.acquiredOn ? `${certificate.acquiredOn} 취득` : undefined}>
                    <time dateTime={certificate.acquiredOn ?? certificate.date.replace('.', '-')}>{certificate.date}</time>
                  </span>
                  <strong>{certificate.title}<small>{certificate.issuer}</small></strong>
                </p>
              ))}
            </aside>
            <section className="cover-info-panel journey-skills" aria-labelledby="cover-skills-title">
              <h3 id="cover-skills-title">Tech Stack</h3>
              {skills.map((skill) => (
                <p className="journey-skill" key={skill.name}>
                  <img src={skill.icon} alt="" aria-hidden="true" />
                  <span>{skill.name}</span>
                  <span className="journey-skill-meter" aria-label={`숙련도 ${skill.level} / 5`}>
                    {Array.from({ length: 5 }, (_, index) => <i className={index < skill.level ? 'active' : ''} key={index} />)}
                  </span>
                </p>
              ))}
            </section>
          </div>
        </div>
        <BrandLogo />
        <p className="page-number">01</p>
        <a className="cover-next" href="#journey" aria-label="개발자 여정으로 이동"><span>SCROLL</span><ArrowDown size={16} strokeWidth={2} aria-hidden="true" /></a>
      </section>

      <section className="journey-page" data-page id="journey" aria-labelledby="journey-title">
        <BrandLogo />
        <p className="page-number">02</p>
        <div className="journey-heading">
          <p className="eyebrow">개발의 흐름</p>
          <h2 id="journey-title">개발자로서의 여정</h2>
        </div>
        <div className="journey-map">
          <ol className="journey-track">
            {activities.map((activity) => (
              <li className="journey-item" key={activity.title}>
              <button className="journey-trigger" type="button" aria-label={`${activity.title} 활동 강조`} title={activity.dateDetail} />
              <span
                className={`journey-dot ${
                  activity.education || activity.title === '동국대학교' || activity.title === 'University of Lancashire' ? 'education-node'
                    : activity.title === '삼성청년SW·AI 아카데미 14기' ? 'ssafy-node'
                      : activity.title === '한화금융캠퍼스 15기' ? 'hanwha-node'
                        : 'default-node'
                }`}
                aria-hidden="true"
              />
              <p className="journey-date">{activity.date}</p>
              <div className="journey-copy">
                <strong className={
                  activity.education ? 'education-study'
                    : activity.title === '동국대학교' ? 'dongguk-university'
                    : activity.title === 'University of Lancashire' ? 'exchange-study'
                      : activity.title === '한화금융캠퍼스 15기' ? 'hanwha-campus'
                        : activity.title === '삼성청년SW·AI 아카데미 14기' ? 'ssafy-campus'
                          : undefined
                }>{activity.title}</strong>
                <p>{activity.detail}</p>
              </div>
              </li>
            ))}
          </ol>
          <div className="journey-destination">
            <img src="/assets/hanwha-life-wordmark-transparent.png" alt="한화생명" width="980" height="360" />
            <p>쌓아온 경험을,<br /><strong>한화생명에서 이어가겠습니다.</strong></p>
          </div>
        </div>
      </section>

      <section className="project-index-page project-store" data-page id="projects" aria-labelledby="projects-title">
        <BrandLogo />
        <p className="page-number">03</p>
        <div className="index-heading">
          <p className="store-kicker">Selected work</p>
          <h2 id="projects-title">Project Store</h2>
          <p>프로젝트를 선택하면 아래에서 문제를 풀어낸 과정을 볼 수 있습니다.</p>
        </div>
        <ul className="store-list">
          {projects.map((project) => (
            <li className="store-item" key={project.name}>
              <div className="store-project-intro">
                <span className="store-number" aria-hidden="true">{String(projects.indexOf(project) + 1).padStart(2, '0')}</span>
                <img className={`store-icon ${project.name === 'CapSure' ? 'project-icon-capsure' : ''}`} src={project.icon} alt="" width="112" height="112" />
                <div className="store-copy"><h3>{project.name}</h3><p>{project.summary}</p></div>
              </div>
              <div className="store-tech" aria-label={`${project.name} 기술 스택`}>
                <p>기술 스택</p>
                <ul>{project.stack.map((tech) => <li key={tech.name}><img src={tech.icon} alt="" aria-hidden="true" />{tech.name}</li>)}</ul>
              </div>
              <div className="store-team" aria-label={`${project.name} 팀 구성`}>
                <p>팀 구성</p>
                <strong><UsersRound size={18} strokeWidth={1.8} aria-hidden="true" />{project.team}</strong>
                <span>{project.teamDetail}</span>
              </div>
              <div className="store-role" aria-label={`${project.name} 담당 범위`}>
                <p>담당 범위</p>
                <ul>{project.role.map((item) => <li key={item}><CheckCircle2 size={13} strokeWidth={2.1} aria-hidden="true" />{item}</li>)}</ul>
              </div>
              <a className="store-scroll" href={project.href} aria-label={`${project.name} 설명으로 아래로 이동`}>
                프로젝트 과정 보기 <ArrowDown size={16} strokeWidth={2} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <ProjectCaseStudies />
    </main>
  );
}
