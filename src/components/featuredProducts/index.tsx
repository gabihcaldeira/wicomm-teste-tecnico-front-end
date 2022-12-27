import { products } from "../../database/data";
import BuyButton from "../buyButton";
import CarouselIndicator from "../carouselIndicator";
import { FeaturedCard, FeaturedSection } from "./style";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

function FeaturedProducts() {
  return (
    <FeaturedSection>
      <button className="section_arrowButton --left">
        <RiArrowLeftSLine />
      </button>

      {products
        .filter(({ section }) => section === "featured")
        .map(({ title, quantity, price, img }) => (
          <FeaturedCard itemProp={img}>
            <div className="product_info">
              <p className="product_description">{title}</p>
              <p className="product_quantity">{quantity}</p>
              <div className="product_rating">
                <img
                  src="assets/avaliacao-5-estrelas.svg"
                  alt="avaliação do produto"
                  className="rating_img"
                />
              </div>

              <p className="product_price">
                R$ {price.toFixed(2).split(".")[0]},
                <span className="price_span">
                  {price.toFixed(2).split(".")[1]}
                </span>
              </p>

              <span className="product_buyInfo">
                em até 2x de R$ {(price / 2).toFixed(2).replace(".", ",")}
              </span>
            </div>

            <BuyButton />
          </FeaturedCard>
        ))}

      <button className="section_arrowButton --right">
        <RiArrowRightSLine />
      </button>

      <CarouselIndicator color="var(--color-detail)" />
    </FeaturedSection>
  );
}

export default FeaturedProducts;
