//Import stylesjs
import { Container, Content } from "./styles";
//Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import modules according to the styles
import { Navigation, Pagination } from 'swiper';
//Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function CardSlider({ title, children }) {
  const settings = {
    navigation: true,
    loop: true,
    // loopFillGroupWithBlank: true,
    grabCursor: true,
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 160,
      },
    },
  };

  // if (children.length === 1) {
  //   settings.breakpoints[576].slidesPerView = 1;
  // }  

  return (
      <Container>
        <h3>{title}</h3>
        <Content>
          <Swiper
            modules={[Navigation, Pagination]}
            {...settings}
          >

              {children}

          </Swiper>
        </Content>
      </Container>
    );
}