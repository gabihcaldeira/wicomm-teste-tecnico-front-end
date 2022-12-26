import Header from "../components/header";
import HighlightedAd from "../components/highlightedAd";
import NavBar from "../components/navBar";
import PaymentInfoBar from "../components/paymentInfo";
import ProductsCarousel from "../components/productsCarousel";
import ProductCard from "../components/productCard";

import { products } from "../database/data";
import { IProduct } from "../interfaces";

function HomePage() {
  return (
    <div>
      <Header />
      <NavBar />
      <HighlightedAd />
      <PaymentInfoBar />
      <ProductsCarousel title="mais vendidos">
        {products
          .filter(({ section }) => section === "best sellers")
          .map((product: IProduct) => (
            <ProductCard {...product} />
          ))}
      </ProductsCarousel>
    </div>
  );
}

export default HomePage;
