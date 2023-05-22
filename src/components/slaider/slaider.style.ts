import styled from 'styled-components';

export const SliderBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  overflow: hidden;
`;

type SliderListProps = {
  left: number;
};

export const SliderList = styled.ul<SliderListProps>`
  position: relative;
  left: ${props => props.left}px;

  display: flex;
  width: 100%;
  gap: 20px;
  & > li {
    :first-of-type {
      margin-left: 32.5px;
    }
    :last-of-type {
      margin-right: 32.5px;
    }
  }
`;

type SliderPerCentProps = {
  current?: number;
};

export const SliderPerCent = styled.ul<SliderPerCentProps>`
  ${props =>
    props.current &&
    `
 > li:nth-child(${props.current}) {
    background: #ffffff;
    height: 30px;
  }
`}
  display: flex;
  height: 30px;
  gap: 10px;
  margin: auto;
  align-items: end;
`;

export const PerCentItem = styled.li`
  width: 6px;
  height: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
`;
