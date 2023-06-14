import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  display: grid;
  /* grid-template-rows: 10rem auto; */
  grid-template-areas:
    'header'
    'content'
    'footer';
`

export const Content = styled.div`
  grid-area: 'content';
  padding: 3.5rem 4rem;
  max-width: 121rem;
  margin: 0 auto;
`

export const DetailsInfo = styled.section`
  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 121.2rem;
    margin: auto;
    padding: 3.5rem 4rem;

    h1 {
      font-size: clamp(2rem, 4vw, 4rem);
      /* font-weight: 500; */
      padding-bottom: 2.4rem;
    }

    p {
      max-width: 60rem;
      font-size: 1.8rem;
      line-height: 140%;
      padding-bottom: 2.6rem;
    }

    img {
      width: 20rem;
      height: 20rem;
      /* border-radius: 50%;
      object-fit: cover; */
    }

    @media only screen and (min-width: 768px) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 2.4rem;

      img {
        width: 40rem;
        height: 40rem;
        /* border-radius: 50%;
        object-fit: cover; */
      }
    }
  }
`

export const Action = styled.section`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  padding-top: 4.8rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.4rem;
  }

  > a {
    display: inline;
    width: 100%;
  }
  .delete {
    background: none;
    border: 0.2rem dashed ${({ theme }) => theme.COLORS.BUTTON};
    padding: 0;
    transition: 0.5s all ease;

    &:hover {
      border: none;
      background: ${({ theme }) => theme.COLORS.TEXT_DELETE};
    }
  }
`
