import styled, { css } from 'styled-components';

import { Globe } from 'react-feather';

interface LanguageButtonsStyleProps {
  isCurrentLanguage: boolean;
}

export const LanguageSpanStyle = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const LanguageButtonsStyle = styled.button`
  padding: 0.8rem 0.8rem;
  width: 100%;
  border: 0.2rem solid transparent;
  background-color: rgba(245, 245, 245, 1);
  border-radius: 0.3rem;

  ${(props: LanguageButtonsStyleProps) =>
    props.isCurrentLanguage
      ? css`
          background-color: rgba(220, 36, 31, 1);
          border: 0.2rem solid rgba(220, 36, 31, 1);
          color: rgba(255, 255, 255, 1);
        `
      : css`
          &:hover {
            background-color: #dedede;
            color: rgba(220, 36, 31, 1);
          }
        `}
`;

export const LanguageContainerStyle = styled.div`
  display: flex;
  gap: 1rem;
`;

export const GlobeStyle = styled(Globe)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const LanguageButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  border: none;
  background-color: transparent;
  padding: 0.5rem;
  border-radius: 0.3rem;
  margin-left: 0.5rem;

  &:hover {
    background-color: #dedede;
  }

  &:hover ${GlobeStyle} {
    color: rgba(220, 36, 31, 1);
  }
`;

export const LanguageContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
