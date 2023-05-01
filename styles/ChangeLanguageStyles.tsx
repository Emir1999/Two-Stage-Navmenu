import { ChangeLanguageProps } from '@/components/ChangeLanguage';
import styled, { css } from 'styled-components';

export const ChangeLanguageStyle = styled.select`
  height: 4rem;

  @media (max-width: 768px) {
    ${(props: ChangeLanguageProps) =>
      props.position == 'navbar'
        ? css`
            visibility: hidden;
            width: 0;
            height: 0;
          `
        : null}
  }
`;
