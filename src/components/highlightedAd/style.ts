import styled from "styled-components";

export const AdCarousel = styled.section`
  height: 770px;

  position: relative;

  display: flex;

  background-color: var(--color-ad-background);
  color: var(--color-white);

  .ad_product > .product_img {
    width: 401px;
    height: 401px;

    position: absolute;
    top: 172px;
    left: 62px;
  }

  .ad_model > .model_img {
    width: 1203px;
    height: 802.92px;

    position: absolute;
    top: -33px;
    right: -1px;
  }

  .ad_title {
    width: 550px;

    top: 192px;
    right: 48px;

    > .title_span {
      text-transform: uppercase;
      font: normal 700 92.15px var(--font-playfair);
    }
  }

  .buyButton {
    width: 171px;
    height: 50px;

    background-color: transparent;
    color: var(--color-white);
    border-color: var(--color-white);

    position: absolute;
    top: 397px;
    right: 414px;
  }

  .buyButton:hover {
    background-color: var(--color-white);
    color: var(--color-ad-background);
  }
`;
