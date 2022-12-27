import NewsletterForm from "../newsletterForm";
import { FooterSection } from "./style";
import { RiInstagramLine, RiFacebookFill, RiYoutubeLine } from "react-icons/ri";

function Footer() {
  return (
    <>
      <NewsletterForm />

      <FooterSection>
        <div className="main_section">
          <div className="section_div">
            <h3 className="div_title">GRUPO HINODE</h3>
            <br></br>
            <button className="div_button">A Empresa</button>
            <button className="div_button">Catálogo Hinode</button>
            <button className="div_button">Seja um Consultor</button>
            <button className="div_button">Hinode Prime</button>
            <button className="div_button">Frete Inteligente</button>
          </div>

          <div className="section_div">
            <h3 className="div_title">MAIS VENDIDOS</h3>
            <br></br>
            <button className="div_button">
              Corps Lígnea Body Contour Gel Modelador
            </button>
            <button className="div_button">Shake de Vanilla H+ HND</button>
            <button className="div_button">Shake de Morango H+ HND</button>
            <button className="div_button">
              Luva de Silicone Creme para as Mãos Hands
            </button>
            <button className="div_button">Empire Gold</button>
            <button className="div_button">Empire VIP</button>
          </div>

          <div className="section_div">
            <h3 className="div_title">DÚVIDAS FREQUENTES</h3>
            <br></br>
            <button className="div_button">Fale Conosco</button>
            <button className="div_button">Entrega, Trocas e Devoluções</button>
            <button className="div_button">Compra e Venda</button>
            <button className="div_button">Política de Privacidade</button>
            <button className="div_button">Remover Consentimento</button>
          </div>

          <div className="section_div --div_contacts">
            <button className="div_button --button_blue">
              CENTRAL DE ATENDIMENTO
            </button>

            <p className="div_contactInfo">
              De segunda a sexta das 9h às 21h{"\n"}
              Capitais e regiões metropolitanas 4020-2424{"\n"}
              Demais localidades: 0800-144-6633
            </p>

            <div className="div_icons">
              <button className="icons_button">
                <RiInstagramLine className="button_icon" />
              </button>
              <button className="icons_button">
                <RiYoutubeLine className="button_icon" />
              </button>
              <button className="icons_button">
                <RiFacebookFill className="button_icon" />
              </button>
            </div>
          </div>
        </div>

        <figure className="siteRules">
          <img
            src="assets/rodape-regras.svg"
            alt="Regras do site"
            className="siteRules_img"
          />
          <figcaption>Regras do site</figcaption>
        </figure>
      </FooterSection>
    </>
  );
}

export default Footer;
