import styled from "styled-components";

export const IndicatorsContainer = styled.div`
  width: 144px;
  height: 12px;

  display: flex;
  justify-content: space-between;

  .indicator {
    width: 10.5px;
    height: 10.5px;

    border-radius: 50%;
    border: 1.5px solid ${(props) => props.color};
  }

  .--selected {
    width: 22.5px;
    height: 12px;

    border-radius: 6px;
    background-color: ${(props) => props.color};
  }
`;
