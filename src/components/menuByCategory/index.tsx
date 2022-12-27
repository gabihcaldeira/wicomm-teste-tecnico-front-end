import { SectionTitle } from "../sectionTitle/style";
import { CategoryCard, Menu } from "./style";

function MenuByCategory() {
  return (
    <Menu>
      <SectionTitle className="section_title">
        isso pode ser do seu interesse
      </SectionTitle>

      <div className="section_cards">
        <CategoryCard itemProp="assets/menu-maquiagem-labios-vermelhos.svg">
          <SectionTitle className="card_title">maquiagens</SectionTitle>

          <SectionTitle className="card_text">ver mais</SectionTitle>
        </CategoryCard>

        <CategoryCard itemProp="assets/menu-fragrancias-mulher-vestido-vermelho.svg">
          <SectionTitle className="card_title">fragrâncias</SectionTitle>

          <SectionTitle className="card_text">ver mais</SectionTitle>
        </CategoryCard>

        <CategoryCard itemProp="assets/menu-energia-performance-homem-bebendo.svg">
          <SectionTitle className="card_title">
            energia & performance
          </SectionTitle>

          <SectionTitle className="card_text">ver mais</SectionTitle>
        </CategoryCard>

        <CategoryCard itemProp="assets/menu-corpo-banho-pele-com-creme.svg">
          <SectionTitle className="card_title">corpo & banho</SectionTitle>

          <SectionTitle className="card_text">ver mais</SectionTitle>
        </CategoryCard>
      </div>
    </Menu>
  );
}

export default MenuByCategory;
