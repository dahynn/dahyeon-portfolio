/** Public copy is scoped to the evidence packets indexed in docs/portfolio-redesign/09. */
export type StoryVisual = 'payment' | 'deadline' | 'race' | 'verification' | 'search' | 'snapshot' | 'health-input' | 'health-owner';
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
      title: '이전 방의 종료 요청이 새 방을 지우고 있었습니다.',
      takeaway: '입장을 원자화하는 것만으로는 부족했습니다. 정리할 때도 현재 방과 대상 방을 비교했습니다.',
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
      visual: 'search', topic: '검색 성능 · 조회 범위',
      title: '1만 건을 내려받는 대신, 필요한 50건만.',
      takeaway: '브라우저의 전체 목록 필터를 서버 검색으로 옮기고, 태그 집계와 정렬 기준을 정리했습니다.',
      problem: '카드가 늘수록 전체 목록 전송·파싱·브라우저 필터 비용이 함께 커졌습니다. 검색을 서버로 옮겨도 태그 집계 경로를 함께 점검해야 했습니다.',
      decision: '응답 속도뿐 아니라 소유자 격리, 검색 조건, 페이지 순서도 유지하는 기준을 잡았습니다.',
      implementation: '카드 ID별 태그를 집계하고 HAVING COUNT(DISTINCT tag)로 조건을 적용했습니다. createdAt과 cardId를 함께 정렬해 페이지 순서를 고정했습니다.',
      result: '검색 첫 50건 p95 133.67 → 19.04ms. 최신 50건 응답 약 5.09MB → 26.9KB.',
      scope: '개발 브랜치 · 로컬 합성 1만 건 · 워밍업 3회 / 측정 20회',
      details: '개발 브랜치에서 HTTP 수신·JSON 파싱·기준선 클라이언트 필터를 포함해 측정했습니다. 최신 50건 p95는 128.15 → 28.50ms, 응답은 5,085,664 → 26,903B입니다. 작은 100건 조건에서는 최신 조회가 18.97 → 23.67ms로 느려져 데이터 규모에 따른 차이도 확인했습니다.',
      application: '업무 자료 조회에서 데이터 전송량과 검색 누락·권한·페이지 일관성을 함께 확인하는 관점입니다.',
    },
    {
      visual: 'snapshot', topic: 'ASYNC AI · SOURCE SNAPSHOT',
      title: '원문이 바뀌어도, AI가 읽은 입력은 그대로.',
      takeaway: '생성 요청 시 원문과 AI 전달문을 고정해, 비동기 작업이 나중의 수정본을 읽지 않도록 했습니다.',
      problem: '요청과 AI 실행 사이에 원문을 수정하면, 생성에 쓴 내용과 나중에 확인하는 근거가 달라질 수 있습니다.',
      decision: '항상 최신 내용을 읽는 대신 “이번 생성에 무엇을 전달했는가”를 재현할 수 있게 했습니다.',
      implementation: 'captureSnapshots에 카드·스크랩 ID, 제목, 원문, URL과 AI 입력을 저장합니다. toAiContents는 현재 카드가 아니라 저장된 스냅샷으로 AI 요청을 구성합니다.',
      result: '원문·정제 입력의 보존과 저장된 입력 반환을 단위 테스트의 검증문으로 확인.',
      scope: '입력 보존·반환 로직 및 단위 테스트 검증문 확인',
      details: 'TilSourceService와 TilSourceServiceTest에서 원문·정제 입력 보존과 저장된 입력 반환 로직을 확인했습니다. 검증 범위는 코드와 테스트 검증문 확인이며, SRC 식별자로 생성에 사용한 입력을 연결합니다.',
      application: '업무 보조 AI의 결과를 검토할 때, 생성 당시 입력을 추적할 수 있게 만드는 관점입니다.',
    },
  ],
};
