import { Card } from "./style";
import { RiHeart3Line } from "react-icons/ri";
import RateImg from "../../assets/estrelas-avaliacao.svg";
import ProdImg from "../../assets/os-mais-desejados-corps-lignea-gel-modelador.svg";
import BuyButton from "../buyButton";

function ProductCard() {
  return (
    <Card>
      <div className="container">
        <button className="container_likeButton">
          <RiHeart3Line className="likeButton_icon" />
        </button>

        <figure className="container_figure">
          <img src={ProdImg} alt="teste" className="figure_product" />
          <figcaption></figcaption>
        </figure>
      </div>

      <p className="product_description">
        Corps lígnea Body Contour Gel modelador
      </p>

      <p className="product_quantity">500g</p>

      <div className="product_rating">
        <img src={RateImg} alt="teste" />
      </div>

      <p className="product_price">
        R$ 60,<span>00</span>
      </p>

      <BuyButton />
    </Card>
  );
}

export default ProductCard;
