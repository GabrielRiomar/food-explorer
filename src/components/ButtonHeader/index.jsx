import { Container } from './styles'

export function ButtonHeader({icon: Icon, title, link, ...rest}){
    return(
        <Container
            to={link}
            {...rest}
        >
                {Icon && <Icon size={20} />}
                {title}
        </Container>
    )
}