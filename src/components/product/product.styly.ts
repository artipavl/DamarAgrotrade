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

  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
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
