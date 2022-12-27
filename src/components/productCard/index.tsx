import { Card } from "./style";
import { RiHeart3Line } from "react-icons/ri";
import BuyButton from "../buyButton";
import { IProduct } from "../../database/data";
import { Carousel } from "@mantine/carousel";

function ProductCard(product: IProduct) {
  const { title, quantity, price, discount_price, img } = product;
  return (
    <Carousel.Slide>
      <Card>
        <div className="container">
          {discount_price && (
            <span className="container_discountFlag">
              {((discount_price / price) * 100 - 100).toFixed(0)}%
            </span>
          )}
          <button className="container_likeButton">
            <RiHeart3Line className="likeButton_icon" />
          </button>

          <figure className="container_figure">
            <img src={img} alt={title} className="figure_product" />
            <figcaption>{title}</figcaption>
          </figure>
        </div>
        <p className="product_description">{title}</p>
        <p className="product_quantity">{quantity}</p>
        <div className="product_rating">
          <img
            src="assets/avaliacao-4-estrelas.svg"
            alt="avaliação do produto"
          />
        </div>

        {discount_price ? (
          <>
            <span className="product_oldPrice">
              R$ {price.toFixed(2).replace(".", ",")}
            </span>
            <p className="product_price">
              R$ {discount_price.toFixed(2).split(".")[0]},
              <span>{discount_price.toFixed(2).split(".")[1]}</span>
            </p>
          </>
        ) : (
          <p className="product_price">
            R$ {price.toFixed(2).split(".")[0]},
            <span>{price.toFixed(2).split(".")[1]}</span>
          </p>
        )}

        <BuyButton />
      </Card>
    </Carousel.Slide>
  );
}

export default ProductCard;
