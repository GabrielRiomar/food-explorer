import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  background-color: ${({ theme }) => theme.COLORS.BUTTON};
  color: ${({ theme }) => theme.COLORS.WHITE_100};
  border: none;

  padding: 0 1.6rem;
  font-weight: 500;
  border-radius: 1rem;

  &:disabled {
    opacity: 0.5;
  }
`
