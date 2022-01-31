import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    overflow-x: hidden;
    background-color:var(--background)
  }

  :root{
    --background: black;
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #33CC95;
    --blue-light: #6933FF;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --shape:#FFF;
  }
`;
 
export default GlobalStyle;