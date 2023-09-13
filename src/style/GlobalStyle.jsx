import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
      font-family: 'NanumSquareNeo-Variable';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
      font-weight: normal;
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
  }

  body {
    font-size: 16px;
    font-family: 'NanumSquareNeo-Variable';
  }

  button {
    border: none;
    cursor: pointer;
  }
`;
