import { useRouter } from 'next/router';
import { ChangeLanguageStyle } from 'styles/ChangeLanguageStyles';

export interface ChangeLanguageProps {
  position?: string;
}

export interface Language {
  key: string;
  value: string;
}

export default function ChangeLanguage({ position }: ChangeLanguageProps) {
  const languages: Language[] = [
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
        position={position as string}
        name="languages"
        id="change-language"
        value={router.locale?.toUpperCase()}
        onChange={(e) => onLanguageChange(e)}
      >
        {languages.map((lang: Language, index: number) => (
          <option key={index} value={lang.key}>
            {lang.value}
          </option>
        ))}
      </ChangeLanguageStyle>
    </>
  );
}
