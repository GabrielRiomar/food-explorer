import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
}

  border-style, input, textarea, button, h1{
    font-family: 'Roboto Slab', sans-serif;
    font-size: 1.6rem;
    outline: none;
  }

  a{
    text-decoration: none;
  }

  a, button{
    cursor: pointer;
    transition: filter 0.2s;
  }

  a:hover, button:hover{
    filter: brightness(0.9);
  }
`
