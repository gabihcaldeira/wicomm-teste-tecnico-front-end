import styled from "styled-components";

export const Nav = styled.nav`
  height: 49px;
  padding: 13px 143px 14px 150px;

  background-color: var(--color-detail);

  display: flex;
  align-items: center;
  justify-content: space-between;

  .container_filters {
    display: flex;
    gap: 79px;
  }

  .filters_button {
    color: var(--color-white);

    font-size: 14px;
    font-weight: 600;
    line-height: 22px;

    display: flex;
    align-items: center;
    gap: 16px;
  }

  .button_icon {
    font-size: 20px;
  }
`;
