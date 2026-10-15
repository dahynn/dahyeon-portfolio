import { CheckCheck, Lightbulb, Route, type LucideIcon } from 'lucide-react';

export type TalentValue = 'discipline' | 'creative-thinking' | 'sense-of-purpose';

const symbols: Record<TalentValue, LucideIcon> = {
  discipline: CheckCheck,
  'creative-thinking': Lightbulb,
  'sense-of-purpose': Route,
};

export function TalentSymbol({ value }: { value: TalentValue }) {
  const Icon = symbols[value];
  return <span className={`talent-symbol talent-symbol-${value}`} aria-hidden="true">
    <Icon size={28} strokeWidth={1.7} />
  </span>;
}
