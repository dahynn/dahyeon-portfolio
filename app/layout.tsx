import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '유다현 | 한화금융 포트폴리오',
  description: '한화금융 지원용 유다현 포트폴리오 초안',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
