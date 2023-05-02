import { GetStaticProps, GetStaticPropsContext } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

export default function NavName() {
  const router = useRouter();
  const name = router.query.name as string;

  return (
    <>
      <div>
        <h1>{name}</h1>
      </div>
    </>
  );
}
