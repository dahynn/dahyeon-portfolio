import type { Metadata } from 'next';
import './globals.css';
import './evidence-stories.css';

export const metadata: Metadata = {
  title: '유다현 포트폴리오',
  description: '유다현 개발자 포트폴리오',
  openGraph: { title: '유다현 | 백엔드 개발자 포트폴리오', description: '사용자의 클릭 한 번부터 데이터의 마지막 줄까지, 끝까지 따라가는 백엔드 개발자', images: ['/assets/portfolio-share.png'] },
  twitter: { card: 'summary_large_image', images: ['/assets/portfolio-share.png'] },
  icons: { icon: 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%2F%3E' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
