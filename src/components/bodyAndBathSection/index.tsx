import { AdTitle } from "../adTitle/style";
import { BodySection } from "./style";

function BodyBathCategory() {
  return (
    <BodySection>
      <AdTitle className="section_title">Corpo e{"\n"}Banho</AdTitle>

      <p className="section_text">
        Confira nossa linha de produtos para o corpo.{"\n"}Hidratantes, loções e
        desodorantes para os{"\n"}cuidados com seu corpo.
      </p>

      <button className="section_button">conheça nossos produtos</button>
    </BodySection>
  );
}

export default BodyBathCategory;
