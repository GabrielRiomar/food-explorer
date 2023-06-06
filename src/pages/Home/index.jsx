import { Container, Content} from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import bannerIMG from '../../assets/main_image.png'
import { Link } from "react-router-dom"

export function Home(){
  return(
    <Container>
      <Header/>
      
        <Content>
              <img src={bannerIMG} alt="Macarrons" />

              <div className='background'>
                <div className='title'>
                  <h1>Sabores inigualáveis</h1>
                  <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                </div>
              </div>
        </Content>

      <Footer/>

    </Container>
  )
}