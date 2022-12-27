import styled from "styled-components";

export const BodySection = styled.section`
  height: 813px;
  padding: 205px 142px;
  margin-top: 96px;

  background: url("assets/corpo-e-banho-mulher-na-banheira.svg") no-repeat
    center;
  background-size: cover;

  .section_title {
    line-height: 92px;
    white-space: pre;
    color: var(--color-white);
    position: relative;
  }

  .section_text {
    margin: 19px 0px 32px 6px;

    font: 400 24px/33.04px var(--font-roboto);
    white-space: pre;
    color: var(--color-white);
  }

  .section_button {
    width: 249px;
    height: 50px;
    margin-left: 13px;

    background-color: transparent;
    color: var(--color-white);
    border: 2px solid var(--color-white);

    font-weight: 700;
    font-size: 11.71px;
    line-height: 17.96px;
    text-transform: uppercase;
  }
`;
