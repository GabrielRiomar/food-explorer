import { Container, Brand, Copyright} from "./styles";
import Icon from '../../assets/images/icongray.svg'

export function Footer(){
  return(
    <Container>
      <Brand>
        <img src={Icon} alt="Icone Food Explorer cinza" />
        <h2>food explorer</h2>
      </Brand>
      <Copyright>
        <span>© 2023 - Gabriel Riomar Lopes</span>
      </Copyright>
    </Container>
  )
}