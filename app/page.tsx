/* oxlint-disable next/no-img-element -- 원본 GIF 애니메이션과 고정 비율 포트폴리오 자산을 그대로 표시합니다. */
import { PageSnap } from '../components/PageSnap';

const projects = [
  { number: '01', name: 'CapSure', category: 'INSURTECH', summary: '가입부터 지급·유지까지 연결한 보험 프로세스', icon: '/assets/project-capsure-hd.png', href: '#capsure' },
  { number: '02', name: 'Roundy', category: 'SOCIAL', summary: '얼굴 인증 후, 시간이 지나며 마스킹이 풀리는 미팅', icon: '/assets/project-roundy-hd.png', href: '#roundy' },
  { number: '03', name: 'SAN', category: 'AI KNOWLEDGE', summary: '웹 자료를 지식 카드와 복습으로 연결한 서비스', icon: '/assets/project-san-hd.png', href: '#san' },
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
        <BrandLogo />
        <p className="page-number">01</p>
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
              <button className="journey-trigger" type="button" aria-label={`${activity.title} 활동 강조`} />
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
        <BrandLogo />
        <p className="page-number">03</p>
        <div className="index-heading">
          <p className="eyebrow">PROJECTS</p>
          <h2 id="projects-title">Project Store</h2>
          <p>프로젝트를 골라 기록을 살펴보세요.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-row ${project.href ? 'is-available' : 'is-coming'}`} key={project.name}>
              <div className="project-card-top"><span>{project.category}</span><b>{project.number}</b></div>
              <img className={`project-icon ${project.name === 'CapSure' ? 'project-icon-capsure' : ''}`} src={project.icon} alt={`${project.name} 앱 아이콘`} />
              <div className="project-copy"><strong>{project.name}</strong><p>{project.summary}</p></div>
              {project.href ? (
                <a className="project-action" href={project.href} aria-label={`${project.name} 상세 보기`}><small>프로젝트 상세</small><b>보기</b></a>
              ) : (
                <span className="project-action" aria-hidden="true"><small>상세 준비 중</small><b>곧 공개</b></span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="capsure-overview" data-page id="capsure" aria-labelledby="capsure-title">
        <BrandLogo />
        <p className="page-number">04</p>
        <div className="capsure-intro">
          <p className="capsure-context">암보험 프로세스 시뮬레이터</p>
          <div className="capsure-brand"><img src="/assets/project-capsure-hd.png" alt="" /><strong>CapSure</strong></div>
          <h2 id="capsure-title">보험은 큰 손실을 함께 나누는<br /><em>경제적 안전망</em>입니다.</h2>
          <p className="capsure-lede">공시 데이터 탐색에서 약관·청약·인수심사·초회 보험료·증권·보험금 청구와 지급, 계약 유지까지 연결한 가상 암보험 프로세스 시뮬레이터입니다.</p>
          <dl className="capsure-meta">
            <div><dt>Period</dt><dd>2026.02–09</dd></div>
            <div><dt>Role</dt><dd>FE Lead · Backend · DB</dd></div>
            <div><dt>Team</dt><dd>5명 · BE 3 / FE 1 / INFRA 1</dd></div>
          </dl>
          <ul className="capsure-stack" aria-label="CapSure 기술 스택">
            <li>Spring Boot</li><li>PostgreSQL</li><li>Redis</li><li>React</li><li>TypeScript</li>
          </ul>
        </div>
        <div className="capsure-gallery" aria-label="CapSure 주요 화면">
          <figure className="capsure-phone capsure-phone-search"><img src="/assets/capsure-search.gif" alt="예산과 보장을 선택하는 CapSure 화면" /></figure>
          <figure className="capsure-phone capsure-phone-payment"><img src="/assets/capsure-payment.gif" alt="보험료와 결제 정보를 확인하는 CapSure 화면" /></figure>
          <div className="capsure-proof-card">
            <strong>고객 화면과 보험 운영을<br />한 흐름으로 연결했습니다.</strong>
            <p>상품 탐색에서 계약 유지까지 상태와 금융 기록이 끊기지 않도록 구현했습니다.</p>
          </div>
        </div>
      </section>

      <section className="capsure-detail" data-page id="capsure-detail" aria-labelledby="capsure-detail-title">
        <BrandLogo />
        <p className="page-number">05</p>
        <div className="capsure-detail-heading">
          <h2 id="capsure-detail-title">가입부터 지급·유지까지,<br /><em>보험 업무를 연결</em>했습니다.</h2>
        </div>
        <ol className="insurance-flow" aria-label="CapSure 보험 업무 흐름">
          <li><span>01</span><strong>상품·약관</strong><small>공시 데이터 정규화</small></li>
          <li><span>02</span><strong>청약·인수</strong><small>고지와 심사 상태 분리</small></li>
          <li><span>03</span><strong>초회 납입</strong><small>멱등 결제와 결과 대사</small></li>
          <li><span>04</span><strong>증권 발행</strong><small>가입 당시 조건 보존</small></li>
          <li><span>05</span><strong>청구·지급</strong><small>근거가 남는 지급심사</small></li>
          <li><span>06</span><strong>계약 유지</strong><small>수납·미납·복구 운영</small></li>
        </ol>
        <div className="capsure-evidence-grid">
          <article>
            <h3>공시 데이터 정규화</h3>
            <strong><b>35·21개</b> 원천 컬럼<br />→ 45개 공통 스키마</strong>
            <p>파일 형식을 판별하고 누락값을 보정한 뒤, 검증을 통과한 데이터만 적재하도록 배치를 구성했습니다.</p>
            <small>Spring Batch · PostgreSQL · Checkpoint</small>
          </article>
          <article className="capsure-metric-card">
            <h3>대용량 미납 배치</h3>
            <strong><b>10,000</b>건 · 중복 0건</strong>
            <p>두 작업자가 같은 계약을 잡지 않도록 행 잠금과 SKIP LOCKED를 적용했습니다.</p>
            <small>처리 중앙값 13.9초 → 7.6초</small>
          </article>
          <article>
            <h3>토스페이먼츠 테스트 결제</h3>
            <strong>결제 승인 뒤<br /><b>PAID · ACTIVE</b> 확인</strong>
            <p>서버 주문번호와 금액을 다시 대조하고, 타임아웃은 미확정 상태로 남겨 조회와 대사로 복구하게 했습니다.</p>
            <small>Test Payment · Idempotency Key · Webhook Inbox</small>
          </article>
          <figure className="capsure-operations-shot">
            <img src="/assets/capsure-operations.png" alt="보험료 미납과 계약 효력을 점검하는 CapSure 운영 화면" />
            <figcaption>고객 화면 뒤의 수납·미납·계약 효력까지 운영자가 추적하고 복구할 수 있게 했습니다.</figcaption>
          </figure>
        </div>
      </section>

      <section className="project-overview roundy-overview" data-page id="roundy" aria-labelledby="roundy-title">
        <BrandLogo />
        <p className="page-number">06</p>
        <div className="project-case-intro">
          <p className="project-case-context">얼굴 인증 · 마스킹 기반 로테이션 미팅</p>
          <div className="project-case-brand"><img src="/assets/project-roundy-hd.png" alt="" /><strong>Roundy</strong></div>
          <h2 id="roundy-title">얼굴 인증으로 신뢰를 더하고,<br /><em>마스킹은 서서히</em> 해제합니다.</h2>
          <p className="project-case-lede">얼굴 인증을 통과한 사용자만 참여하는 3대3 온라인 로테이션 미팅입니다. 처음에는 얼굴을 마스킹하고, 대화 시간이 흐를수록 마스킹을 점차 해제합니다.</p>
          <dl className="project-case-meta">
            <div><dt>Period</dt><dd>2026.01–09</dd></div>
            <div><dt>Role</dt><dd>Frontend · Backend<br />AI 인증 · 입장 흐름</dd></div>
            <div><dt>Team</dt><dd>6명 · FE 1 / BE 3<br />AI 1 / INFRA 1</dd></div>
          </dl>
          <ul className="project-case-stack" aria-label="Roundy 기술 스택">
            <li>Spring Boot</li><li>Redis</li><li>WebSocket</li><li>OpenVidu</li><li>React</li>
          </ul>
        </div>
        <div className="project-case-gallery roundy-gallery" aria-label="Roundy 로테이션 미팅 화면">
          <figure className="roundy-meeting-shot"><img src="/assets/roundy-meeting.png" alt="얼굴 마스킹 상태로 진행되는 Roundy 로테이션 미팅 화면" /></figure>
          <div className="project-case-proof">
            <strong>처음에는 얼굴을 가리고,<br />대화하며 조금씩 공개합니다.</strong>
            <p>입장 전에는 얼굴 인증으로 상대를 확인하고, 미팅 중에는 시간에 따라 마스킹을 해제합니다.</p>
          </div>
        </div>
      </section>

      <section className="project-detail roundy-detail" data-page id="roundy-detail" aria-labelledby="roundy-detail-title">
        <BrandLogo />
        <p className="page-number">07</p>
        <div className="project-detail-heading">
          <h2 id="roundy-detail-title">6명이 같은 미팅에 들어가기까지,<br /><em>인증과 실시간 상태</em>를 맞췄습니다.</h2>
        </div>
        <ol className="project-flow" aria-label="Roundy 사용자 흐름">
          <li><span>01</span><strong>얼굴 인증</strong><small>등록 사진과 촬영본 대조</small></li>
          <li><span>02</span><strong>대기열 입장</strong><small>1회용 인증 상태 확인</small></li>
          <li><span>03</span><strong>3대3 매칭</strong><small>원자적 방 생성</small></li>
          <li><span>04</span><strong>마스킹 미팅</strong><small>시간에 따라 점진 해제</small></li>
          <li><span>05</span><strong>로테이션</strong><small>서버 기준 단계 전환</small></li>
          <li><span>06</span><strong>상호 선택</strong><small>서로의 선택 결과 확인</small></li>
        </ol>
        <div className="project-evidence-grid">
          <article>
            <h3>얼굴 인증을 입장 조건으로</h3>
            <strong>TTL과 GETDEL로<br /><b>재사용을 차단</b></strong>
            <p>AI 인증 결과를 requestId로 저장하고, 대기실 입장 시 한 번만 소비하도록 인증과 입장 경계를 분리했습니다.</p>
            <small>JWT · Redis · Spring WebClient</small>
          </article>
          <article className="project-metric-card roundy-metric-card">
            <h3>3대3 동시 매칭</h3>
            <strong><b>6개</b> 계정<br />같은 roomId 확인</strong>
            <p>마지막 요청자만 방을 받던 문제를 재현하고, 생성된 방을 다시 조회하는 흐름으로 보완했습니다.</p>
            <small>3초 간격 폴링 · Redis ZSET · Lua</small>
          </article>
          <article>
            <h3>서버가 이끄는 미팅</h3>
            <strong>화면마다 달랐던 시간을<br /><b>하나의 단계</b>로 동기화</strong>
            <p>WebSocket 전환 번호와 서버 타이머를 기준으로 자기소개, 파트너 교체와 결과 화면을 맞췄습니다.</p>
            <small>WebSocket · Stage Sequence · OpenVidu</small>
          </article>
          <figure className="project-detail-shot roundy-verification-shot">
            <img src="/assets/roundy-face-verification.webp" alt="Roundy 얼굴 인증 안내 이미지" />
            <figcaption>촬영, 인증 성공과 만료 상태를 나눠 다음 입장 단계로 이어지게 했습니다.</figcaption>
          </figure>
        </div>
      </section>

      <section className="project-overview san-overview" data-page id="san" aria-labelledby="san-title">
        <BrandLogo />
        <p className="page-number">08</p>
        <div className="project-case-intro">
          <p className="project-case-context">AI 지식 관리 서비스</p>
          <div className="project-case-brand"><img src="/assets/project-san-hd.png" alt="" /><strong>SAN</strong></div>
          <h2 id="san-title">흩어진 자료를 모아,<br /><em>다시 꺼내 쓰는 지식</em>으로 정리했습니다.</h2>
          <p className="project-case-lede">웹에서 찾은 자료를 크롬 확장 프로그램으로 출처와 함께 쉽게 저장합니다. AI가 저장한 자료를 TIL과 지식 카드로 정리하고, 대시보드에서 검색하거나 리콜 퀴즈로 복습할 수 있습니다.</p>
          <dl className="project-case-meta">
            <div><dt>Period</dt><dd>2026.04–09</dd></div>
            <div><dt>Role</dt><dd>Team Lead<br />Backend · PMO</dd></div>
            <div><dt>Team</dt><dd>7명 · BE 3 / FE 1<br />AI 2 / INFRA 1</dd></div>
          </dl>
          <ul className="project-case-stack" aria-label="SAN 기술 스택">
            <li>Spring Boot</li><li>PostgreSQL</li><li>Redis</li><li>FastAPI</li><li>React</li>
          </ul>
        </div>
        <div className="project-case-gallery san-gallery" aria-label="SAN TIL 작성 화면">
          <figure className="san-main-shot"><img src="/assets/san-til.png" alt="수집한 출처를 바탕으로 TIL을 작성하는 SAN 대시보드" /></figure>
          <div className="project-case-proof san-proof">
            <strong>저장하고 끝나지 않게,<br />검색과 복습까지 연결했습니다.</strong>
            <p>원문 출처를 남기고 생성된 지식을 카드와 퀴즈로 다시 활용합니다.</p>
          </div>
        </div>
      </section>

      <section className="project-detail san-detail" data-page id="san-detail" aria-labelledby="san-detail-title">
        <BrandLogo />
        <p className="page-number">09</p>
        <div className="project-detail-heading">
          <h2 id="san-detail-title">자료가 쌓여도 검색이 느려지지 않도록,<br /><em>조회 구조를 서버 중심</em>으로 바꿨습니다.</h2>
        </div>
        <ol className="project-flow san-flow" aria-label="SAN 지식 관리 흐름">
          <li><span>01</span><strong>웹 수집</strong><small>확장 프로그램 저장</small></li>
          <li><span>02</span><strong>출처 보존</strong><small>원문 스냅샷 관리</small></li>
          <li><span>03</span><strong>TIL 생성</strong><small>AI 비동기 처리</small></li>
          <li><span>04</span><strong>지식 카드</strong><small>카테고리와 태그</small></li>
          <li><span>05</span><strong>검색</strong><small>서버 필터·페이지 처리</small></li>
          <li><span>06</span><strong>리콜</strong><small>퀴즈로 다시 확인</small></li>
        </ol>
        <div className="project-evidence-grid">
          <article>
            <h3>웹과 확장 세션 분리</h3>
            <strong><b>120초</b> 일회용 티켓으로<br />토큰 전달 범위 제한</strong>
            <p>발급 출처를 확인한 뒤 Redis의 GETDEL로 티켓을 한 번만 교환해 확장 프로그램용 세션을 만들었습니다.</p>
            <small>Spring Security · Redis · Token Rotation</small>
          </article>
          <article className="project-metric-card san-metric-card">
            <h3>1만 건 카드 조회</h3>
            <strong><b>128.15ms</b><br />28.50ms</strong>
            <p>브라우저 전체 필터를 서버 검색과 페이지 처리로 옮겨 첫 페이지 p95를 줄였습니다.</p>
            <small>검색 p95 133.67ms → 19.04ms</small>
          </article>
          <article>
            <h3>AI 출처와 실패 경계</h3>
            <strong>정제 전 원문을 남기고<br /><b>안전한 주소만</b> 수집</strong>
            <p>TIL 생성에 사용한 출처 스냅샷을 보존하고, 내부망 주소와 허용 범위를 벗어난 입력을 차단했습니다.</p>
            <small>Source Snapshot · SSRF Guard · Async Job</small>
          </article>
          <figure className="project-detail-shot san-extension-shot">
            <img src="/assets/san-extension.png" alt="웹페이지를 지식 카드로 수집하는 SAN 확장 프로그램" />
            <figcaption>웹페이지를 수집한 뒤 생성 상태와 최종 지식 카드를 같은 화면에서 확인합니다.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
