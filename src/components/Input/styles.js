import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  margin-bottom: 0.8rem;
  border-radius: 1rem;

  > input {
    display: flex;
    height: 5.5rem;
    width: 100%;

    padding: 1.9rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    background: transparent;
    border: none;
    text-align: center;

    ::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      padding: 1.6rem 0;
    }
  }
`
