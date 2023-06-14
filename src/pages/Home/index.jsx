// Styled-component Imports
import { Container, Content} from "./styles"
// Components Imports
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { CardProfile } from "../../components/CardProfile"
import { CardSlider } from "../../components/CardSlider"
// Image Imports
import bannerIMG from '../../assets/main_image.png'
import { SwiperSlide } from "swiper/react"


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
          <section className='menu'>
            <CardSlider title="Dishes">
              <SwiperSlide>
              <CardProfile title="Dish Name1"/>
              </SwiperSlide>
              <SwiperSlide>
              <CardProfile title="Dish Name2"/>
              </SwiperSlide>
              <SwiperSlide>
              <CardProfile title="Dish Name3"/>
              </SwiperSlide>
              <SwiperSlide>
              <CardProfile title="Dish Name4"/>
              </SwiperSlide>
              <SwiperSlide>
              <CardProfile title="Dish Name5"/>
              </SwiperSlide>
              <SwiperSlide>
              <CardProfile title="Dish Name6"/>
              </SwiperSlide>

            </CardSlider>

            <CardSlider title="Drinks">
              <SwiperSlide>
                <CardProfile title="Drink Name"/>
              </SwiperSlide>
              <SwiperSlide>
                <CardProfile title="Drink Name"/>
              </SwiperSlide>
              <SwiperSlide>
                <CardProfile title="Drink Name"/>
              </SwiperSlide>
              <SwiperSlide>
                <CardProfile title="Drink Name"/>
              </SwiperSlide>
            </CardSlider>

            <CardSlider title="Desserts">
              <SwiperSlide>
                <CardProfile title="Dessert Name"/>
              </SwiperSlide>
            </CardSlider>
          </section>
        </Content>

      <Footer/>

    </Container>
  )
}