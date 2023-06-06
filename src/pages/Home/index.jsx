// Styled-component Imports
import { Container, Content} from "./styles"
// Components Imports
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
// Image Imports
import bannerIMG from '../../assets/main_image.png'
import { Link } from "react-router-dom"
//import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css'

export function Home(){
  return(
    <Container>
      <Header/>
      
        <Content>
          <section className='banner'>
              <img src={bannerIMG} alt="variados" />

              <div className='background'>
                <div className="title">
                  <h2>Sabores inigualáveis</h2>
                  <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                </div>
              </div>
            </section>

          <div>
            <div className="swipe-container">

              <div className="swipe-content">

                <div className="card-wrapper">

                  <div className="card">

                    <div className="image-content">
                      
                      <span className="overlay"></span>
                      <div className="card-image">
                        <img src="../../assets/icon.svg" className="card-img" />
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>

      <Footer/>

    </Container>
  )
}