import { IProduct, products } from "../../database/data";
import ProductCard from "../productCard";
import ProductsCarousel from "../productsCarousel";
import { NewSection } from "./style";

function NewProducts() {
  return (
    <NewSection>
      <ProductsCarousel title="acabaram de chegar">
        {products
          .filter(({ section }) => section === "just arrived")
          .map((product: IProduct) => (
            <ProductCard {...product} />
          ))}
      </ProductsCarousel>
    </NewSection>
  );
}

export default NewProducts;
