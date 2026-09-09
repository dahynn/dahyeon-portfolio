import { PageSnap } from '../components/PageSnap';

const projects = [
  { number: '01', name: 'SAN', category: 'AI KNOWLEDGE', summary: '웹·그래프 확장 기반 AI 지식 관리', icon: '/assets/project-san-hd.png' },
  { number: '02', name: 'Roundy', category: 'SOCIAL', summary: '얼굴 인증·AI 마스킹 로테이션 미팅', icon: '/assets/project-roundy-hd.png' },
  { number: '03', name: 'CapSure', category: 'FINTECH', summary: '맞춤형 구독 보험', icon: '/assets/project-capsure-hd.png' },
  { number: '04', name: '다시 봄', category: 'HEALTHCARE', summary: 'AI 뇌졸중 간이 진단 앱', icon: '/assets/project-dasibom-hd.png' },
];

const activities = [
  { date: '2021.03–2025.08', title: '동국대학교', detail: '경영정보학과 · 융합소프트웨어' },
  { date: '2022.03–2022.12', title: '멋쟁이사자처럼 10기', detail: 'HTML · CSS · 자바스크립트 웹 프로젝트' },
  { date: '2023.03–2023.12', title: "IT 소모임장 'ProMIS'", detail: '신입생 대상 프로그래밍 스터디 기획 및 운영' },
  { date: '2023.03–2024.02', title: 'GDSC(Google Developer Student Clubs) 1기', detail: '앱 개발 프로젝트 · 팀 협업' },
  { date: '2024.09–2025.02', title: 'University of Lancashire', detail: '영국 교환학생 · 최우수 성적' },
  { date: '2025.03–2025.06', title: '구름톤 유니브 4기', detail: '개발 면접 · 자바스크립트 딥다이브 스터디' },
  { date: '2025.07–2026.06', title: '삼성청년SW·AI 아카데미 14기', detail: '자바 · 스프링 기반 백엔드 개발' },
  { date: '2025.08', title: '한화금융캠퍼스 15기', detail: '금융 실무 교육 · 현직자 멘토링' },
];
const awards = [
  { date: '2025', title: 'AICompS 2025 Best Poster Award', issuer: '한국정보처리학회' },
  { date: '2025', title: '2025년도 여름 종합설계 결과발표회 우수상', issuer: '동국대학교' },
];
const certificates = [
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
  { name: 'React', icon: 'https://cdn.simpleicons.org/react', level: 4 },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript', level: 4 },
];

export default function Home() {
  return (
    <main className="portfolio">
      <PageSnap />
      <nav className="page-navigation" aria-label="포트폴리오 페이지 이동">
        <a href="#introduction" title="프로필"><span>01</span><b>프로필</b></a>
        <a href="#journey" title="개발 여정"><span>02</span><b>개발 여정</b></a>
        <a href="#projects" title="Project Store"><span>03</span><b>Project Store</b></a>
      </nav>
      <section className="cover-page" data-page id="introduction" aria-labelledby="portfolio-title">
        <div className="profile-intro">
          <div className="photo-slot"><img src="/assets/profile.png" alt="유다현 프로필 사진" /></div>
          <p className="profile-name">유다현</p>
          <p className="profile-role">개발자</p>
          <section className="profile-contact" aria-labelledby="profile-contact-title">
            <h2 id="profile-contact-title">Profile</h2>
            <dl>
              <div><dt>이메일</dt><dd><a href="mailto:lyra0720@naver.com">lyra0720@naver.com</a></dd></div>
              <div><dt>깃허브</dt><dd><a href="https://github.com/dahynn" target="_blank" rel="noreferrer">github.com/dahynn</a></dd></div>
            </dl>
          </section>
        </div>
        <div className="profile-details">
          <h1 id="portfolio-title">고객의 <em>금융</em> 여정을<br /><em>책임</em>지는 개발자</h1>
          <section className="profile-values" aria-labelledby="profile-values-title">
            <p id="profile-values-title">Our Talent Philosophy</p>
            <div>
              <article>
                <img src="/assets/talent-discipline.png" alt="" aria-hidden="true" />
                <div><strong>Discipline</strong><span>철저한 자기규율</span></div>
              </article>
              <article>
                <img src="/assets/talent-creative-thinking.png" alt="" aria-hidden="true" />
                <div><strong>Creative Thinking</strong><span>창의적 문제 해결</span></div>
              </article>
              <article>
                <img src="/assets/talent-sense-of-purpose.png" alt="" aria-hidden="true" />
                <div><strong>Sense of Purpose</strong><span>뚜렷한 목적의식</span></div>
              </article>
            </div>
          </section>
          <div className="cover-secondary">
            <aside className="journey-awards" aria-labelledby="cover-awards-title">
              <h3 id="cover-awards-title">Awards &amp; Certificates</h3>
              {awards.map((award) => (
                <p className="certificate-item" key={award.title}>
                  <span>{award.date}</span>
                  <strong>{award.title}<small>{award.issuer}</small></strong>
                </p>
              ))}
              {certificates.map((certificate) => (
                <p className="certificate-item" key={certificate.title}>
                  <span>{certificate.date}</span>
                  <strong>{certificate.title}<small>{certificate.issuer}</small></strong>
                </p>
              ))}
            </aside>
            <section className="journey-skills" aria-labelledby="cover-skills-title">
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
        <img className="hanwha-logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Hanwha_logo.svg" alt="한화" />
        <p className="page-number">01</p>
      </section>

      <section className="journey-page" data-page id="journey" aria-labelledby="journey-title">
        <img className="hanwha-logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Hanwha_logo.svg" alt="한화" />
        <p className="page-number">02</p>
        <div className="journey-heading">
          <p className="eyebrow">개발의 흐름</p>
          <h2 id="journey-title">개발자로서의 여정</h2>
        </div>
        <div className="journey-map">
          <ol className="journey-track">
            {activities.map((activity) => (
              <li className="journey-item" key={activity.title} tabIndex={0} aria-label={`${activity.title} 활동 강조`}>
              <span
                className={`journey-dot ${
                  activity.title === '동국대학교' || activity.title === 'University of Lancashire' ? 'education-node'
                    : activity.title === '삼성청년SW·AI 아카데미 14기' ? 'ssafy-node'
                      : activity.title === '한화금융캠퍼스 15기' ? 'hanwha-node'
                        : 'default-node'
                }`}
                aria-hidden="true"
              />
              <p className="journey-date">{activity.date}</p>
              <div className="journey-copy">
                <strong className={
                  activity.title === '동국대학교' ? 'dongguk-university'
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
          <img className="journey-hanwha-end" src="/assets/hanwha-symbol.png" alt="한화 심볼" />
        </div>
      </section>

      <section className="project-index-page" data-page id="projects" aria-labelledby="projects-title">
        <img className="hanwha-logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Hanwha_logo.svg" alt="한화" />
        <p className="page-number">03</p>
        <div className="index-heading">
          <p className="eyebrow">PROJECTS</p>
          <h2 id="projects-title">Project Store</h2>
          <p>프로젝트를 골라 기록을 살펴보세요.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.name}>
              <div className="project-card-top"><span>{project.category}</span><b>{project.number}</b></div>
              <img className={`project-icon ${project.name === 'CapSure' ? 'project-icon-capsure' : ''}`} src={project.icon} alt={`${project.name} 앱 아이콘`} />
              <div className="project-copy"><strong>{project.name}</strong><p>{project.summary}</p></div>
              <span className="project-action" aria-hidden="true"><small>아래 페이지로 이동</small><b>클릭!</b></span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
