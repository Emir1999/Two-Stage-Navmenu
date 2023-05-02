import { ChangeLanguageProps } from '@/models/props/ChangeLanguageProps';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ChangeLanguageStyle } from 'styles/ChangeLanguageStyles';

export default function ChangeLanguage({ position }: ChangeLanguageProps) {
  const LANGUAGES = [
    { key: 'de-CH', value: 'German' },
    { key: 'en-CH', value: 'English' },
  ];

  const [selectedLang, useSelectedLanguage] = useState<string>(
    LANGUAGES[0].key
  );
  const router = useRouter();

  const onLanguageChange = (e: any) => {
    useSelectedLanguage(e.target.value);
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
        value={selectedLang}
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
