import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_INGREDIENT};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border: ${({ theme, isNew }) =>
    isNew ? `0.1rem dashed ${theme.COLORS.GRAY_300}` : 'none'};

  margin-right: 1.6rem;
  border-radius: 0.8rem;
  padding: 0.2rem;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  > input {
    height: 3.2rem;
    width: 100%;

    padding: 1rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`
