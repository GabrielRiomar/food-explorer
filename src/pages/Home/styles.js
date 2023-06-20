import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-width: 35rem;
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
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 3.6rem 12rem;

  .banner {
    position: relative;
    margin-bottom: 6.2rem;

    img {
      position: absolute;
      top: 1.5rem;
      left: -5rem;

      z-index: 1;
    }

    .background {
      width: 100%;
      height: 26rem;
      margin-top: 16.4rem;

      position: relative;

      background-color: rgba(9, 30, 38, 0.8); /* Cor com transparência */

      border: 1px solid #000000;
      border-radius: 0.8rem;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      display: flex;
      align-items: center;
      justify-content: center;

      .title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        h2 {
          font-size: clamp(1rem, 6vw, 4rem);
          line-height: 5.6rem;
          font-weight: 500;
        }

        span {
          font-size: clamp(1rem, 2.5vw, 1.6rem);
          line-height: 2.2rem;
          font-weight: 400;
        }
      }
    }
  }

  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: clamp(2rem, 2rem + 1vw, 3.2rem);
    }
  }

  @media (max-width: 768px) {
    .banner {
      img {
        display: none;
      }

      .background {
        margin-top: 3.2rem;
      }
    }
    .menu {
      width: 60rem;
    }
  }
`
