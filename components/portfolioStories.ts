/** Public copy is scoped to the evidence packets indexed in docs/portfolio-redesign/09. */
export type StoryVisual = 'payment' | 'deadline' | 'race' | 'verification' | 'search' | 'snapshot' | 'san-audit' | 'san-ticket' | 'san-benchmark' | 'health-input' | 'health-owner';
export type PortfolioStory = {
  visual: StoryVisual;
  topic: string;
  title: string;
  takeaway: string;
  problem: string;
  decision: string;
  implementation: string;
  result: string;
  scope: string;
  details: string;
  application: string;
};

export const portfolioStories: Partial<Record<string, PortfolioStory[]>> = {
  dasibom: [
    {
      visual: 'health-input', topic: '민감한 입력 · AI 응답 검증',
      title: '분석에 쓴 원본과, 기록에 남길 결과를 분리했습니다.',
      takeaway: '프로젝트에서 원본 업로드 경로를 제거하고, 입력과 AI 응답을 각각 검사하는 경계를 검증했습니다.',
      problem: '기존 진단 경로는 AI 호출 전 얼굴·음성 파일을 S3에 올렸습니다. 분석 뒤에도 원본을 보관해야 하는 이유는 확인되지 않았습니다.',
      decision: '원본은 분석에 전달하되 서비스 저장소에는 남기지 않고, 허용 범위의 판정값·확률만 기록하는 기준입니다.',
      implementation: 'S3 업로드 의존을 제거했습니다. 형식·용량은 AI 호출 전에, 판정값 0/1과 유한한 확률 0~1은 저장 전에 검사합니다. 외부 오류는 일반화된 코드로 반환합니다.',
      result: '잘못된 입력은 AI 호출 전 차단. 판정값 2·확률 1.3 응답은 기록 저장 차단.',
      scope: 'Mockito · H2 · 전체 백엔드 테스트 11건 통과',
      details: '2026-09-19 백엔드 테스트를 강제 재실행해 5개 클래스의 11건이 실패·오류·스킵 없이 통과했습니다. 영상 mp4/mov 최대 50MB, 음성 wav/pcm/m4a 최대 20MB, 전체 multipart 요청 75MB 기준으로 검사합니다. 검증 대상은 서비스의 입력·응답 처리와 저장 경로입니다.',
      application: '민감한 자료를 분석에 사용하는 목적과 서비스에 보관할 대상을 분리하는 관점입니다.',
    },
    {
      visual: 'health-owner', topic: '기록 조회 · 소유권 검사',
      title: '로그인했어도, 다른 사람의 기록은 열 수 없게.',
      takeaway: '진단 ID만 찾던 조회를 사용자 ID까지 함께 확인하도록 바꾸고, 타인 요청의 차단 범위를 검증했습니다.',
      problem: '진단 ID만 조회하면 요청자와 기록 소유자가 연결되지 않습니다. 다른 사람의 ID를 아는 요청이 상세 기록으로 이어질 여지가 있었습니다.',
      decision: '기록의 존재 여부보다 소유권을 먼저 확인합니다. 일치하지 않으면 연관 병원 정보 조회도 진행하지 않습니다.',
      implementation: '인증 사용자 ID를 컨트롤러에서 서비스로 전달합니다. findByIdAndUserId로 기록을 조회하고, 일치하지 않으면 DIAGNOSIS_NOT_FOUND로 처리합니다.',
      result: '타인 기록 요청은 404. 이때 연관 병원 저장소 조회도 호출되지 않음을 확인.',
      scope: 'Mockito · 소유권 서비스·컨트롤러 테스트 각 1건',
      details: 'DiagnosisQueryServiceTest에서 타인 진단 ID 요청의 404 응답과 병원 저장소 미호출을 확인했습니다. DiagnosisControllerTest에서는 인증 사용자 ID가 서비스로 전달되는지 검사했습니다. 서비스·컨트롤러 단위의 검증입니다.',
      application: '개인별 청구·건강 관련 기록을 조회할 때 로그인 여부와 대상 데이터의 소유권을 따로 검사하는 관점입니다.',
    },
  ],
  capsure: [
    {
      visual: 'payment', topic: '결제 복구 · 멱등성',
      title: '오류가 났다고, 결제를 다시 승인하지 않습니다.',
      takeaway: '외부 승인과 내부 저장을 구분하고, 같은 주문의 결과를 확인해 계약까지 복구했습니다.',
      problem: 'PG 승인 직후 증권 저장에 예외를 주입하자 HTTP 500이 반환됐습니다. 하지만 이미 끝난 외부 승인은 DB 롤백으로 취소되지 않았습니다.',
      decision: '오류 응답을 결제 실패로 단정하지 않고, 새 승인보다 기존 거래 확인을 우선했습니다.',
      implementation: '승인 후 내부 실패는 APPROVING으로 유지합니다. 같은 주문을 조회·대사해 결제 상태, 계약 활성화, 증권과 Outbox를 함께 복구합니다.',
      result: '대사 후 PAID / ACTIVE로 복구. 증권·활성화 이벤트 각각 1건.',
      scope: '합성 PG · 저장 예외 주입 · 기존 결제 통합 테스트 기록',
      details: '2026-09-13 PaymentPolicyIntegrationTest 10건 통과. 예외 직후 APPROVING / PENDING_INITIAL_PREMIUM / 증권 0건, 대사 후 PAID / ACTIVE / 증권 1건을 확인했습니다. 별도 동일 confirm 100회 시험에서도 외부 승인 호출·결제 시도·증권·활성화 이벤트는 각각 1회/1건이었습니다. 승인 여부를 모르는 timeout은 UNKNOWN으로 따로 처리합니다.',
      application: '수납 오류의 복구 완료 기준을 응답 성공이 아니라 계약 반영까지 잡는 관점입니다.',
    },
    {
      visual: 'deadline', topic: '계약 효력 · 시간 경계',
      title: '배치가 늦어도, 계약 판단은 달라지지 않게.',
      takeaway: '입금 기록과 계약 효력을 분리하고, 수납 순간에도 같은 만료 규칙을 적용했습니다.',
      problem: '유예 종료 다음 날, 실효 배치보다 입금이 먼저 도착하면 DB에는 아직 GRACE가 남습니다. 이 값만 보면 지난 계약이 다시 활성화될 수 있습니다.',
      decision: '“돈이 들어왔다”와 “보장이 유효하다”를 같은 조건으로 처리하지 않았습니다.',
      implementation: '수납 전에 계약을 잠그고 beforeSettlement로 만료 여부를 다시 판단합니다. 실효 후 입금은 수납 기록과 지연 검토로 남기고 자동 활성화하지 않습니다.',
      result: '마지막 날 완납은 ACTIVE. 다음 날 배치 전 입금은 LAPSED + 검토 1건.',
      scope: '합성 상품 정책 · 시험 시계 제어 · 기존 미납 통합 테스트 기록',
      details: '2026-09-13 미납 통합 테스트 18건 통과. 합성 상품의 유예 종료 기준과 시험 시계를 사용했습니다. 이미 실효된 계약에 같은 UNKNOWN 출금 결과를 두 번 반영해도 수납·지연 검토는 각각 1건이었습니다.',
      application: '배치 실행 순서와 무관하게 같은 업무 기준으로 계약 상태를 판단하는 관점입니다.',
    },
  ],
  roundy: [
    {
      visual: 'race', topic: '동시 요청 · 상태 정합성',
      title: '늦게 도착한 이전 방 정리 요청이 새 방까지 삭제했습니다.',
      takeaway: '매칭 대기열에서 이전 방을 정리하는 과정이 동시에 들어온 새 세션 대기열 등록을 삭제하는 경쟁 상태(Race Condition)를 발생시켰습니다.',
      problem: '매칭 뒤 늦은 poll이 사용자를 다시 대기열에 넣고, 이전 방의 정리 요청이 새 currentRoom을 삭제하는 순서 문제를 재현했습니다.',
      decision: '입장 과정은 한 번에 처리하되, 삭제에는 “지금도 그 방인가?”라는 조건이 별도로 필요했습니다.',
      implementation: 'Redis Lua로 인증 소비·큐 등록·방 배정을 묶었습니다. cleanup-room.lua는 현재 매핑이 정리 대상 roomId와 같을 때만 삭제합니다.',
      result: '새 방 유실 100/100 → 0/100. 늦은 poll의 재큐잉도 0/100.',
      scope: '격리 Redis 8.4.0 · 모의 JWT/DB · 조건별 100회 로컬 시험',
      details: '기존 → 원자적 입장만 적용 → 조건부 정리까지 적용한 세 버전을 비교했습니다. 재큐잉은 100/100 → 0/100 → 0/100, 새 배정 유실은 100/100 → 100/100 → 0/100이었습니다. 격리 Redis와 모의 JWT·DB를 사용해 Controller 수준에서 요청 순서를 제어한 시험입니다.',
      application: '늦은 취소·재요청이 최신 신청 상태를 덮어쓰지 않도록 전이 조건을 확인하는 관점입니다.',
    },
    {
      visual: 'verification', topic: '인증 결과 · 소유권과 일회성',
      title: '인증 성공은 본인만, 한 번만 사용할 수 있게.',
      takeaway: '성공 여부뿐 아니라 소유자·요청·상태를 묶고, 인증 결과 소비를 원자적으로 처리했습니다.',
      problem: '성공 여부만 검사하면 타인의 요청이나 겹친 요청이 같은 결과를 사용할 위험이 있습니다. 소비 후 늦은 완료 응답이 결과를 되살리는 조건도 점검했습니다.',
      decision: 'PENDING은 소비하지 않고, VERIFIED만 한 번 사용하도록 제한했습니다.',
      implementation: 'verify:{userId}:{requestId}에 결과를 귀속시켰습니다. 완료는 PENDING에서만, 소비는 VERIFIED에서만 허용하는 Lua 전이로 재사용을 막았습니다.',
      result: '16개 소비 요청 중 1개만 성공. 타인 소비와 재소비는 실패.',
      scope: '실제 Redis · 모의 DB · 8개 워커에 16개 소비 요청 제출',
      details: 'VerificationRedisTest 6건 통과. 실제 Redis와 모의 DB 조건에서 소유자의 최초 소비 성공, 타인·재소비 실패, 소비 뒤 늦은 완료 결과의 재생성 차단을 확인했습니다. 8개 워커에 제출한 16개 소비 요청 중 1개만 성공했습니다.',
      application: '일회성 승인 결과를 사용자와 요청에 귀속시키는 설계 관점입니다.',
    },
  ],
  san: [
    {
      visual: 'san-audit', topic: '비동기 작업 · 감사 추적',
      title: '비동기 작업이 요청 맥락을 잃지 않도록.',
      takeaway: '작업이 큐로 넘어가도 누가 요청했고 어떤 경로로 실행됐는지 남겨야 했습니다. 요청 스냅샷을 워커에서 복원하고 시작·성공·실패를 같은 추적 흐름으로 기록했습니다.',
      problem: '비동기 작업은 요청 스레드를 벗어나 실행되기 때문에 actorUserId, traceId, IP, User-Agent 같은 요청 맥락이 사라질 수 있었습니다.',
      decision: '큐에 넣는 순간 감사에 필요한 값을 스냅샷으로 고정하고, 워커가 실행될 때 같은 컨텍스트를 복원하기로 했습니다.',
      implementation: 'AuditedAsyncJobRunner가 요청 스냅샷을 전달하고 START·SUCCESS·FAILURE를 같은 traceId로 기록합니다. finally에서는 워커가 사용하기 전 컨텍스트를 다시 복원합니다.',
      result: '요청 스냅샷 복원, 감사 이벤트 기록, 이전 컨텍스트 복귀를 확인.',
      scope: '',
      details: '요청 스냅샷 전달과 START·SUCCESS·FAILURE 감사 기록, finally의 이전 컨텍스트 복원을 코드와 단위 테스트에서 확인했습니다. 운영 로그 보존 기간이나 실제 운영 환경의 감사 완결성을 증명한 결과는 아닙니다.',
      application: '비동기 처리도 최초 요청자와 실행 결과를 연결해 추적할 수 있게 만드는 관점입니다.',
    },
    {
      visual: 'san-ticket', topic: '로그인 브리지 · 토큰 노출',
      title: 'JWT를 URL에 남기지 않는 익스텐션 로그인 전환.',
      takeaway: '채널을 넘나드는 로그인에서 장기 토큰을 주소에 실어 보내지 않았습니다. 짧게 살아 있는 1회용 티켓으로 교환하고 읽는 순간 소비되도록 제한했습니다.',
      problem: '대시보드와 익스텐션 사이에서 JWT를 URL로 전달하면 브라우저 기록과 리퍼러 등에 장기 토큰이 남을 수 있었습니다.',
      decision: 'URL에는 짧게 살아 있는 티켓만 전달하고, 교환 시 access token과 source client type을 다시 확인하기로 했습니다.',
      implementation: 'SecureRandom 32-byte URL-safe 티켓을 Redis에 저장했습니다. Dashboard → Extension은 TTL 2분, Extension → Dashboard는 TTL 30초이며 getAndDelete로 조회 즉시 소비합니다.',
      result: '유효한 티켓은 한 번만 소비하고, 만료·재사용 티켓은 거절.',
      scope: '',
      details: 'access token 유효성, source client type과 role 보존, 방향별 TTL과 getAndDelete 소비를 코드와 단위 테스트에서 확인했습니다. 브라우저와 실제 Redis를 함께 사용한 E2E 및 공격 시나리오 검증은 아직 확인하지 않았습니다.',
      application: '인증 채널을 전환할 때 장기 토큰의 노출과 재사용 범위를 줄이는 관점입니다.',
    },
    {
      visual: 'san-benchmark', topic: 'AI 요약 · 지연 측정',
      title: '실제 AI 호출을 병렬화해 처리 시간을 약 59% 단축했습니다.',
      takeaway: '같은 모델과 같은 입력으로 순차 처리와 병렬 처리를 짝지어 비교했습니다. 평균과 p95가 함께 줄어드는지 확인해 카드 요약 단계의 개선만 증명했습니다.',
      problem: '카드 3개의 AI 요약을 순차 호출하면서 각 응답 대기가 그대로 누적됐습니다. 카드 요약 단계만 평균 17.68초까지 길어졌습니다.',
      decision: '모델·입력·카드 수를 동일하게 고정했습니다. 실행 순서의 영향을 줄이기 위해 AB/BA를 균형 배치한 paired benchmark로 비교했습니다.',
      implementation: '서로 독립적인 카드 요약 3건을 CompletableFuture로 동시에 실행했습니다. gpt-5-mini, 합성 카드 3개, 10쌍·총 20회 조건을 동일하게 유지했습니다.',
      result: '평균 17.68s → 6.92s, p95 21.30s → 8.59s, 중앙값 기준 59.45% 단축.',
      scope: '성공 10/10 · 카드 요약 단계만 측정 · 전체 TIL·UI 응답 시간 제외',
      details: '2026-09-14 paired benchmark JSON과 보고서의 결과입니다. 동일 모델, 동일 합성 카드 3개, AB/BA balanced 10 pairs(20 runs) 조건입니다. 최종 TIL 통합, embedding, Java 백엔드와 UI, 운영 SLA나 사용자 체감 속도는 측정 범위에 포함하지 않았습니다.',
      application: '자동화 작업의 지연을 실제 호출과 동일 조건의 반복 측정으로 관리하는 관점입니다.',
    },
  ],
};
