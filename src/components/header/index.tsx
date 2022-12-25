import { InfoHeader, MainHeader } from "./style";
import {
  RiUserHeartLine,
  RiUserLine,
  RiHeart3Line,
  RiShoppingBagLine,
} from "react-icons/ri";
import logoHinode from "../../assets/logo-grupo-hinode.svg";
import SearchBar from "../form";

function Header() {
  return (
    <>
      <InfoHeader>
        <button className="infoHeader_link">A Empresa</button>

        <div className="rightContainer">
          <button className="infoHeader_link --bold">
            <RiUserHeartLine className="infoHeader_icon" /> SEJA UM CONSULTOR
          </button>
          <button className="infoHeader_link">Fale Conosco</button>
        </div>
      </InfoHeader>

      <MainHeader>
        <figure>
          <img
            src={logoHinode}
            alt="Logo Grupo Hinode"
            className="mainHeader_logo"
          />
          <figcaption>Logotipo do grupo Hidone</figcaption>
        </figure>

        <SearchBar />

        <div className="mainHeader_buttons">
          <button className="mainHeader_button --signin">
            <p className="button_text --small">Olá Visitante,</p>
            <div className="button_container">
              <RiUserLine className="button_icon" />
              <p className="button_text">ENTRE OU CADASTRE-SE</p>
            </div>
          </button>

          <button className="mainHeader_button">
            <RiHeart3Line className="button_icon" /> FAVORITOS
          </button>

          <button className="mainHeader_button">
            <div className="button_cartProductsIndicator">0</div>
            <RiShoppingBagLine className="button_icon --color-detail" />
            SACOLA
          </button>
        </div>
      </MainHeader>
    </>
  );
}

export default Header;
