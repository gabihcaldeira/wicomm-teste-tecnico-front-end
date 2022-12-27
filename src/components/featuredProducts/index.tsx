import { products } from "../../database/data";
import BuyButton from "../buyButton";
import { FeaturedCard, FeaturedSection } from "./style";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Carousel } from "@mantine/carousel";

function FeaturedProducts() {
  return (
    <FeaturedSection>
      <Carousel
        withControls
        withIndicators
        height={833}
        sx={{ width: 1138 }}
        loop={true}
        align="start"
        slideGap={24}
        slideSize={557}
        slidesToScroll={1}
        nextControlIcon={
          <RiArrowRightSLine className="section_arrowButton --right" />
        }
        previousControlIcon={
          <RiArrowLeftSLine className="section_arrowButton --left" />
        }
        controlsOffset="xl"
        styles={{
          control: {
            background: "none",
            border: "none",
            boxShadow: "none",
          },
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
        {products
          .filter(({ section }) => section === "featured")
          .map(({ title, quantity, price, img }) => (
            <Carousel.Slide>
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
            </Carousel.Slide>
          ))}
      </Carousel>
    </FeaturedSection>
  );
}

export default FeaturedProducts;
