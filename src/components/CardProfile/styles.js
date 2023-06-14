import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Content = styled.div`
  position: relative;
  width: 30rem;
  height: 46rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: transparent;
  border-radius: 0.8rem;

  .favButton {
    position: absolute;
    top: 1.2rem;
    right: 2rem;

    font-size: 3rem;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
  .cardData {
    display: grid;
    padding: 2.4rem 2.4rem 4.6rem;
    text-align: center;
    align-items: center;

    h2 {
      font-size: 2.4rem;
      margin-bottom: 1.5rem;
      gap: 1rem;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${({ theme }) => theme.COLORS.WHITE_100};
      text-decoration: none;
    }

    p {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};

      margin-bottom: 1.5rem;
      /* height: 3.4rem; */
    }

    h1 {
      font-size: 3.2rem;
      color: ${({ theme }) => theme.COLORS.VALUE_TEXT};
      margin-bottom: 1.5rem;
    }

    img {
      width: 17.6rem;
      height: 17.6rem;
      margin-left: 3.7rem;
    }
  }
`

// export const AddCart = styled.div`
//   display: flex;
//   align-items: center;

//   width: 100%;

//   > span {
//     font-size: 2rem;
//   }

//   > button {
//     font-size: 1.4rem;
//   }
// `
