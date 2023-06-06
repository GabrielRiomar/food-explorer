import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  border: none;
  font-size: 1.6rem;

  display: flex;
  align-items: center;

  > svg {
    margin-right: 0.8rem;
    height: 3rem;
    width: 5rem;
  }
`
