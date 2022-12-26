import { Nav } from "./style";
import { RiMenuLine } from "react-icons/ri";

function NavBar() {
  return (
    <Nav>
      <button className="filters_button">
        <RiMenuLine className="button_icon" /> Todas as categorias
      </button>

      <div className="container_filters">
        <button className="filters_button">MAQUIAGEM</button>
        <button className="filters_button">CORPO & BANHO</button>
        <button className="filters_button">VIDA SAUDÁVEL</button>
        <button className="filters_button">ENERGIA E PERFORMANCE</button>
      </div>
    </Nav>
  );
}

export default NavBar;
