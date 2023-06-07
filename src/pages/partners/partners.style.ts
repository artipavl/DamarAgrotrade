import styled from 'styled-components';

export const PartnersConteiner = styled.div`
  padding-bottom: 37px;

  @media screen and (min-width: 1110px) {
    padding-bottom: 118px;
  }
`;

export const PartnersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
`;
export const PartnersItem = styled.li`
  display: block;
  width: 540px;
`;

export const PartnerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 255px;
  height: 126px;
  background: #ffffff;
  border-radius: 20px;
`;

export const PartnerTitle = styled.h3`
  max-width: 230px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #000000;
`;

export const Text = styled.p`
  color: rgba(0, 0, 0, 0.5);
`;
