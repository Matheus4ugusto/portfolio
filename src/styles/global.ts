import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sometype+Mono&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Sometype Mono', monospace, sans-serif;
  }

  body{
    min-height: 100vh;
    max-width: 100vw;
  }

  button{
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`

export default GlobalStyles;