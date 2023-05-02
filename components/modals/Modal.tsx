// import ReactPortal from './ReactPortal';

import {
  ModalCloseStyle,
  ModalContainerStyle,
  ModalTitleContainerStyle,
  ModalTitleStyle,
  XStyled,
} from 'styles/ModalStyle';

import { Overlay } from 'styles/NavBarMobileStyles';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const ReactPortal = dynamic(() => import('../ReactPortal'), { ssr: true });

interface ModalProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

export default function Modal({
  title,
  children,
  isOpen,
  handleClose,
}: ModalProps) {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? handleClose() : null;

    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => document.body.removeEventListener('keydown', closeOnEscapeKey);
  }, [handleClose]);

  useEffect(() => {
    const closeOnOutsideClick = (e: MouseEvent) => {
      const modal = document.querySelector('#modal');
      if (modal && !modal.contains(e.target as Node)) {
        handleClose();
      }
    };

    document.body.addEventListener('click', closeOnOutsideClick);

    return () =>
      document.body.removeEventListener('click', closeOnOutsideClick);
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return (): void => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <>
        <Overlay onClick={handleClose} />
        <ModalContainerStyle
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          onClick={(e: any) => e.stopPropagation()}
        >
          <ModalTitleContainerStyle>
            <ModalTitleStyle>{title}</ModalTitleStyle>
            <ModalCloseStyle onClick={handleClose}>
              <XStyled />
            </ModalCloseStyle>
          </ModalTitleContainerStyle>

          <div>{children}</div>
        </ModalContainerStyle>
      </>
    </ReactPortal>
  );
}
