import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd,
  input {
    margin: 0;
  }

  input {
    padding: 0;
  }

  body {
    line-height: 1.6;
    font-size: 18px;
    font-family: "Times New Roman", Times, serif;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
