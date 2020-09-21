import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {

    margin: 0;
    font-family: 'Montserrat';
  }
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
  }
  p {
    font-size: 16px;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  h1 {
    font-weight: bold;
    font-size: 21px;
    color: ${({ theme }) => theme.colors.text.title};
    
  }
  
`

export default GlobalStyle
