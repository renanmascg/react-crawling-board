import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  }

  body {
    background: #F4F6F9;
    color: #3a3a3a;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  .toast-signin {
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
  }
`;
