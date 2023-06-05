import { Container } from './styles'
import { CiReceipt } from 'react-icons/ci'

export function ButtonHeader({title, ...rest}){
    return(
        <Container to='#' {...rest} >
            <CiReceipt/>
            {title}
        </Container>
    )
}