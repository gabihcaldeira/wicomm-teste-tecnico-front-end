import styled from "styled-components";

export const Button = styled.button`
  width: 268px;
  height: 58px;

  background-color: var(--color-white);
  color: var(--color-buy-button);
  border: 2px solid var(--color-buy-button);

  text-align: center;
  font-weight: 700;
  font-size: 11.71px;

  transition: color 0.8s ease-in-out, background-color 0.8s ease-in-out;

  :hover {
    background-color: var(--color-buy-button);
    color: var(--color-white);
  }
`;
