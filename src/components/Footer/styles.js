import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.footer`
  grid-area: 'footer';
  height: 13.66rem;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
  border: 2px solid transparent;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem 12.3rem;
  margin: 0 auto;
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  color: ${({ theme }) => theme.COLORS.WITHE_200};

  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3rem;

  > svg {
    animation: fade 5s infinite;
    width: 5rem;
    height: 5rem;
  }
`

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  color: ${({ theme }) => theme.COLORS.WITHE_200};

  font-size: 1.4rem;
  font-weight: 400;
`
