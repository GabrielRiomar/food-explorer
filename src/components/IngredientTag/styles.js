import styled from 'styled-components'

export const Container = styled.div`
  > span {
    display: inline-block;
    min-width: 5rem;

    margin: 0.5rem;
    padding: 0.8rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

    border-radius: 0.8rem;

    font-size: clamp(1.2rem, 4vw, 1.8rem);
    font-weight: 400;
    line-height: 140%;
    text-align: center;
  }
`
