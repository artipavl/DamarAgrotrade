import styled from 'styled-components';
type SliderListBoxProps = {
  overflow?: string;
};

export const SliderBox = styled.div<SliderListBoxProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    margin: auto;

    ${props =>
      props.overflow === 'visible'
        ? `width: 100%; 
      & button {
        &:first-child {
          margin-left: auto;
          margin-right: 50px;
        }
        &:last-child {
          margin-left: 50px;
          margin-right: auto;
        }
      }`
        : `max-width: 1410px; padding: 0 15px 0 15px`};
  }
`;

export const SliderContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    /* margin: auto; */
  }
`;

export const SliderListBox = styled.div<SliderListBoxProps>`
  padding-top: 17px;
  padding-bottom: 17px;
  @media screen and (min-width: 1440px) {
    ${props =>
      props.overflow ? `overflow: ${props.overflow};` : `overflow: hidden;`};
    width: 1140px;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

type SliderButtonProps = {
  right?: boolean;
};

export const SliderButton = styled.button<SliderButtonProps>`
  display: none;
  z-index: 2;

  @media screen and (min-width: 1440px) {
    display: flex;
    width: 70px;
    height: 70px;

    margin-right: auto;

    align-items: center;
    justify-content: center;

    border-radius: 50%;
    border: 1px solid #84c551;

    color: #84c551;
    ${props =>
      props.right &&
      ` & > svg {
      transform: rotate(180deg);
    } margin: 0; margin-left: auto;`};

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
  accent?: boolean;
};

export const SliderPerCent = styled.ul<SliderPerCentProps>`
  ${props =>
    props.current &&
    `
 > li:nth-child(${props.current}) {
    background: ${props.accent ? '#8D3200' : '#ffffff'};
    height: 30px;
  }
`}
  display: flex;
  height: 30px;
  gap: 10px;
  margin: auto;
  align-items: end;
`;

export const PerCentItem = styled.li<SliderPerCentProps>`
  width: 6px;
  height: 16px;
  background: ${props =>
    props.accent ? 'rgba(141, 50, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 20px;

  transition: all 1s linear;
`;
