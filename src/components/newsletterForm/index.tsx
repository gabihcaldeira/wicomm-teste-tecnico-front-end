import { NewsSection } from "./style";

function NewsletterForm() {
  return (
    <NewsSection>
      <h2 className="section_title">receba nossas{"\n"}ofertas e novidades</h2>

      <form className="section_form">
        <label htmlFor="name" className="form_label">
          Digite seu nome
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
          className="form_inputName"
        />

        <label htmlFor="email" className="form_label">
          Digite seu email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Digite seu email"
          className="form_inputEmail"
        />

        <button type="submit" className="form_button">
          cadastrar
        </button>
      </form>
    </NewsSection>
  );
}

export default NewsletterForm;
