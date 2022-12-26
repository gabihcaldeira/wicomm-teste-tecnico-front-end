import styled from "styled-components";

export const InfoDiv = styled.div`
  height: 117px;
  margin-top: 20px;
  padding: 0px 150px 0px 193px;

  background-color: var(--color-buy-info);
  filter: var(--shadow-buy-info);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 120px;

  .payment_info {
    display: flex;
    align-items: flex-start;

    position: relative;
  }

  .info_text {
    font-weight: 600;
    font-size: 14px;
    line-height: 23px;
  }

  .info_icon {
    font-size: 30px;

    position: absolute;
    top: 0px;
    left: -43px;
  }

  .info_iconImg {
    width: 23px;
    height: 23px;

    position: absolute;
    top: 7px;
    left: -43px;
  }
`;
