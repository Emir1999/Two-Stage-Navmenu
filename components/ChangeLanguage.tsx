import {
  LanguageButtonsStyle,
  LanguageContainerStyle,
  LanguageSpanStyle,
} from 'styles/ChangeLanguageStyles';

import { ChangeLanguageProps } from '@/models/props/ChangeLanguageProps';
import Modal from './modals/Modal';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface ModalProps {
  title: string;
  openModal: boolean;
  setOpenModal: () => void;
}

export default function ChangeLanguage({
  title,
  openModal,
  setOpenModal,
}: ChangeLanguageProps) {
  const LANGUAGES = [
    { key: 'de-CH', value: 'German' },
    { key: 'en-CH', value: 'English' },
  ];

  const router = useRouter();

  return (
    <>
      <Modal
        title={title}
        isOpen={openModal}
        handleClose={() => setOpenModal(!openModal)}
      >
        <LanguageContainerStyle>
          {LANGUAGES.map((lang, index) => (
            <LanguageButtonsStyle
              onClick={() => {
                router.push(router.pathname, router.asPath, {
                  locale: lang.key,
                });
                setOpenModal(!openModal);
              }}
              key={index}
              isCurrentLanguage={lang.key == router.locale ? true : false}
              value={lang.key}
            >
              <LanguageSpanStyle>{lang.value}</LanguageSpanStyle>
            </LanguageButtonsStyle>
          ))}
        </LanguageContainerStyle>
      </Modal>
    </>
  );
}
