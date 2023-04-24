import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ChangeLanguage() {
  const LANGUAGES = [
    { key: 'de-CH', value: 'German' },
    { key: 'en-CH', value: 'English' },
  ];

  const [selectedLang, useSelectedLanguage] = useState<string>(
    LANGUAGES[0].key
  );

  const router = useRouter();

  return (
    <>
      <select
        name="languages"
        id="change-language"
        value={selectedLang}
        onChange={(e) => {
          useSelectedLanguage(e.target.value);
          router.push(router.pathname, router.asPath, {
            locale: e.target.value,
          });
        }}
      >
        {LANGUAGES.map((lang, index) => (
          <option key={index} value={lang.key}>
            {lang.value}
          </option>
        ))}
      </select>
    </>
  );
}
