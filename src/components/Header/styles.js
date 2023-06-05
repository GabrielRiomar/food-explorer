import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;
  height: 13.68rem;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
  border: 2px solid transparent;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 3.2rem;
  padding: 0 12.3rem;
  position: relative;
`

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  animation: fadeIn 0.5s;

  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 2.4rem;
  font-weight: 700;

  > svg {
    animation: fade 5s infinite;
    width: 7rem;
    height: 7rem;
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
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0 6.4rem;
  flex-grow: 1;
`
