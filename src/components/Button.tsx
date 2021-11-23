import styled from 'styled-components';

const Button = styled.button.attrs({
  className: 'count-button',
  type: 'button',
})`
  font-size: 2.5rem;
  cursor: pointer;
  border-radius: 12px;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  background: ${({ theme }) => theme.colors.lightGray};
  color: black;

  :disabled {
    cursor: not-allowed;
  }
`;

export default Button;
