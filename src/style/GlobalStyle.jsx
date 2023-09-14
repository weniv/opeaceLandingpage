import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
      font-family: 'NanumSquareNeo-Variable';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

  :root {
    /* color */
    --main-color: #02FF99;
    --bg-color: #F5F5F5;
    --light-color: #fff;
    --dark-color: #000;
  }

  * {
    box-sizing: border-box;
    font-family: 'NanumSquareNeo-Variable';
  }

  body {
    font-size: 16px;
    font-family: 'NanumSquareNeo-Variable';

    @media (max-width: 1194px) {
      font-size: 12px;
    }
  }

  button {
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
