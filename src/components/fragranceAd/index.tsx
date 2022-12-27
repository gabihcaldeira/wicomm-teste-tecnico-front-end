import { AdTitle } from "../adTitle/style";
import { FragranceSection } from "./style";

function FragranceCategoryAd() {
  return (
    <FragranceSection>
      <AdTitle className="section_title">Linha{"\n"}EMPIRE</AdTitle>

      <p className="section_text">
        Escolha a sua fragrância masculina{"\n"}favorita e desperte as melhores
        {"\n"}sensações.
      </p>

      <button className="section_button">conheça nossos produtos</button>
    </FragranceSection>
  );
}
export default FragranceCategoryAd;
