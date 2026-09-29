import type { Metadata } from 'next';
import './globals.css';
import './evidence-stories.css';

export const metadata: Metadata = {
  title: '유다현 포트폴리오',
  description: '유다현 개발자 포트폴리오',
  openGraph: { title: '유다현 | 한화생명 백엔드 개발자 포트폴리오', description: '고객의 금융 여정을 끝까지 따라가는 개발자', images: ['/assets/social-share.png'] },
  twitter: { card: 'summary_large_image', images: ['/assets/social-share.png'] },
  icons: {
    icon: '/assets/hanwha-symbol.png',
    shortcut: '/assets/hanwha-symbol.png',
    apple: '/assets/hanwha-symbol.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
