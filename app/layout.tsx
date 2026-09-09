import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '유다현 포트폴리오',
  description: '유다현 개발자 포트폴리오',
  icons: {
    icon: '/assets/hanwha-symbol.png',
    shortcut: '/assets/hanwha-symbol.png',
    apple: '/assets/hanwha-symbol.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
