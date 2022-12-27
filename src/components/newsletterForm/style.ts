import styled from "styled-components";

export const NewsSection = styled.section`
  height: 152px;
  padding: 32px 182px 32px 152px;

  background-color: var(--color-dark-blue);
  color: var(--color-white);

  display: flex;
  align-items: center;
  justify-content: space-between;

  .section_title {
    font: 400 32px/44px Aktiv;
    letter-spacing: -1px;
    white-space: pre;
    text-transform: uppercase;

    color: var(--color-white);
  }

  .section_form {
    display: flex;
    gap: 18px;

    .form_label {
      display: none;
    }

    .form_inputEmail,
    .form_inputName {
      width: 207px;
      height: 26px;

      background-color: transparent;
      color: var(--color-white);
      border-bottom: 1px solid var(--color-white);

      font-size: 14px;
      line-height: 23px;

      ::placeholder {
        color: var(--color-white);
        //font-size: 14px;
      }
    }

    .form_inputEmail {
      width: 237px;
    }

    .form_button {
      width: 130px;
      height: 48px;
      margin-left: 7px;
      padding: 15px 30px;

      background-color: var(--color-detail-2);
      color: var(--color-white);

      font-weight: 700;
      font-size: 11.71px;
      line-height: 18px;
      text-transform: uppercase;
    }
  }
`;
