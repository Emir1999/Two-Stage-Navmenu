import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import GlobalLayout from '@/layout/GlobalLayout';
import Layout from '@/components/Layout';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalLayout>
  );
}

export default appWithTranslation(App);
