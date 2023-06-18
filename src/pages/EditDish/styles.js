import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'content'
    'footer';

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export const Content = styled.div`
  grid-area: 'content';
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 121.2rem;
  height: 100%;
  margin: 4rem auto;
  padding: 3.5rem 4rem;

  .button {
    display: flex;
    justify-content: center;
    margin-top: 3.2rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem;

    .button {
      margin-top: 2rem;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 3.2rem;

  h1 {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 4.5rem;
    text-align: center;

    margin: 2.4rem 0 0;
  }

  button:first-child {
    font-size: 2.4rem;
  }

  > header {
    justify-content: center;
    text-align: center;
  }

  .details {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 3.2rem;
  }

  .name {
    flex-grow: 1;
  }

  .category select {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
    border-radius: 0.5rem;
    border: none;
    height: 4.8rem;
    width: 36.4rem;
    padding: 1.2rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  .category select option.default {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  .category select option {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  .dishImage {
    width: 100%;

    input[type='file'] {
      display: none;
    }

    label {
      display: flex;
      justify-content: center;
      padding: 1.1rem 0.5rem;
      gap: 0.5rem;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      border-radius: 50%;
      line-height: 2.4rem;
      cursor: pointer;
    }
  }

  .ingredients {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    width: 100%;

    height: 3rem;
    gap: 1.2rem;
    padding: 0.8rem;

    border-radius: 0.8rem;
    margin-bottom: 3.2rem;
    border: none;
  }

  .ingredientsPricing {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3.2rem;
  }

  .price {
    max-width: 15rem;
  }

  .buttons {
    display: flex;
    /* justify-content: flex-end; */
    max-width: 34rem;
    gap: 3.2rem;

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
  }

  @media only screen and (min-width: 768px) {
    h1 {
      text-align: left;
    }

    .dishImage {
      max-width: 22.9rem;
    }

    .dish {
      max-width: 85.9rem;
      width: 100%;
    }

    > .details {
      display: flex;
      align-items: center;
    }

    .ingredients {
      display: flex;
      flex-wrap: wrap;
      align-content: center;

      width: 100%;
      max-width: 83.7rem;
      height: auto;
      padding: 0.8rem;
      margin-bottom: 0;
      border-radius: 0.8rem;
    }

    .ingredientsPricing {
      display: flex;
      justify-content: space-between;
      gap: 3.2rem;
    }

    .price {
      max-width: 25.1rem;
      width: 100%;
    }
  }

  @media only screen and (max-width: 480px) {
    .ingredients {
      gap: 1.6rem;
      padding: 0.6rem;
    }
  }
`
export const Image = styled.div`
  position: relative;
  margin: 0 3rem 3rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid ${({ theme }) => theme.COLORS.WHITE_100};
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.WHITE_100};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    }

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.LOGO_COLOR};
    }
  }
`
