import { SeachContainer } from "./styles";
import { RiSearchLine } from "react-icons/ri";

function SearchBar() {
  return (
    <SeachContainer>
      <form className="form">
        <input
          className="form_input"
          type="text"
          placeholder="Busque aqui o produto de seu interesse"
        />
        <button className="form_button" type="submit">
          <RiSearchLine className="button_icon" />
        </button>
      </form>
    </SeachContainer>
  );
}

export default SearchBar;
