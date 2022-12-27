import { AdCarousel } from "./style";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import BuyButton from "../buyButton";
import { AdTitle } from "../adTitle/style";
import { Carousel } from "@mantine/carousel";

function HighlightedAd() {
  return (
    <Carousel
      withControls
      withIndicators
      height={770}
      sx={{ width: 1440 }}
      loop={true}
      align="start"
      slideSize={1440}
      slidesToScroll={1}
      nextControlIcon={
        <RiArrowRightSLine className="carousel_arrowButton --right" />
      }
      previousControlIcon={
        <RiArrowLeftSLine className="carousel_arrowButton --left" />
      }
      controlsOffset="xl"
      styles={{
        control: {
          background: "none",
          border: "none",
          boxShadow: "none",
          fontSize: 80,
          color: "var(--color-white)",
        },
        indicator: {
          width: 10.5,
          height: 10.5,
          borderRadius: 5.25,
          border: "1px solid var(--color-white)",
          transition:
            "width .25s ease-in-out, background-color .25s ease-in-out",
          "&[data-active]": {
            width: 22.5,
            borderRadius: 6,
            backgroundColor: "var(--color-white)",
          },
        },
      }}
    >
      <Carousel.Slide>
        <AdCarousel>
          <figure className="ad_product">
            <img
              src="assets/propaganda-principal-base-dazzle.svg"
              alt="base dazzle"
              className="product_img"
            />
            <figcaption>Base Líquida Dazzle</figcaption>
          </figure>

          <figure className="ad_model">
            <img
              src="assets/propaganda-principal-modelo.svg"
              alt="modelo se maquiando"
              className="model_img"
            />
            <figcaption>Modelo se maquiando</figcaption>
          </figure>

          <AdTitle className="ad_title">
            Base Líquida <span className="title_span">Dazzle</span>
          </AdTitle>

          <BuyButton />
        </AdCarousel>
      </Carousel.Slide>
    </Carousel>
  );
}

export default HighlightedAd;
