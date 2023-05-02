import { GetStaticProps, GetStaticPropsContext } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

export default function Navigate() {
  const router = useRouter();
  // const name = router.query.name as string;

  return (
    <>
      <div>
        <h1>TEESt</h1>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({
  locale,
}: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'de-CH', ['common'])),
    },
  };
};
