import styled from "styled-components";

export const CarouselContainer = styled.section`
  height: 667px;
  padding: 0px 20px;
  margin-top: 96px;

  position: relative;

  .carousel_moreButton {
    font-weight: 600;
    font-size: 12px;
    text-decoration: underline;

    position: absolute;
    top: 27px;
    right: 153px;

    display: flex;
    align-items: center;
    gap: 5px;

    .moreButton_icon {
      font-size: 18px;

      position: absolute;
      top: 2px;
      left: -25px;
    }
  }

  .carousel_content {
    display: flex;
    align-items: center;

    .carousel_cards {
      width: 1140px;
      height: 519px;
      margin: 50px auto 40px;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .carousel_arrowButton {
    font-size: 75px;
    color: var(--color-carousel);

    position: absolute;
    top: 239px;
  }

  .--right {
    right: 20px;
  }

  .carouselIndicator {
    position: absolute;
    bottom: 0;
    right: 649px;
  }
`;
