import '@/styles/globals.css';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
  </>
);

// eslint-disable-next-line import/no-default-export
export default App;
