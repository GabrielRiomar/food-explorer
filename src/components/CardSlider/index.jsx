import { Container, Content } from "./styles";

// Import SwiperJS
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import modules according to the styles
import { Navigation, Pagination } from "swiper";

export function Carousel({children}) {

    return (
        <Container>
            <Content>

                <Swiper
                    grabCursor={true}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
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
                            spaceBetween: 130,
                        },
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>{children}</SwiperSlide>

                </Swiper>

            </Content>
        </Container>
    );
}

<div>
            <div className="slide-container">

              <div className="slide-content">

                <div className="card-wrapper">

                  <div className="card">

                    <div className="image-content">
                    
                      <div className="card-image">
                        <img src="../../assets/plate-img/Mask group.png" className="card-img" />
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>