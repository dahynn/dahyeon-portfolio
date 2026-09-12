/* oxlint-disable next/no-img-element -- 기존 투명 PNG 인재상 심볼을 재사용합니다. */
export type TalentValue = 'discipline' | 'creative-thinking' | 'sense-of-purpose';

const labels: Record<TalentValue, string> = {
  discipline: 'Discipline · 철저한 자기규율',
  'creative-thinking': 'Creative Thinking · 창의적 문제 해결',
  'sense-of-purpose': 'Sense of Purpose · 뚜렷한 목적의식',
};

export function TalentSymbol({ value }: { value: TalentValue }) {
  return <span className={`talent-symbol talent-symbol-${value}`} title={labels[value]}>
    <img src={`/assets/talent-${value}.png`} alt={labels[value]} width="1254" height="1254" />
  </span>;
}
