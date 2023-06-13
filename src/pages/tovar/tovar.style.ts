import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: 40px;
`;

export const TovarInformation = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1110px) {
    flex-direction: row;
    gap: 30px;
  }
`;

export const ImgBox = styled.div`
  margin-bottom: 30px;

  @media screen and (min-width: 445px) {
    margin: auto;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1110px) {
    margin: 0;
    margin-bottom: 30px;
  }
`;

export const CurrentImg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;

  max-width: 445px;
  height: 290px;

  background-color: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`;

type ImgButtonProps = {
  lefr?: boolean;
  right?: boolean;
};

export const ImgButton = styled.button<ImgButtonProps>`
  ${props => props.right && `rotate: calc(180deg);`}

  height: 100%;
  width: 80px;

  color: green;

  :hover,
  :focus {
    color: red;
  }
`;

export const ImgList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const ImgItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 135px;
  height: 88px;

  background-color: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`;

export const BuyBox = styled.div`
  flex: auto;
  margin-top: 10px;
  @media screen and (min-width: 1110px) {
    margin-left: 42px;
  }
`;
export const Availability = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 26px;
  margin-left: 42px;

  @media screen and (min-width: 1110px) {
    margin-left: 0px;
  }
`;

export const TovarBox = styled.div`
  width: 100%;
`;

export const PayBox = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;

  @media screen and (min-width: 1110px) {
    display: flex;
  }
`;

export const Pay = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  :last-child {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    @media screen and (min-width: 1110px) {
      margin: 0;
      padding: 0;
      border: none;
      margin-left: 20px;
      padding-left: 20px;
      border-left: 1px solid rgba(0, 0, 0, 0.1);
    }
  }

  @media screen and (min-width: 1110px) {
    justify-content: space-between;
  }
`;

export const PayItem = styled.li``;

export const PayTitle = styled.span`
  display: block;
  margin-bottom: 10px;

  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  color: #000000;
`;

export const CollButton = styled(NavLink)`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px;
  border: 1px solid #e74e13;
  border-radius: 90px;

  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;

  color: #e74e13;

  :hover,
  :focus {
    color: #84be51;
    border-color: #84be51;
  }
`;

export const AmountBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1110px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
  }
`;

export const Amount = styled.span`
  font-weight: 700;
  font-size: 25px;
  line-height: 1.2;

  color: #84be51;
`;
export const AmountPoint = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;

export const BuyOprion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 15px;

  @media screen and (min-width: 1110px) {
    flex-direction: row;
    justify-content: space-between;

    margin-left: 42px;
    margin-top: 30px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 30px;
  }
`;

export const EllipseButtonList = styled.ul`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 1110px) {
    justify-content: flex-start;
    gap: 20px;
  }
`;

export const Description = styled.div`
  margin-top: 40px;
`;

export const DescriptionList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const DescriptionLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 135px;
  height: 44px;

  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  color: #000000;

  &&.active {
    background: #1e6140;
    color: #ffffff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    border-radius: 20px 20px 0px 0px;
  }
`;

type DescriptionBodyProps = {
  path?: string;
};

export const DescriptionBody = styled.div<DescriptionBodyProps>`
  background: #ffffff;
  padding: 20px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 20px 20px 20px 20px;
  display: none;

  ${props =>
    props.path &&
    `
    display: block;
    `}

  ${props =>
    props.path &&
    props.path === 'description' &&
    `
    border-radius: 0px 20px 20px 20px;
    `}



  @media screen and (width: 320px) {
    ${props =>
      props.path &&
      props.path === 'reviews' &&
      `
      border-radius: 20px 0px 20px 20px;
    `}
  }
`;
