import React from "react";
import { CarouselContainer } from "./style";
import { RiEyeLine, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import CarouselIndicator from "../carouselIndicator";

interface IProductCarouselProps {
  children: React.ReactNode;
  title: string;
}

function ProductsCarousel({ children, title }: IProductCarouselProps) {
  return (
    <CarouselContainer>
      <h2 className="carousel_title">{title}</h2>

      <button className="carousel_moreButton">
        <RiEyeLine className="moreButton_icon" />
        Ver todos
      </button>

      <div className="carousel_content">
        <button className="carousel_arrowButton --left">
          <RiArrowLeftSLine />
        </button>

        <div className="carousel_cards">{children}</div>

        <button className="carousel_arrowButton --right">
          <RiArrowRightSLine />
        </button>

        <CarouselIndicator color="var(--color-detail)" />
      </div>
    </CarouselContainer>
  );
}

export default ProductsCarousel;