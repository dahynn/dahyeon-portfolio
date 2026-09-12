'use client';

/* oxlint-disable next/no-img-element -- 원본 캡처의 비율을 유지합니다. */
import { Braces, CreditCard, Database, type LucideIcon, Video } from 'lucide-react';
import { projectCases, type ProjectCase } from './projectCases';
import { projectEvidence, type ProjectPresentation } from './projectEvidence';
import { ServiceOverview } from './ServiceOverview';

const stackIcons: Record<string, string> = {
  'Java 21': '/assets/tech-icons/java.png',
  'Spring Boot 3.5.11': '/assets/tech-icons/spring.png',
  'Spring Boot 3.5.9': '/assets/tech-icons/spring.png',
  'Spring Boot 3.5.14': '/assets/tech-icons/spring.png',
  'Spring Data JPA': '/assets/tech-icons/spring.png',
  PostgreSQL: '/assets/tech-icons/postgresql.svg',
  Redis: '/assets/tech-icons/redis.png',
  'Redis와 Lua': '/assets/tech-icons/redis.png',
  'React 19': '/assets/tech-icons/react.svg',
  'React 18.3': '/assets/tech-icons/react.svg',
  'TypeScript 5.9': '/assets/tech-icons/typescript.svg',
};

const stackFallbackIcons: Record<string, LucideIcon> = {
  'MyBatis 3.0.5': Database,
  'Toss Payments SDK 2': CreditCard,
  MySQL: Database,
  'OpenVidu 2.32': Video,
};

function CaseHeroMedia({ id, name }: Pick<ProjectCase, 'id' | 'name'>) {
  if (id === 'capsure') return <div className="case-hero-media case-hero-media-capsure" aria-label="CapSure 실제 서비스 화면">
    <img src="/assets/capsure-mobile-application-20260912.png" alt="CapSure 청약 고지 화면" width="390" height="844" />
    <img src="/assets/capsure-mobile-payment-20260912.png" alt="CapSure 납입 조건 확인 화면" width="390" height="844" />
    <img src="/assets/capsure-mobile-policy-20260912.png" alt="CapSure 증권 확인 화면" width="390" height="844" />
  </div>;
  const image = id === 'roundy' ? '/assets/roundy-meeting.png' : '/assets/san-extension.png';
  return <figure className={`case-hero-media case-hero-media-${id}`}>
    <img src={image} alt={`${name} 실제 서비스 화면`} width={id === 'roundy' ? '1190' : '1574'} height={id === 'roundy' ? '1323' : '940'} />
  </figure>;
}

type CaseSlide = {
  title: string;
  problem: string;
  approach: string;
  result: string;
  reflection: string;
  primary?: boolean;
};

const reflections: Record<string, string[]> = {
  capsure: [
    '응답이 없다는 이유만으로 결제를 실패 처리하면 고객과 계약 상태 모두가 흔들릴 수 있었습니다. 그래서 재시도보다 먼저 확인하고, 확인 뒤에만 다음 상태로 넘기게 했습니다.',
    '납입 실패는 한 번의 이벤트지만 계약 효력은 여러 조건을 거쳐 판단됩니다. 상태를 한 줄로 줄이지 않고, 판단에 필요한 조건을 나눠 두는 편이 안전했습니다.',
    'AI가 빠르게 정리해도 지급 판단까지 대신하면 안 됩니다. 근거와 검토자를 남기는 경계가 서비스 신뢰를 지킨다고 봤습니다.',
  ],
  roundy: [
    '실시간 서비스에서는 늦게 도착한 요청도 현재 상태를 바꿀 수 있습니다. 함께 바뀌는 값은 한 번에 다루는 쪽이 더 예측 가능했습니다.',
    '인증 완료라는 결과만으로는 충분하지 않았습니다. 누구의 결과인지와 한 번만 쓸 수 있는지를 같이 확인해야 신뢰할 수 있었습니다.',
    '로그인했다는 사실은 방 권한을 보장하지 않습니다. 사용자가 지금 속한 방인지 다시 확인해야 대화 공간의 경계가 지켜집니다.',
  ],
  san: [
    '검색은 빨라지는 것만으로 끝나지 않습니다. 같은 조건에서 같은 결과를 돌려주는지까지 함께 확인해야 다시 찾을 수 있었습니다.',
    'AI가 정리한 문장보다 어떤 원문을 읽었는지가 더 중요할 때가 있습니다. 입력을 남기고 범위를 제한해야 나중에도 검토할 수 있었습니다.',
    '실패한 작업을 다시 누르는 순간에도 규칙이 필요했습니다. 같은 작업이 겹치지 않고, 사용자가 다음 행동을 알 수 있게 만드는 데 집중했습니다.',
  ],
};

function getCaseSlides(project: ProjectCase): CaseSlide[] {
  const [problem, decision, implementation, outcome] = project.steps;
  return [
    {
      title: project.mechanism,
      problem: problem.body,
      approach: `${decision.body} ${implementation.body}`,
      result: outcome.body,
      reflection: reflections[project.id][0],
      primary: true,
    },
    ...project.supporting.map((supporting, index) => ({
      title: supporting.title,
      problem: supporting.problem,
      approach: supporting.body,
      result: supporting.proof,
      reflection: reflections[project.id][index + 1],
    })),
  ];
}

function CaseSlideVisual({ project, slide }: { project: ProjectCase; slide: CaseSlide }) {
  const evidence = projectEvidence[project.id];
  if (project.id === 'capsure' && slide.primary) {
    return <div className="case-slide-captures" aria-label="CapSure 서비스 화면">
      <figure><img src="/assets/capsure-mobile-application-20260912.png" alt="CapSure 청약 고지 화면" width="390" height="844" /><figcaption>청약·납입 조건 확인</figcaption></figure>
      <figure><img src="/assets/capsure-mobile-policy-20260912.png" alt="CapSure 증권 확인 화면" width="390" height="844" /><figcaption>증권과 계약 상태 확인</figcaption></figure>
    </div>;
  }

  const nodes = slide.primary ? evidence.nodes : [
    { name: '문제 확인', detail: slide.problem },
    { name: '조건 분리', detail: slide.approach },
    { name: '검증 기록', detail: slide.result },
  ];

  return <div className="case-slide-diagram" aria-label={`${project.name} ${slide.title} 구현 흐름`}>
    {nodes.map((node, index) => <div key={node.name}>
      <span>0{index + 1}</span><strong>{node.name}</strong><p>{node.detail}</p>
    </div>)}
  </div>;
}

function ProjectCaseSlide({ project, slide, index }: { project: ProjectCase; slide: CaseSlide; index: number }) {
  const caseNumber = String(index + 1).padStart(2, '0');
  return <section className={`case-slide case-slide-${project.id}`} id={`${project.id}-case-${caseNumber}`} data-page aria-labelledby={`${project.id}-case-${caseNumber}-title`}>
    <header className="case-slide-heading"><p>Case {caseNumber}</p><h3 id={`${project.id}-case-${caseNumber}-title`}>{slide.title}</h3></header>
    <div className="case-slide-top">
      <CaseSlideVisual project={project} slide={slide} />
      <article className="case-slide-brief">
        <p>문제 상황</p><h4>{slide.problem}</h4>
        <p>제가 정한 기준</p><span>{slide.approach}</span>
      </article>
    </div>
    <footer className="case-slide-bottom">
      <article><p>성과 및 결과</p><strong>{slide.result}</strong></article>
      <article><p>프로젝트를 하며 알게 된 점</p><strong>{slide.reflection}</strong></article>
    </footer>
  </section>;
}

function CaseStudy({ project }: { project: ProjectCase }) {
  const evidence = projectEvidence[project.id];
  const slides = getCaseSlides(project);
  return <section className={`technical-case technical-case-${project.id}`} id={project.id} aria-labelledby={`${project.id}-title`}>
    <div className="case-hero" data-page>
      <div className="case-hero-inner">
        <CaseHeroMedia id={project.id} name={project.name} />
        <header className="case-heading">
          <div className="case-identity"><img src={`/assets/project-${project.id}-hd.png`} alt="" width="68" height="68" /><div><p>{project.category}</p><strong>{project.name}</strong></div><span className="case-number">{project.number} / 03</span></div>
          <h2 id={`${project.id}-title`}>{project.headline}</h2>
          <p className="case-intro-text">{project.summary}</p>
          <ul className="case-stack" aria-label={`${project.name} 기술 스택`}>{evidence.stack.map(tech => {
            const FallbackIcon = stackFallbackIcons[tech] ?? Braces;
            return <li key={tech}>{stackIcons[tech] ? <img src={stackIcons[tech]} alt="" width="18" height="18" /> : <FallbackIcon aria-hidden="true" size={17} strokeWidth={2} />}<span>{tech}</span></li>;
          })}</ul>
          <dl className="case-project-meta"><div><dt>팀 구성</dt><dd>{evidence.team}</dd></div><div><dt>담당 범위</dt><dd>{evidence.responsibility}</dd></div></dl>
          <ServiceOverview id={project.id} name={project.name} variant="hero" />
        </header>
      </div>
    </div>
    <div className="case-container">
      <div className="case-slide-deck" id={`${project.id}-detail`}>
        {slides.map((slide, index) => <ProjectCaseSlide key={slide.title} project={project} slide={slide} index={index} />)}
      </div>
      <a className="case-back" href="#projects">프로젝트 목록으로 ↑</a>
    </div>
  </section>;
}

export function ProjectCaseStudies() {
  return <>{projectCases.map(project => <CaseStudy key={project.id} project={project} />)}</>;
}
