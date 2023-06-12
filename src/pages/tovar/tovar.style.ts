import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section``;

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
`;

export const Pay = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 20px;
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

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
`;
