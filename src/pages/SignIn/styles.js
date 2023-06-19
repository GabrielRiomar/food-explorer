import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  animation: fadeIn 0.8s;

  > div {
    display: flex;
    align-items: center;
    gap: 2rem;

    > h1 {
      font-size: 4.2rem;
      line-height: 5rem;
    }

    > svg {
      animation: fade 6s infinite;
      width: 7rem;
      height: 7rem;
    }
  }
  @keyframes fade {
    0% {
      opacity: 0.1;
      transform: scale(0.95);
    }
    100% {
      opacity: 0.7;
      transform: scale(1);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media only screen and (max-width: 767px) {
    justify-content: center;

    > div {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    > div > h1 {
      font-size: 3rem;
      line-height: 4rem;
    }

    > div > svg {
      width: 5rem;
      height: 5rem;
    }
  }
`
export const Form = styled.form`
  padding: 0 13.6rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
  min-width: 52rem;
  min-height: 54rem;
  border-radius: 1.6rem;
  gap: 3.2rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  > h2 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.4rem;
    line-height: 1.8rem;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-size: 1.6rem;
  }
`
