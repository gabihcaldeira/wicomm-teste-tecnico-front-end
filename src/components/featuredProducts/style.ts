import styled from "styled-components";

export const FeaturedSection = styled.section`
  height: 833px;
  padding: 0px 153px 0px 150px;

  position: relative;

  .section_arrowButton {
    font-size: 75px;
    color: var(--color-carousel);

    position: absolute;
    top: -65px;
  }

  .--left {
    left: -115px;
  }

  .--right {
    right: -115px;
  }
`;

export const FeaturedCard = styled.div`
  width: 557px;
  height: 781px;
  padding: 12px;

  background: url(${(props) => props.itemProp}) no-repeat center;
  background-size: cover;

  border: 1px solid var(--color-beige);

  .product_info {
    width: 222px;
    height: 184px;
    padding: 18px 14px 23px;

    background-color: var(--color-white);
    color: var(--color-black);
    border-radius: 16px;
    box-shadow: var(--shadow-featured-info);

    .product_description,
    .product_quantity {
      margin-left: 1px;

      text-align: left;

      font: 400 16px/23px var(--font-oswald);
    }

    .product_rating {
      margin: 15.97px 0px 20px;

      .rating_img {
        width: 70px;
        height: 14.41px;
      }
    }

    .product_price {
      width: fit-content;

      font: 700 22px/21.79px Aktiv;
      letter-spacing: -1.21px;

      position: relative;

      .price_span {
        font-size: 14px;

        position: absolute;
        top: -5px;
        right: -11px;
      }
    }

    .product_buyInfo {
      font: 700 10px/18px Aktiv;
      color: var(--color-light-grey);
    }
  }

  .buyButton {
    margin: 481px 145px 0px 144px;
  }
`;
