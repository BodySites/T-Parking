import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';

import './globals.css';
import theme from '@/theme';
import ReduxProvider from '@/app/redux/redux-provider';
import { Provider } from '@/components/auth/Provider';

const inter = Inter({
  weight: ['400', '600', '700'],
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'T-Parking',
  description:
    'Веб-приложение для удобного администрирования сервиса для бронирования мест на парковках Т-банка',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        <ReduxProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <Provider>{children}</Provider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
