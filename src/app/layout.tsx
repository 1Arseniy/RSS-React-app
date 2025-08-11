import type { Metadata } from 'next';

import { Menu } from '@/components';
import { ThemeProvider } from '@/context/ThemeProvider';

// import { Provider } from 'react-redux';
// import { store } from '@/store/index';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Rick&Morty',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <div id="root">
            <Menu>{children}</Menu>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
