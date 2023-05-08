import { GetStaticProps, GetStaticPropsContext } from 'next';

import { Title } from 'styles/PageStyles';
import { allUrls } from '@/lib/urls';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export default function NavName() {
  const router = useRouter();
  const { t } = useTranslation();
  const name = router.query.name as string;

  return (
    <>
      <Title>{t('links.' + name)}</Title>
    </>
  );
}

export const getStaticPaths = async ({ locales }: any) => {
  const params: any = [];

  locales.forEach((locale: any) => {
    allUrls.forEach((url) => params.push({ params: { name: url }, locale }));
  });

  return {
    paths: params,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  locale,
}: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'de-CH', ['common'])),
    },
  };
};
