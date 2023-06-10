import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;

  width: 100%;
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.COLORS.GRAY_200};

  label {
    margin-bottom: 1.6rem;
  }
  input {
    width: 100%;
    height: 4.8rem;

    padding: 1.6rem 1.4rem;
    border: none;
    border-radius: 0.5rem;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  input:focus {
    border: 1px solid #ffffff;
  }

  > svg {
    margin-left: 1.4rem;
  }
`
