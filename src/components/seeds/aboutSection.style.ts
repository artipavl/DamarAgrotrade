import styled from 'styled-components';

type BgImgPrpps = {
  bg: String;
};

export const BgImg = styled.div<BgImgPrpps>`
  background: linear-gradient(
      80.25deg,
      rgba(132, 190, 81, 0.4) 1.38%,
      rgba(132, 190, 81, 0) 62.36%
    ),
    linear-gradient(
      262.1deg,
      rgba(232, 78, 15, 0.3) 3.67%,
      rgba(232, 78, 15, 0) 87.59%
    ),
    linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    ${props => `url(${props.bg})`};

  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;

  @media (min-width: 1440px) {
    background-position: left bottom;
  }
`;
export const AboutSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding-top: 34px;
  padding-bottom: 40px;

  @media (min-width: 1440px) {
    padding-top: 110px;
    padding-bottom: 120px;
    gap: 16px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Text = styled.p`
  color: rgba(255, 255, 255, 0.6);
  @media (min-width: 1440px) {
    color: #ffffff;
  }
`;
