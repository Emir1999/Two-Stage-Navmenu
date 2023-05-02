import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
