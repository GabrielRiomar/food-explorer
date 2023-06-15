import { Container } from './styles'


export function ButtonText({icon: Icon, link, title, ...rest}){
  return(
    <Container
      type="button"
      link={link}
      {...rest}
    >
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  )
}