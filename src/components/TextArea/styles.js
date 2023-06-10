import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 17rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  border-radius: 0.8rem;
  padding: 1.4rem;

  border: none;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
