import '@/styles/globals.css';
import { Inter } from 'next/font/google';

import type { AppProps } from 'next/app';

const inter = Inter({ subsets: ['latin'] });

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <style global jsx>
      {`
        :root {
          --font-font: ${inter.style.fontFamily};
        }
      `}
    </style>
    <Component {...pageProps} />
  </>
);

// eslint-disable-next-line import/no-default-export
export default App;
