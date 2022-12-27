import styled from "styled-components";

export const SeachContainer = styled.div`
  .form {
    height: 37px;
    width: 399px;
    padding: 0px 19px 0px 23px;
    border-radius: 100px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--color-beige);

    .form_input {
      background: none;
    }

    .form_input::placeholder {
      color: var(--color-grey);
      font-weight: 600;
    }

    .button_icon {
      font-size: 21px;
      margin-top: 5px;
    }
  }
`;
