import styled from "styled-components";

export const Card = styled.div`
  width: 266px;
  height: 540.94px;
  padding-bottom: 21.94px;

  .container {
    width: 266px;
    height: 311px;
    padding-top: 16px;

    background-color: var(--color-card);
    border: 0.5px solid var(--color-card-border);

    position: relative;

    .container_likeButton {
      position: absolute;
      right: 16px;

      .likeButton_icon {
        font-size: 21px;
      }
    }

    .container_figure {
      .figure_product {
        width: 267px;
        height: 271px;

        position: absolute;
      }
    }
  }

  .product_description {
    margin-top: 16px;
  }

  .product_description,
  .product_quantity {
    font-family: var(--font-oswald);
    font-size: 17px;
    font-weight: 400;
    line-height: 23px;

    color: var(--color-black);
  }

  .product_rating {
    margin: 8px 0 9px;

    > img {
      width: 70px;
    }
  }

  @font-face {
    font-family: Aktiv;
    src: url("src/assets/fonts/AktivGrotesk-Bold.ttf");
    font-weight: bold;
  }

  .product_price {
    font-family: Aktiv;
    font-weight: bold;
    font-size: 22px;
    line-height: 38px;

    position: relative;

    > span {
      font-size: 14px;

      position: absolute;
      top: -5px;
    }
  }
`;
