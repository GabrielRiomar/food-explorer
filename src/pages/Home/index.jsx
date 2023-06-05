import { Container, Content, Banner } from "./styles"
import { FiPlus } from "react-icons/fi"
import { Header } from "../../components/Header"
import bannerIMG from '../../assets/main_image.png'
import { Link } from "react-router-dom"

export function Home(){
  return(
    <Container>
      <Header/>
      
        <Content>
          <Banner>

              <img src={bannerIMG} alt="Macarrons" />

              <div className='background'>
                <div className='title'>
                  <h1>Sabores inigualáveis</h1>
                  <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                </div>
              </div>


          </Banner>       
        </Content>

    </Container>
  )
}