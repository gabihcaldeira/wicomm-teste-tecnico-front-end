import styled from "styled-components";

export const CarouselContainer = styled.section`
  height: 667px;
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
    width: 1440px;
    height: 519px;
    margin: 50px auto 40px;
    padding: 0px 151px 0px 150px;

    position: relative;

    .carousel_arrowButton {
      font-size: 75px;
      color: var(--color-carousel);

      position: absolute;
      top: -150px;
    }

    .--left {
      left: -113px;
    }

    .--right {
      right: -113px;
    }

    .carouselIndicator {
      position: absolute;
      bottom: 0;
      right: 649px;
    }
  }
`;
