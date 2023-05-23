import styled from 'styled-components';

export const ActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
  padding-top: 34px;
  padding-bottom: 40px;
  background: #1e6140;
  @media screen and (min-width: 1440px) {
    gap: 40px;
    padding-top: 112px;
    padding-bottom: 117px;
  }
`;

export const Button = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;
