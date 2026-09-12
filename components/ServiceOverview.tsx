/* oxlint-disable next/no-img-element -- 촬영 원본의 비율을 그대로 표시합니다. */
import { ArrowDown, ArrowRight, Check, CircleHelp, Eye, HeartHandshake, MessageCircle } from 'lucide-react';
import { serviceOverviews } from './serviceOverviews';

const capsureScenes = [
  { image: 'product', title: '보장을 고릅니다.', description: '상품과 담보를 확인하고 견적을 받습니다.' },
  { image: 'payment', title: '납입 조건을 확인합니다.', description: '고지 심사 후 확정된 보험료와 결제 상태를 확인합니다.' },
  { image: 'policy', title: '가입 내용을 확인합니다.', description: '가상 결제 후 발행된 증권에서 보장과 계약 상태를 확인합니다.' },
];

export function ServiceOverview({ id, name, variant = 'page' }: { id: string; name: string; variant?: 'page' | 'hero' }) {
  const overview = serviceOverviews[id];
  if (variant === 'hero') {
    return <aside className="service-hero-brief" aria-label={`${name} 서비스 한눈에 보기`}>
      <p>서비스 한눈에 보기 <span>{overview.platform}</span></p>
      <dl><div><dt>누구를 위해</dt><dd>{overview.audience}</dd></div><div><dt>어떤 문제를</dt><dd>{overview.problem}</dd></div></dl>
      <ol aria-label={`${name} 이용 순서`}>{overview.journey.map((step, index) => <li key={step.action}><span>0{index + 1}</span>{step.action}</li>)}</ol>
    </aside>;
  }
  return <section className={`service-overview service-overview-${id}`} data-page aria-labelledby={`${id}-overview-title`}>
    <div className="service-overview-layout">
      <div className="service-overview-copy">
        <header className="service-overview-heading"><p>서비스 한눈에 보기 <span>{overview.platform}</span></p><h3 id={`${id}-overview-title`}>{overview.title}</h3></header>
        <dl className="service-context"><div><dt>누구를 위해</dt><dd>{overview.audience}</dd></div><div><dt>어떤 문제를</dt><dd>{overview.problem}</dd></div></dl>
        <p className="service-technical-bridge"><ArrowDown size={16} aria-hidden="true" />{overview.bridge}</p>
      </div>
      <div className="service-overview-visual">
        <ol className="service-journey" aria-label={`${name} 이용 순서`}>{overview.journey.map((step, index) => <li key={step.action}><span className="service-journey-number">0{index + 1}</span><h4>{step.action}</h4><p>{step.result}</p>{index < overview.journey.length - 1 && <ArrowRight aria-hidden="true" size={16} />}</li>)}</ol>
        {id === 'capsure' && <div className="service-scenes"><div className="service-scenes-heading"><h4>상품 선택부터 증권 확인까지</h4><p>로컬 데모 데이터 · Fake PG</p></div><div className="service-phone-sequence">{capsureScenes.map((scene) => <figure key={scene.image}><div className="service-phone"><img src={`/assets/capsure-mobile-${scene.image}-20260912.png`} alt={`CapSure 모바일 웹의 실제 ${scene.title} 화면`} width="390" height="844" loading="lazy" /></div></figure>)}</div></div>}
        {id === 'roundy' && <figure className="service-roundy-concept"><div className="service-concept-steps"><div><CircleHelp size={28} aria-hidden="true" /><span>성향 퀴즈</span></div><ArrowRight size={16} aria-hidden="true" /><div><HeartHandshake size={28} aria-hidden="true" /><span>성향 매칭</span></div><ArrowRight size={16} aria-hidden="true" /><div><MessageCircle size={28} aria-hidden="true" /><span>마스킹 대화</span></div><ArrowRight size={16} aria-hidden="true" /><div><Eye size={28} aria-hidden="true" /><span>상호 선택</span><Check size={14} aria-hidden="true" /></div></div></figure>}
      </div>
    </div>
  </section>;
}
