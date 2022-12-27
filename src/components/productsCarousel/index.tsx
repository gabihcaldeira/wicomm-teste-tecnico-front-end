import React from "react";
import { CarouselContainer } from "./style";
import { RiEyeLine, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { SectionTitle } from "../sectionTitle/style";

import { Carousel } from "@mantine/carousel";

interface IProductCarouselProps {
  children: React.ReactNode;
  title?: string;
}

function ProductsCarousel({ children, title }: IProductCarouselProps) {
  return (
    <CarouselContainer>
      {title && (
        <>
          <SectionTitle className="carousel_title">{title}</SectionTitle>

          <button className="carousel_moreButton">
            <RiEyeLine className="moreButton_icon" />
            Ver todos
          </button>
        </>
      )}

      <div className="carousel_content">
        <Carousel
          withControls
          withIndicators
          height={569}
          sx={{ width: 1145 }}
          loop={true}
          align="start"
          slideGap="xl"
          slideSize={266}
          slidesToScroll={1}
          nextControlIcon={
            <RiArrowRightSLine className="carousel_arrowButton --right" />
          }
          previousControlIcon={
            <RiArrowLeftSLine className="carousel_arrowButton --left" />
          }
          styles={{
            control: { background: "none", border: "none", boxShadow: "none" },
            indicator: {
              width: 10.5,
              height: 10.5,
              borderRadius: 5.25,
              border: "1px solid var(--color-detail)",
              transition:
                "width .25s ease-in-out, background-color .25s ease-in-out",
              "&[data-active]": {
                width: 22.5,
                borderRadius: 6,
                backgroundColor: "var(--color-detail)",
              },
            },
          }}
        >
          {children}
        </Carousel>
      </div>
    </CarouselContainer>
  );
}

export default ProductsCarousel;
