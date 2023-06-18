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
import {useState, useEffect} from 'react'
import { api } from '../../services/api';

export function Home(){
  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get(`/dishes?name=${search}`);
        setDishes(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDishes();
  }, [search]);
  
  return(
    <Container>
      <Header search={setSearch}/>
      
        <Content>
          <section className='banner'>
              <img src={bannerIMG} alt="variados" />
              <div className='background'>
                <div className="title">
                  <h2>Unparalleled flavors</h2>
                  <span>Feel the care of the preparation with selected ingredients</span>
                </div>
              </div>
            </section>
  
          <section className='menu'>
            {
              dishes.filter(dish => dish.category == 'dishes').length > 0 &&
                <CardSlider title="Dishes">
                  <SwiperSlide>
                  {
                    dishes.filter(dish => dish.category == "dishes").map((dish) => (
                    <CardProfile
                      key={String(dish.id)}
                      data={dish}
                    />
                    ))
                  }
                  </SwiperSlide>
                </CardSlider>
            }

            {
              dishes.filter(dish => dish.category == 'drinks').length > 0 &&
                <CardSlider title="Drinks">
                  <SwiperSlide>
                    {
                      dishes.filter(dish => dish.category == "drinks").map((dish) => (
                        <CardProfile
                          key={String(dish.id)}
                          data={dish}
                        />
                        ))
                    }
                  </SwiperSlide>
                </CardSlider>
            }

            {
              dishes.filter(dish => dish.category == 'desserts').length > 0 &&
                <CardSlider title="Desserts">
                  <SwiperSlide>
                    {
                      dishes.filter(dish => dish.category == "desserts").map((dish) => (
                        <CardProfile
                          key={String(dish.id)}
                          data={dish}
                        />
                        ))
                    }
                  </SwiperSlide>
                </CardSlider>
            }
          </section>
        </Content>

      <Footer/>

    </Container>
  )
}