import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6.2rem;

  @keyframes scale-up-center {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }
`

export const Content = styled.div`
  width: 166rem;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    gap: 3.2rem;
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 10rem;
    height: 51rem;
    margin: -25.6rem -1rem;

    color: ${({ theme }) => theme.COLORS.VALUE_TEXT};
    font-weight: bolder;
    mask-image: none;
  }
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  .swiper-button-prev {
    background: linear-gradient(
      to left,
      transparent 0%,
      ${({ theme }) => theme.COLORS.BACKGROUND_100} 100% 0%,
      transparent 100%
    );
  }
  .swiper-button-next {
    background: linear-gradient(
      to right,
      transparent 0%,
      ${({ theme }) => theme.COLORS.BACKGROUND_100} 100% 0%,
      transparent 100%
    );
  }

  @keyframes scale-up-center {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }
`
