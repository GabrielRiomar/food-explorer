//Import stylesjs
import { Container, Content } from "./styles";
//Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import modules according to the styles
import { A11y, Navigation, Pagination } from 'swiper';
//Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/a11y'

export function CardSlider({ title, children }) {
  const settings = {
    navigation: true,
    loop: true,
    // loopFillGroupWithBlank: true,
    grabCursor: true,
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.20": {
        slidesPerView: 4,
        spaceBetween: 80,
      },
    },
  };

  if (children.length < 3) {
    return (
      <Container>
        <h3>{title}</h3>
        <Content>
          {children}
        </Content>
      </Container>
    );
  }

  return (
      <Container>
        <Content>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            {...settings}
          >
              {children}
          </Swiper>
        </Content>
      </Container>
    );
}