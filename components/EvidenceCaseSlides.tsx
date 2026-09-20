/* oxlint-disable next/no-img-element -- 사용자 원본 서비스 캡처를 그대로 표시합니다. */
import { ArrowRight, Check, FileLock2 } from 'lucide-react';
import type { PortfolioStory, StoryVisual } from './portfolioStories';

function FlowStep({ number, title, detail, status, tone = '' }: { number: string; title: string; detail: string; status: string; tone?: string }) {
  return <li className={`story-flow-step ${tone}`}><span className="story-step-number">{number}</span><h4>{title}</h4><p>{detail}</p><strong>{status}</strong></li>;
}

function PaymentVisual() {
  return <div className="story-diagram">
    <div className="story-visual-label">같은 주문의 복구 과정 <span>합성 PG 예외 주입 시험</span></div>
    <ol className="story-flow">
      <FlowStep number="01" title="외부 승인 완료" detail="PG에서는 이미 승인된 주문" status="승인 결과 존재" />
      <FlowStep number="02" title="내부 저장 실패" detail="증권 저장 예외 → HTTP 500" status="APPROVING · 증권 0건" tone="is-warning" />
      <FlowStep number="03" title="조회 후 복구" detail="새 승인이 아닌 기존 주문 대사" status="PAID / ACTIVE · 증권 1건" tone="is-resolved" />
    </ol>
    <div className="story-rule"><div><small>복구의 기준</small><strong>승인은 반복하지 않고,<br/>끊긴 내부 처리를 이어갑니다.</strong></div></div>
    <div className="story-counts"><span>별도 동일 confirm <b>100회</b></span><ArrowRight aria-hidden="true"/><span>외부 승인 <b>1회</b></span><span>증권·활성화 이벤트 <b>각 1건</b></span></div>
  </div>;
}

function DeadlineVisual() {
  return <div className="story-diagram">
    <div className="story-visual-label">입금 시점으로 나눈 동일 정책 <span>합성 상품의 유예 종료 기준</span></div>
    <div className="story-deadline">
      <article><span>유예 마지막 날</span><h4>기한 안에 완납</h4><p>모든 미납 회차 해소</p><strong>ACTIVE</strong><small>계약 활성 상태</small></article>
      <div className="story-deadline-divider"><span>유예 종료</span></div>
      <article className="is-warning"><span>다음 날 · 배치 실행 전</span><h4>DB에는 아직 GRACE</h4><p>수납 직전 만료 기준 재확인</p><strong>LAPSED</strong><small>입금 기록 + 지연 검토 1건</small></article>
    </div>
    <div className="story-rule"><div><small>배치와 수납이 공유하는 판단</small><strong>입금은 기록하되,<br/>계약을 자동으로 되살리지 않습니다.</strong></div></div>
    <p className="story-visual-note">같은 실효 후 출금 결과를 2번 반영한 별도 시험에서도 수납·검토는 각각 1건.</p>
  </div>;
}

function RaceVisual() {
  return <div className="story-diagram">
    <div className="story-visual-label">동시성 제어와 부하 관측 <span>ROUNDY LOAD DASHBOARD</span></div>
    <figure className="story-observability-capture"><img src="/assets/roundy-load-observability.svg" alt="Roundy 매칭 부하 테스트 관측 대시보드" loading="lazy"/><figcaption>AWS 서울 환경에서 합성 사용자 9,000명을 3회 실행한 관측 기록</figcaption></figure>
    <ol className="story-event-line"><li><small>현재 상태</small><strong>새 세션 B 배정</strong></li><li><small>늦은 요청</small><strong>이전 세션 정리 요청</strong></li><li><small>대상 세션 불일치</small><strong>현재 세션 B 유지 <Check size={20} aria-hidden="true"/></strong></li></ol>
    <p className="story-visual-note">인증 소비 → 큐 등록 → 방 배정은 하나의 Lua 실행으로. 정리에는 roomId 비교 조건을 추가했습니다.</p>
  </div>;
}

function VerificationVisual() {
  return <div>
    <figure className="story-service-capture"><img src="/assets/roundy-face-matching-latest.png" alt="등록 사진과 실시간 촬영을 대조하는 라운디 얼굴 인증 화면" width="2880" height="1810" loading="lazy"/><figcaption>프라이버시를 위해 포트폴리오 화면은 모자이크 처리했습니다. 실제 서비스에서는 회원가입 시 등록한 사진과 실시간 촬영을 대조합니다.</figcaption></figure>
    <div className="story-auth-result"><div><span>CONCURRENT CONSUMPTION</span><strong>1<small>/ 16 REQUESTS</small></strong><small>한 번만 소비 승인</small></div><ul><li><Check aria-hidden="true" size={17}/> 소유자의 VERIFIED만 소비</li><li><Check aria-hidden="true" size={17}/> 타인 요청·재소비 차단</li><li><Check aria-hidden="true" size={17}/> 늦은 완료로 재생성하지 않음</li></ul></div>
  </div>;
}

function SearchVisual() {
  return <div className="story-diagram">
    <div className="story-visual-label">검색 첫 50건 · p95 <span>낮을수록 빠름 / 같은 축</span></div>
    <div className="story-bars">
      <div><span>전체 목록 → 브라우저 필터</span><div className="story-bar-track"><i style={{ width: '100%' }}/></div><strong>133.67 <small>ms</small></strong></div>
      <div className="is-resolved"><span>서버 검색 → 필요한 결과</span><div className="story-bar-track"><i style={{ width: `${19.040875 / 133.670958 * 100}%` }}/></div><strong>19.04 <small>ms</small></strong></div>
    </div>
    <div className="story-payload"><span>최신 50건의 응답 크기</span><strong>5.09 <small>MB</small><ArrowRight aria-hidden="true"/>26.9 <small>KB</small></strong><p>전체 다운로드 대신 필요한 페이지를 반환합니다.</p></div>
    <div className="story-query-rules"><span>소유자 격리</span><span>태그 조건 집계</span><span>시간 + ID 안정 정렬</span></div>
  </div>;
}

function SnapshotVisual() {
  return <div className="story-diagram">
    <div className="story-visual-label">이번 생성의 입력과 현재 원문을 분리 <span>SOURCE SNAPSHOT</span></div>
    <div className="story-snapshot">
      <article><span>01 · REQUEST</span><h4>SOURCE A</h4><p>카드·스크랩 ID<br/>제목 · 원문 · URL · AI 입력</p></article>
      <article className="story-snapshot-lock"><FileLock2 aria-hidden="true" size={35}/><span>02 · SNAPSHOT</span><h4>SNAPSHOT A</h4><p>DailySummary에 보존</p></article>
      <article><span>03 · AI RUN</span><h4>INPUT A</h4><p>저장된 aiInput 사용<br/>현재 카드 재조회 없음</p></article>
    </div>
    <div className="story-source-change"><span>그사이 원문을 수정해도</span><strong>CURRENT SOURCE B</strong><span>이번 요청의 SNAPSHOT A는 유지</span></div>
    <div className="story-rule"><FileLock2 aria-hidden="true"/><div><small>TRACEABLE INPUT</small><strong>최신 원문이 아니라,<br/>생성 당시의 입력을 남깁니다.</strong></div></div>
  </div>;
}

function HealthInputVisual() {
  return <div className="story-diagram">
    <div className="story-visual-label">호출 전 검사 → 저장 전 검사 <span>서비스의 진단 처리 경로</span></div>
    <ol className="story-flow">
      <FlowStep number="01" title="얼굴·음성 입력" detail="영상 ≤ 50MB / 음성 ≤ 20MB" status="형식·용량 검사" />
      <FlowStep number="02" title="외부 AI 분석" detail="요청 메모리에서 원본 전달" status="판정값·확률 검사" />
      <FlowStep number="03" title="파생 결과 기록" detail="서비스 저장소에 원본 업로드 안 함" status="허용된 응답만 저장" tone="is-resolved" />
    </ol>
    <div className="story-health-checks"><div><span>호출 전</span><strong>용량 초과 · MIME 불일치</strong><small>AI 호출하지 않음</small></div><div><span>저장 전</span><strong>판정값 2 · 확률 1.3</strong><small>진단 기록 저장하지 않음</small></div></div>
    <div className="story-rule"><div><small>서비스 저장 기준</small><strong>원본 파일 대신,<br/>검사한 파생 결과만 남깁니다.</strong></div></div>
  </div>;
}

function HealthOwnerVisual() {
  return <div className="story-diagram">
    <div className="story-visual-label">기록 ID + 인증 사용자 ID <span>소유권 확인 후 상세 조회</span></div>
    <div className="story-owner-query"><small>이전</small><span>진단 ID만 조회</span><ArrowRight aria-hidden="true"/><small>변경</small><strong>진단 ID AND 사용자 ID</strong></div>
    <div className="story-owner-paths">
      <article><span>기록 소유자와 요청자가 일치</span><h4>본인 기록</h4><strong>상세 조회 진행</strong><p>결과와 연관 정보로 연결</p></article>
      <article><span>기록 소유자와 요청자가 불일치</span><h4>타인 기록</h4><strong>404</strong><p>연관 병원 조회도 중단</p></article>
    </div>
    <div className="story-rule"><FileLock2 aria-hidden="true"/><div><small>상세 조회의 완료 조건</small><strong>“있는 기록인가?”가 아니라<br/>“내 기록인가?”까지 확인합니다.</strong></div></div>
  </div>;
}

function DasibomSourceScreens() {
  return <details className="story-source-screens"><summary>병원 탐색 화면 보기</summary>
    <figure><figcaption>병원 탐색 <a href="/assets/dasibom-map-flow-user.png" target="_blank" rel="noreferrer">원본 크게 보기 ↗</a></figcaption><img src="/assets/dasibom-map-flow-user.png" alt="다시봄 지도, 병원 상세와 검색 목록 원본 캡처" width="7670" height="5112" loading="lazy"/></figure>
  </details>;
}

const visuals: Record<StoryVisual, () => React.JSX.Element> = { payment: PaymentVisual, deadline: DeadlineVisual, race: RaceVisual, verification: VerificationVisual, search: SearchVisual, snapshot: SnapshotVisual, 'health-input': HealthInputVisual, 'health-owner': HealthOwnerVisual };

export function EvidenceCaseSlide({ projectId, projectName, story, index }: { projectId: string; projectName: string; story: PortfolioStory; index: number }) {
  const caseNumber = String(index + 1).padStart(2, '0');
  const id = `${projectId}-case-${caseNumber}`;
  const Visual = visuals[story.visual];
  return <section className={`evidence-story evidence-story-${projectId} ${index === 1 ? 'evidence-story-dark' : ''}`} id={id} data-page aria-labelledby={`${id}-title`}>
    <div className="story-inner">
      <header className="story-heading"><div className="story-eyebrow"><span className="story-project-mark"><img src={`/assets/project-${projectId}-hd.png`} alt="" width="28" height="28" />{projectName} / PROBLEM {caseNumber}</span><span>{story.topic}</span></div><h3 id={`${id}-title`}>{story.title}</h3><p>{story.takeaway}</p></header>
      <div className="story-body">
        <div className={`story-visual story-visual-${story.visual}`}><Visual/></div>
        <div className="story-explanation">
          <article><span>01 · PROBLEM</span><p>{story.problem}</p></article>
          <article><span>02 · DECISION</span><p>{story.decision}</p></article>
          <article><span>03 · BUILD</span><p>{story.implementation}</p></article>
        </div>
      </div>
      <footer className="story-footer"><div><span>04 · EVIDENCE</span><strong>{story.result}</strong><p>{story.scope}</p></div><div><span>APPLICATION</span><p>{story.application}</p></div></footer>
      <div className="story-detail-actions">
        <details className="story-evidence-details"><summary>검증 조건과 범위 보기</summary><p>{story.details}</p></details>
        {story.visual === 'health-owner' ? <DasibomSourceScreens/> : null}
      </div>
    </div>
  </section>;
}
