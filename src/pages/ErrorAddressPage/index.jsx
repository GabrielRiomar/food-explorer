// Import styles.js
import { Container, Content } from './styles'
// Import components
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
// Import navigation
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
// Import svg
import imageError404 from '../../assets/error-img/404 Error with a cute animal-bro.svg'
//Import icon
import { RiArrowLeftSLine } from 'react-icons/ri';


export function ErrorAddressPage(){
    const navigate = useNavigate()

    function handleGoBack(){
        navigate(-1)
    }

    return(
        <Container>
            <Header/>
            <Content>
                <header>
                    <Link to="/">
                        <ButtonText title="Back" icon={RiArrowLeftSLine} onClick={handleGoBack}/>
                    </Link>
                </header>

                <div className="content">
                    <img src={imageError404} alt="Image of 404 Error: Unauthorized access" />

                    <div>
                        <h2>Error 404</h2>
                        <h3>Page not Found!</h3>
                    </div>
                </div>
            </Content>
            <Footer/>
        </Container>
    )
}