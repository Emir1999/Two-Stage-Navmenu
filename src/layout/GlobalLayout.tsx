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
    min-height: 100vw;
  }

  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  body {
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');    
    font-family: 'Inter', sans-serif;
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
