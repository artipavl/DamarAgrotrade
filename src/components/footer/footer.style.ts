import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterBox = styled.footer`
  margin-top: auto;
`;

export const FooterMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  @media (min-width: 1140px) {
    flex-direction: row;
    gap: 70px;
  }
  @media (min-width: 321px) and (max-width: 1139px) {
    & > {
      :last-child {
        margin: auto;
      }
    }
  }
`;

export const FooterInform = styled.div`
  display: flex;
  gap: 20px;
  @media (min-width: 321px) {
    gap: 0;
    justify-content: space-evenly;
  }
  @media (min-width: 1140px) {
    gap: 70px;
    justify-content: start;
  }
`;

export const FooterTitle = styled.footer`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;

  margin-bottom: 25px;
`;

export const FooterLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const FooterLink = styled(Link)`
  color: #000000;

  &:hover,
  :focus {
    color: #84be51;
  }
`;

export const Inform = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;

  text-align: center;

  color: #000000;

  opacity: 0.5;
`;
