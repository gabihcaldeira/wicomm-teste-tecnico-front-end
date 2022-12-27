import styled from "styled-components";

export const Menu = styled.section`
  height: 636px;
  margin: 75px auto 117px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .section_cards {
    display: flex;
    gap: 24px;
  }
`;

export const CategoryCard = styled.button`
  width: 267px;
  height: 540px;
  padding-bottom: 32px;

  background: url(${(props) => props.itemProp}) no-repeat center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 21px;

  .card_title {
    color: var(--color-white);
    font-size: 31.94px;
    line-height: 34.42px;
  }

  .card_text {
    font-weight: 400;
    font-size: 15.48px;
    text-decoration: underline;
    color: var(--color-white);

    display: none;
  }

  :hover {
    justify-content: center;
    background: linear-gradient(
        181.19deg,
        rgba(0, 0, 0, 0.18) 1.02%,
        rgba(0, 0, 0, 0.57) 28.75%,
        rgba(0, 0, 0, 0.74) 67.96%,
        rgba(0, 0, 0, 0.71) 101.26%
      ),
      url(${(props) => props.itemProp}) no-repeat center;
    background-size: cover;

    > .card_text {
      display: block;
    }
  }
`;
