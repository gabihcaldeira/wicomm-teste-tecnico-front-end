import styled from "styled-components";

export const InfoHeader = styled.section`
  height: 37.79px;
  padding: 0 150px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--color-header);

  font-size: 10px;
  color: var(--color-grey);

  .rightContainer {
    display: flex;
  }

  .--bold {
    font-weight: 700;
    margin-right: 32px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const MainHeader = styled.section`
  height: 90px;
  padding: 0 143px 0 148px;

  display: flex;
  align-items: center;

  background-color: var(--color-white);
  box-shadow: var(--shadow-main-header);
  color: var(--color-grey);

  .mainHeader_logo {
    width: 216px;
    height: 45px;
    margin-right: 88px;
  }

  .mainHeader_buttons {
    width: 420px;
    margin-left: 26px;
    display: flex;
    justify-content: space-between;
  }

  .mainHeader_button {
    font-size: 12px;
    font-weight: 600;

    position: relative;

    display: flex;
    align-items: center;
    gap: 11px;

    line-height: 22px;

    .button_icon {
      font-size: 21px;
    }

    .--color-detail {
      color: var(--color-detail);
    }
  }

  .--signin {
    flex-direction: column;
    gap: 0;

    .button_container {
      display: flex;
      align-items: center;
      gap: 7px;
    }

    .--small {
      font-size: 9px;
      position: absolute;
      top: -18px;
      left: 29px;
    }
  }

  .button_cartProductsIndicator {
    width: 14px;
    height: 14px;
    border-radius: 50%;

    position: absolute;
    bottom: 10px;
    left: -5px;

    background-color: var(--color-red);
    color: var(--color-white);

    font-family: var(--font-montserrat);
    font-size: 9px;
    font-weight: 700;
    line-height: 14px;
  }
`;
