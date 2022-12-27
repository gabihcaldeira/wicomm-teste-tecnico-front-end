import styled from "styled-components";

export const FooterSection = styled.section`
  .main_section {
    height: 422px;
    background-color: var(--color-beige);
    padding: 71px 151px;

    display: flex;
    gap: 89px;

    .section_div {
      display: flex;
      flex-direction: column;

      .div_title,
      .div_button {
        font-weight: 600;
        font-size: 12px;
        line-height: 22px;
        text-align: left;
        color: var(--color-grey);
      }

      .div_button {
        font-weight: 400;

        transition: color 0.8s ease-in-out;

        :hover {
          color: var(--color-dark-blue);
        }
      }

      .--button_blue {
        width: 221px;
        padding: 15px 30px;
        background-color: var(--color-detail-2);
        color: var(--color-white);
      }

      .div_contactInfo {
        margin: 16px 0px 30px;

        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        text-align: right;
        white-space: pre;
      }

      .div_icons {
        display: flex;
        gap: 16px;

        .icons_button {
          .button_icon {
            color: var(--color-dark-blue);
            font-size: 48px;

            transition: color 0.8s ease-in-out;

            :hover {
              color: var(--color-detail-2);
            }
          }
        }
      }
    }

    .--div_contacts {
      align-items: flex-end;
    }
  }

  .siteRules {
    .siteRules_img {
      width: 1440px;
      height: 258px;
      margin-bottom: 206px;
    }
  }
`;
