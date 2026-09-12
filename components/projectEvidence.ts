export type ProjectPresentation = {
  team: string;
  responsibility: string;
  contribution: string;
  stack: string[];
  nodes: { name: string; detail: string }[];
  inspection: string[];
  metrics: { label: string; value: string; detail: string }[];
  comparison?: { label: string; before: number; after: number; unit: string };
  checks: { name: string; input: string; output: string }[];
  record: string;
};

// Versions: project build.gradle / package.json, inspected 2026-09-12.
// Measurement references and role boundaries are recorded in docs/portfolio-redesign.
export const projectEvidence: Record<string, ProjectPresentation> = {
  capsure: {
    team: '5명, 백엔드 3명, 프론트엔드 1명, 인프라 1명',
    responsibility: 'FE Lead. 상품 선택, 결제, 구독 확정',
    contribution: '결제 상태와 계약 효력 설계, 복구 시나리오 검증과 통합',
    stack: ['Java 21', 'Spring Boot 3.5.11', 'MyBatis 3.0.5', 'PostgreSQL', 'React 19', 'Toss Payments SDK 2'],
    nodes: [
      { name: '결제 요청', detail: '동일 주문 · 멱등 키' },
      { name: '결제 원장', detail: 'UNKNOWN 보존' },
      { name: 'PG 조회', detail: '주문·금액 대사' },
      { name: '계약 확정', detail: 'PAID → ACTIVE' },
    ],
    inspection: ['응답 유실 ≠ 승인 실패. 재승인보다 결과 조회가 먼저입니다.', '동일 키는 기존 시도를 반환합니다. 상태가 불명확하면 활성화를 보류합니다.', '행 잠금으로 작업을 선점하고 Outbox로 후속 처리를 추적합니다.', '승인 호출 수와 최종 계약 상태를 각각 확인합니다.'],
    metrics: [
      { label: 'UNKNOWN 결제', value: '10,000건', detail: '합성 provider FAILED 주문·시도' },
      { label: '최종 확정', value: '10,000건', detail: '대사 원장도 10,000건 일치' },
      { label: '누락·중복 대사', value: '0건', detail: '1·2 worker 각각 3회 검증' },
    ],
    comparison: { label: 'UNKNOWN 주문 10,000건의 대사 전후 상태', before: 0, after: 10000, unit: '건' },
    checks: [
      { name: 'UNKNOWN 대사', input: 'UNKNOWN 주문·결제 시도 10,000건', output: '최종 확정 10,000건 · 누락·중복 0건' },
      { name: '병렬 작업', input: '1·2 worker 각각 3회 실행', output: '대사 원장·control total 일치' },
      { name: '작업 중단·재개', input: '2,000건에서 제어 예외 → 같은 DB·실행 키 재개', output: '최종 10,000건 · 누락·중복 0건' },
    ],
    record: '2026.09.12 로컬 합성 Postgres 16/Testcontainers 검증. 2 worker 중앙 처리량 908.19건/초, 개별 대사 p95 중앙 1.91ms입니다. 세 번째 22.47초 outlier의 원인은 미확정이어서 개선율은 주장하지 않습니다.',
  },
  roundy: {
    team: '팀 프로젝트',
    responsibility: '매칭, 인증, 방 접근 권한 보강',
    contribution: '경쟁 조건 재현, Redis 원자 처리와 조건부 정리 검증',
    stack: ['Java 21', 'Spring Boot 3.5.9', 'Redis와 Lua', 'MySQL', 'React 19', 'TypeScript 5.9', 'OpenVidu 2.32'],
    nodes: [
      { name: '인증 결과', detail: 'VERIFIED만 소비' },
      { name: 'Redis · Lua', detail: '큐 선택·방 매핑 원자 처리' },
      { name: '방 정리', detail: '현재 roomId 비교' },
      { name: '매핑 보존', detail: '새 방 연결 유지' },
    ],
    inspection: ['늦은 poll과 오래된 cleanup을 별도 시나리오로 고정합니다.', '중간 상태가 노출되지 않도록 Redis Lua 안에서 함께 변경합니다.', '현재 roomId가 정리 대상과 같을 때만 매핑을 삭제합니다.', '사용자 재등록과 새 방 매핑 손실을 각각 집계합니다.'],
    metrics: [
      { label: '지연 poll', value: '재등록 없음', detail: '고정 경쟁 시나리오' },
      { label: '이전 방 정리', value: '매핑 보존', detail: '고정 경쟁 시나리오' },
      { label: '인증 소비', value: '한 번만 처리', detail: '동시 요청 조건 확인' },
    ],
    checks: [
      { name: '지연 poll', input: '이미 매칭된 사용자의 늦은 요청', output: '재등록 없이 현재 방 유지' },
      { name: '오래된 cleanup', input: '새 방 매핑 뒤 이전 방 정리', output: '새 방 매핑 보존' },
      { name: '인증 1회 소비', input: '같은 VERIFIED 결과 동시 요청', output: '한 번만 소비 · 타인 사용 거절' },
    ],
    record: 'queue-concurrency / summary.json · 기준 6e60b8d → 보강 b960772. 인증 소비는 별도 실제 Redis 통합 테스트입니다.',
  },
  san: {
    team: '7명',
    responsibility: '서버 검색, AI 입력 보호, 작업 상태 관리',
    contribution: '검색 조건과 결과 검증, 입력 근거와 실패 재시도 흐름 정리',
    stack: ['Java 21', 'Spring Boot 3.5.14', 'Spring Data JPA', 'PostgreSQL', 'Redis', 'React 18.3', 'TypeScript 5.9'],
    nodes: [
      { name: '대시보드', detail: '검색어·필터·페이지' },
      { name: '검색 API', detail: '조건을 서버로 전달' },
      { name: '데이터 조회', detail: '사용자 격리·정렬' },
      { name: '결과 검증', detail: '59건 집합 일치' },
    ],
    inspection: ['전체 자료를 내려받아 브라우저에서 거르는 방식의 비용을 측정합니다.', '검색어·태그·기간·페이지를 하나의 요청 계약으로 묶습니다.', '복수 태그 AND, 기간 경계와 LIKE 특수문자를 검증합니다.', 'p95와 함께 결과 집합·사용자 격리·페이지 순서를 대조합니다.'],
    metrics: [
      { label: '검색 첫 페이지 p95', value: '19.04ms', detail: '기존 133.67ms · 합성 1만 건' },
      { label: '검색 결과 대조', value: '59 / 59', detail: '전후 결과 집합 일치' },
      { label: 'AI 관련 테스트', value: '42개 통과', detail: '외부 네트워크 2개 제외' },
    ],
    comparison: { label: '1만 건 검색 첫 페이지 · p95', before: 133.67, after: 19.04, unit: 'ms' },
    checks: [
      { name: '검색 응답', input: '합성 1만 건 · 워밍업 3회 · 반복 20회', output: 'p95 133.67 → 19.04ms' },
      { name: '결과 완결성', input: '동일 검색 조건으로 전후 결과 비교', output: '59건 일치 · 사용자 격리 · 정렬 확인' },
      { name: 'AI 입력·출력', input: 'Mock 모델 · 합성 fixture', output: '42개 통과 · 외부 네트워크 2개 제외' },
    ],
    record: 'card-query / summary.json · 1c8c252. 검색과 AI 테스트는 별도 기록입니다. 작은 데이터 규모의 첫 조회 결과가 일관되게 개선된 것은 아니어서, 여기서는 합성 1만 건 측정만 제시합니다.',
  },
};
