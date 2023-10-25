import { Noto_Sans_KR } from 'next/font/google';
import { cookies } from 'next/headers';

import { COLOR_THEME_COOKIE_NAME } from '@/constants';
import '@/styles/global.scss';

import styles from './layout.module.scss';

import type { Metadata } from 'next';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'fallback',
  fallback: [
    '-apple-system',
    'Malgun Gothic',
    'Apple SD Gothic Neo',
    'Roboto',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif'
  ],
  variable: '--font-family-noto'
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const savedTheme = cookies().get(COLOR_THEME_COOKIE_NAME);
  const theme = savedTheme?.value || 'light';

  return (
    <html lang="ko" className={notoSansKr.className} data-color-theme={theme}>
      <body>
        <main className={styles.wrapper}>{children}</main>
      </body>
    </html>
  );
}
