import styled from 'styled-components'

export const Container = styled.div`
  grid-area: 'content';
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 121.2rem;
  height: 100vh;
  margin: 4rem auto;
  padding: 3.5rem 4rem;

  .header {
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-self: flex-start;
  }

  button:first-child {
    font-size: 2.4rem;
    font-weight: 500;
  }
  .content {
    align-items: center;
    text-align: center;
    margin: 6rem;
  }

  img {
    width: 30rem;
    height: 30rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    h2,
    h3 {
      font-size: 3rem;
    }
    span {
      font-size: 6rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`
