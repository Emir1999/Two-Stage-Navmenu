import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { Title } from 'styles/PageStyles';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Title>{t('index')}</Title>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  locale,
}: GetServerSidePropsContext) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'de-CH', ['common'])),
  },
});
