import { InfoDiv } from "./style";
import { RiBankCard2Line, RiTruckLine, RiDropboxFill } from "react-icons/ri";

function PaymentInfoBar() {
  return (
    <InfoDiv>
      <div className="payment_info">
        <RiBankCard2Line className="info_icon" />
        <p className="info_text">Tudo em até 6x sem juros</p>
      </div>

      <div className="payment_info">
        <RiTruckLine className="info_icon" />
        <p className="info_text">
          FRETE GRÁTIS nas compras acima de R$ 49,00 para todo Brasil
        </p>
      </div>

      <div className="payment_info">
        <img
          src="assets/hinode-prime-icon.svg"
          alt="Ícone Hinode Prime"
          className="info_iconImg"
        />
        <p className="info_text">
          Hinode Prime: Receba em casa todo mês com 20% OFF
        </p>
      </div>

      <div className="payment_info">
        <RiDropboxFill className="info_icon" />
        <p className="info_text">Garanta mais economia com frete inteligente</p>
      </div>
    </InfoDiv>
  );
}

export default PaymentInfoBar;
