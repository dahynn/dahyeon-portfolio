import { PageSnap } from '../components/PageSnap';

const projects = [
  { number: '01', id: 'capsure', name: 'CapSure' },
  { number: '02', id: 'san', name: 'SAN' },
  { number: '03', id: 'roundy', name: 'Roundy' },
];

const activities = [
  { date: '2025.08', title: '한화금융캠퍼스 4기', detail: '금융 실무 교육 · 현직자 멘토링' },
  { date: '2025.07–2026.06', title: '삼성청년SW·AI 아카데미', detail: '자바 · 스프링 기반 백엔드 개발' },
  { date: '2025.03–2025.06', title: '구름톤 유니브 4기', detail: '개발 면접 · 자바스크립트 딥다이브 스터디' },
  { date: '2023.03–2024.02', title: 'GDSC(Google Developer Student Clubs) 1기', detail: '앱 개발 프로젝트 · 팀 협업' },
  { date: '2023.03–2023.12', title: "IT 소모임장 'ProMIS'", detail: '약 40명 신입생 대상 프로그래밍 스터디 기획 및 운영' },
  { date: '2022.03–2022.12', title: '멋쟁이사자처럼 10기', detail: 'HTML · CSS · 자바스크립트 웹 프로젝트' },
];

const awards = ['AICompS 포스터상', '종합설계 결과발표회 우수상'];
const skills = [
  { name: '자바', icon: '/assets/tech-icons/java.png', level: 4 },
  { name: '스프링 부트', icon: '/assets/tech-icons/spring.png', level: 4 },
  { name: '스프링 시큐리티', icon: '/assets/tech-icons/spring.png', level: 3 },
  { name: '레디스', icon: '/assets/tech-icons/redis.png', level: 3 },
  { name: '리액트', icon: 'https://cdn.simpleicons.org/react', level: 4 },
  { name: '타입스크립트', icon: 'https://cdn.simpleicons.org/typescript', level: 4 },
];

export default function Home() {
  return (
    <main className="portfolio">
      <PageSnap />
      <section className="cover-page" data-page id="introduction" aria-labelledby="portfolio-title">
        <div className="profile-intro">
          <p className="profile-kicker">끝까지 따라가는</p>
          <h1 id="portfolio-title">백엔드 개발자</h1>
          <div className="photo-slot" aria-label="프로필 사진이 들어갈 자리">사진</div>
          <p className="profile-name">유다현</p>
          <p className="profile-role">백엔드 개발자</p>
          <section className="profile-contact" aria-labelledby="profile-contact-title">
            <h2 id="profile-contact-title">프로필</h2>
            <dl>
              <div><dt>이메일</dt><dd><a href="mailto:lyra0720@naver.com">lyra0720@naver.com</a></dd></div>
              <div><dt>깃허브</dt><dd><a href="https://github.com/dahynn" target="_blank" rel="noreferrer">github.com/dahynn</a></dd></div>
            </dl>
          </section>
        </div>
        <div className="profile-details">
          <div className="profile-main">
          <section className="profile-section" aria-labelledby="education-title">
            <h2 id="education-title">학력</h2>
            <div className="profile-item">
              <p className="profile-date">2021.03–2025.08</p>
              <div><strong>동국대학교</strong><p>경영정보학과 · 융합소프트웨어</p></div>
            </div>
            <div className="profile-item">
              <p className="profile-date">2024.09–2025.02</p>
              <div><strong>University of Lancashire</strong><p>영국 교환학생</p></div>
            </div>
          </section>
          <section className="profile-section" aria-labelledby="activities-title">
            <h2 id="activities-title">활동</h2>
            {activities.map((activity) => (
              <div className="profile-item" key={activity.title}>
                <p className="profile-date">{activity.date}</p>
                <div><strong>{activity.title}</strong><p>{activity.detail}</p></div>
              </div>
            ))}
          </section>
          </div>
          <div className="profile-side">
            <section className="profile-section" aria-labelledby="awards-title">
              <h2 id="awards-title">수상</h2>
              {awards.map((award) => <p className="award-item" key={award}>2025 <strong>{award}</strong></p>)}
            </section>
            <section className="profile-section skill-section" aria-labelledby="skills-title">
              <h2 id="skills-title">기술</h2>
              {skills.map((skill) => (
                <p className="skill-item" key={skill.name}>
                  <img src={skill.icon} alt="" aria-hidden="true" />
                  <span>{skill.name}</span>
                  <span className="skill-meter" aria-label={`숙련도 ${skill.level} / 5`}>
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

      <section className="project-index-page" data-page id="projects" aria-labelledby="projects-title">
        <p className="page-number">02</p>
        <div className="index-heading">
          <p className="eyebrow">프로젝트</p>
          <h2 id="projects-title">프로젝트별 기록</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <a className="project-row" href={'#' + project.id} key={project.id}>
              <span>{project.number}</span>
              <strong>{project.name}</strong>
              <i aria-hidden="true">↘</i>
            </a>
          ))}
        </div>
      </section>

      {projects.map((project) => (
        <section className="case-page" data-page id={project.id} key={project.id} aria-labelledby={project.id + '-title'}>
          <p className="page-number">{project.number}</p>
          <div>
            <p className="eyebrow">프로젝트</p>
            <h2 id={project.id + '-title'}>{project.name}</h2>
            <p>프로젝트 내용을 정리하고 있습니다.</p>
          </div>
        </section>
      ))}
    </main>
  );
}
