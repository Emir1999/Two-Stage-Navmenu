import { useRouter } from 'next/router';
import { ChangeLanguageStyle } from 'styles/ChangeLanguageStyles';

export interface ChangeLanguageProps {
  position?: string;
}

export default function ChangeLanguage({ position }: ChangeLanguageProps) {
  const LANGUAGES = [
    { key: 'de-CH', value: 'German' },
    { key: 'en-CH', value: 'English' },
  ];

  const router = useRouter();

  const onLanguageChange = (e: any) => {
    router.push(router.asPath, undefined, {
      locale: e.target.value,
    });
  };

  return (
    <>
      <ChangeLanguageStyle
        position={position}
        name="languages"
        id="change-language"
        value={router.locale?.toUpperCase()}
        onChange={(e) => onLanguageChange(e)}
      >
        {LANGUAGES.map((lang, index) => (
          <option key={index} value={lang.key}>
            {lang.value}
          </option>
        ))}
      </ChangeLanguageStyle>
    </>
  );
}
