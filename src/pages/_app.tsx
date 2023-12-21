import '@/styles/globals.css';
import { Inter } from 'next/font/google';

import type { AppProps } from 'next/app';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

// Test

const App = ({ Component, pageProps }: AppProps) => (
  <main className={`${inter.variable} font-sans`}>
    <Component {...pageProps} />
  </main>
);

// eslint-disable-next-line import/no-default-export
export default App;
