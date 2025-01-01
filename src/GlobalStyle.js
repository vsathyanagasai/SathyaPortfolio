// src/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  @media (max-width: 768px) {
    body {
      background-color: #f0f0f0; /* Example of responsive styling */
    }
  }
`;
