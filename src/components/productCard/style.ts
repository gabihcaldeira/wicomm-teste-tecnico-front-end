import styled from "styled-components";

export const Card = styled.div`
  width: 266px;
  height: 519px;
  padding: 0;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .container {
    width: 266px;
    height: 311px;

    background-color: var(--color-card);
    border: 0.5px solid var(--color-card-border);

    position: relative;

    .container_discountFlag {
      width: 42px;
      height: 28px;

      background-color: var(--color-detail);
      color: var(--color-white);

      font-size: 14px;
      font-weight: 700;
      line-height: 28px;
      text-align: center;

      position: absolute;
      top: 20px;
      left: -7px;
    }

    .container_likeButton {
      position: absolute;
      right: 16px;
      top: 16px;

      .likeButton_icon {
        font-size: 21px;
      }
    }

    .container_figure {
      width: 266px;
      height: 311px;
      display: flex;
      align-items: center;
      justify-content: center;
      .figure_product {
        transition: transform 1s ease-in-out;
      }
    }
  }

  .product_description {
    margin-top: 16px;
    white-space: nowrap;
    overflow: scroll;
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

  .product_oldPrice {
    color: var(--color-light-grey);

    font-size: 14px;
    text-decoration: line-through;
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
      top: -7px;
    }
  }

  :hover > .container > .container_figure > .figure_product {
    transform: scale(1.2);
  }
`;
