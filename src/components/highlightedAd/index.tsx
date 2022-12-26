import { AdCarousel } from "./style";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import CarouselIndicator from "../carouselIndicator";
import BuyButton from "../buyButton";

function HighlightedAd() {
  return (
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

      <h1 className="ad_title">
        Base Líquida <span className="title_span">Dazzle</span>
      </h1>

      <BuyButton />

      <button className="ad_arrowButton --left">
        <RiArrowLeftSLine />
      </button>
      <button className="ad_arrowButton --right">
        <RiArrowRightSLine />
      </button>

      <CarouselIndicator color="var(--color-white)" />
    </AdCarousel>
  );
}

export default HighlightedAd;
