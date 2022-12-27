import styled from "styled-components";

export const FragranceSection = styled.section`
  width: 1440px;
  height: 868px;
  padding: 235px 852px;

  background: url("assets/fragrancias-propaganda-linha-sempre.svg") no-repeat
    left;
  background-size: contain;
  background-color: var(--color-card);

  position: relative;

  .section_title {
    line-height: 92px;
    white-space: pre;

    position: relative;
  }

  .section_text {
    margin: 32px 14px 32px 0px;

    font: 400 24px/33.04px var(--font-roboto);
    white-space: pre;
  }

  .section_button {
    width: 249px;
    height: 50px;
    margin-left: 18px;

    background-color: var(--color-black);
    color: var(--color-white);

    font-weight: 700;
    font-size: 11.71px;
    line-height: 17.96px;
    text-transform: uppercase;

    transition: color 0.8s ease-in-out, background-color 0.8s ease-in-out,
      border-color 0.8s ease-in-out;

    :hover {
      color: var(--color-black);
      background-color: var(--color-white);
      border: 2px solid var(--color-black);
    }
  }
`;
