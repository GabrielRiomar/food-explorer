import { Container, Brand, Copyright} from "./styles";
import { Link } from 'react-router-dom';

export function Footer(){
  return(
    <Container>
      <Brand>
        <svg width="30" height="36" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#4D585E"/>
        </svg>
        <h2>food explorer</h2>
      </Brand>
      <Copyright>
        <span>© 2023 - Gabriel Riomar Lopes</span>
      </Copyright>
    </Container>
  )
}