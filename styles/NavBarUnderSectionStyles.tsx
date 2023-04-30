import styled from 'styled-components';

interface NavBarUnderContainerProps {
  right?: any;
}

export const NavBarUnderContainer = styled.div<NavBarUnderContainerProps>`
  position: absolute;
  top: 0.2rem;
  background-color: rgba(255, 255, 255, 1);
  max-width: 30rem;
  max-height: 10rem;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
`;
