import styled from 'styled-components';

export const ProductBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 255px;
  height: 355px;
  padding: 10px;
  background: #ffffff;

  /* box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15); */
  border-radius: 20px;

  :hover,
  :focus {
    box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
  }
`;
export const ProductBoxComparison = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const ImgBox = styled.div`
  display: flex;
  padding-top: 11px;
  padding-bottom: 32px;
  align-items: center;
  justify-content: center;
`;
export const InfoBox = styled.div`
  width: 235px;
  padding-top: 21px;
  padding-bottom: 35px;
  padding-left: 20px;
  padding-right: 20px;
  background: rgba(140, 50, 19, 0.06);
  border-radius: 20px;
`;

export const InfoBoxTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.2;
`;
export const InfoBoxKeality = styled.span`
  display: block;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #1e6140;
`;

export const InfoBoxPay = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 17px;
`;

export const InfoBoxPrice = styled.span`
  display: block;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  color: #84be51;
`;

export const InfoBoxValue = styled.span`
  display: block;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  width: 41px;
  height: 41px;
  justify-content: center;
  align-items: center;
  color: #8c3213;
  border-radius: 50%;

  :hover,
  :focus {
    background-color: #8c3213;
    color: #fff;

    box-shadow: 0px 5px 14px rgba(140, 50, 19, 0.3);
  }
`;

export const Number = styled.div`
  position: absolute;
  bottom: -1px;
  left: -1px;
  display: flex;
  width: 14px;
  height: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #84be51;

  color: #fff;

  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
