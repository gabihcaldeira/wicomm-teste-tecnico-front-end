import { IndicatorsContainer } from "./style";
interface ICarouselProp {
  color: string;
}

function CarouselIndicator({ color }: ICarouselProp) {
  return (
    <IndicatorsContainer color={color} className="carouselIndicator">
      <span className="indicator --selected"></span>
      <span className="indicator"></span>
      <span className="indicator"></span>
      <span className="indicator"></span>
    </IndicatorsContainer>
  );
}

export default CarouselIndicator;
