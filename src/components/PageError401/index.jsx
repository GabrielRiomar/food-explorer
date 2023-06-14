// Import styles.js
import { Container } from './styles'
// Import components
import { ButtonText } from '../ButtonText'
// Import navigation
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
// Import svg
import imageError401 from '../../assets/error-img/401 Error Unauthorized-bro.svg'
//Import icon
import { RiArrowLeftSLine } from 'react-icons/ri';


export function PageError401(){
    const navigate = useNavigate()

    function handleGoBack(){
        navigate(-1)
    }

    return(
        <Container>
            <header>
                <Link to="/">
                    <ButtonText title="Back" icon={RiArrowLeftSLine} onClick={handleGoBack}/>
                </Link>
            </header>

            <div className="content">
                <img src={imageError401} alt="Image of 401 Error: Unauthorized access" />

                <div>
                    <h2>Error 401</h2>
                    <span>Uh-oh!</span>
                    <h3>Unauthorized access for this page!</h3>
                </div>
            </div>
        </Container>
    )
}