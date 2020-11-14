import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --color-white: #fff;
  --color-dark-cyan: hsl(185, 75%, 39%);
  --color-dark-blue: hsl(229, 23%, 23%);
  --color-gray-blue: hsl(227, 10%, 46%);
  --color-gray: hsl(0, 0%, 59%);

  /* Font Weights */
  --weight-bold: 700;
  --weight-regular: 400;
}
/* reset */
html {
box-sizing: border-box;
font-size: 62.5%;
}

*, *::before, *::after {
  box-sizing: inherit;
}

html, body, #root, .App {
  height: 100%;
}

body {
  margin: 0;
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
  background-color: var(--color-white);
  font-family: 'Kumbh Sans', sans-serif;
}

h1,
h2,
h3,
p {
  margin: 0;
}

.App {
  background-color: var(--color-dark-cyan);
}
`;

export default GlobalStyle;