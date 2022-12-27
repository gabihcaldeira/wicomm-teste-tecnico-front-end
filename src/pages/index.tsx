import Header from "../components/header";
import HighlightedAd from "../components/highlightedAd";
import NavBar from "../components/navBar";
import PaymentInfoBar from "../components/paymentInfo";
import ProductsCarousel from "../components/productsCarousel";
import ProductCard from "../components/productCard";

import { products, IProduct } from "../database/data";
import MenuByCategory from "../components/menuByCategory";
import FeaturedProducts from "../components/featuredProducts";
import BodyBathCategory from "../components/bodyAndBathSection";

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

      <MenuByCategory />

      <FeaturedProducts />

      <ProductsCarousel title="os mais desejados">
        {products
          .filter(({ section }) => section === "most wanted")
          .map((product: IProduct) => (
            <ProductCard {...product} />
          ))}
      </ProductsCarousel>

      <ProductsCarousel title="vida saudável">
        {products
          .filter(({ section }) => section === "healthy life")
          .map((product: IProduct) => (
            <ProductCard {...product} />
          ))}
      </ProductsCarousel>

      <BodyBathCategory />

      <ProductsCarousel title="corpo e banho">
        {products
          .filter(({ section }) => section === "body and bath")
          .splice(0, 4)
          .map((product: IProduct) => (
            <ProductCard {...product} />
          ))}
      </ProductsCarousel>
      <ProductsCarousel title="">
        {products
          .filter(({ section }) => section === "body and bath")
          .splice(4, 8)
          .map((product: IProduct) => (
            <ProductCard {...product} />
          ))}
      </ProductsCarousel>
    </div>
  );
}

export default HomePage;
