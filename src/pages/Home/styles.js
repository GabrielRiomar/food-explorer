import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.4rem auto 7.2rem;
  grid-template-areas:
    'header'
    'content'
    'footer';
`

export const Content = styled.main`
  grid-area: 'content';
  /* max-width: 136.8rem; */

  display: flex;
  flex-direction: column;
  padding: 2.6rem 12.3rem;

  .banner {
    position: relative;
    margin-bottom: 6.2rem;

    > img {
      position: absolute;
      top: 1.5rem;
      left: -5rem;

      z-index: 1;
    }

    .background {
      width: 100%;
      /* prestar atenção aqui */
      height: 26rem;
      margin-top: 16.4rem;

      position: relative;

      background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

      border: 1px solid #000000;
      border-radius: 0.8rem;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      .title {
        position: absolute;
        top: 8.7rem;
        left: 59.7rem;

        > h2 {
          font-size: 4rem;
          line-height: 5.6rem;
          font-weight: 500;
        }

        > span {
          font-size: 1.6rem;
          line-height: 2.2rem;
          font-weight: 400;
        }
      }
    }
  }

  .card-image {
    position: relative;
    height: 15rem;
    width: 15rem;
  }

  .card-image .cardimg {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    max-width: 70rem;

    .Banner {
      display: none;
    }

    .CardWrapper {
      gap: 2rem;
      max-width: 70rem;
    }
  }

  @media (max-width: 425px) {
    max-width: 37rem;
  }
`
