import styled from 'styled-components';

export const SliderBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    margin: auto;
    width: 1440px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const SliderContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const SliderListBox = styled.div`
  @media screen and (min-width: 1440px) {
    overflow: hidden;
    width: 1110px;
  }
`;

type SliderButtonProps = {
  right?: boolean;
};

export const SliderButton = styled.button<SliderButtonProps>`
  display: none;

  ${props => props.right && `transform: rotate(180deg);  `}

  @media screen and (min-width: 1440px) {
    display: flex;
    width: 70px;
    height: 70px;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    border: 1px solid #84c551;

    color: #84c551;

    :hover,
    :focus {
      background-color: #84c551;
      color: #fff;
    }

    :disabled {
      background-color: rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.1);
      cursor: default;
    }
  }
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

      @media screen and (min-width: 1440px) {
        margin-left: 0px;
      }
    }
    :last-of-type {
      margin-right: 32.5px;

      @media screen and (min-width: 1440px) {
        margin-right: 0px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    gap: 30px;
  }

  transition: all 1s linear;
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

  /* transition: all 1s linear; */
`;

export const PerCentItem = styled.li`
  width: 6px;
  height: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;

  transition: all 1s linear;
`;
