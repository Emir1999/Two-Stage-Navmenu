import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  // this is the shared style through the whole project.
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }
 
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background-color: rgba(255, 255, 255, 1);
  }
`;

const GlobalLayout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default GlobalLayout;
