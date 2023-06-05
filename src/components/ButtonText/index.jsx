import { Container } from './styles'
import { FiLogOut } from 'react-icons/fi'

export function ButtonText({title, ...rest}){
  return(
    <Container type="button" {...rest}>
      <FiLogOut/>{title}
    </Container>
  )
}