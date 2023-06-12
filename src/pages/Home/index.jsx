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
import { CardProfile } from "../../components/CardProfile"

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

        <CardProfile title="Dish Name"/>
        <CardProfile title="Drink Name"/>
        <CardProfile title="Dessert Name"/>
        </Content>

      <Footer/>

    </Container>
  )
}