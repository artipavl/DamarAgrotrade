import styled from 'styled-components';

export const AboutBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 40px;

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 124px;
    padding-top: 108px;
  }
`;
export const ImageBox = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: inherit;
  @media (min-width: 1440px) {
    min-width: 683px;
    height: inherit;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > a {
    margin: auto;
    margin-top: 30px;
    @media (min-width: 1440px) {
      margin: 0;
      margin-top: 30px;
    }
  }
  @media (min-width: 1440px) {
    &:first-child {
      margin-bottom: 25px;
    }
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  color: rgba(0, 0, 0, 0.5);
`;
export const TextAccent = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  color: #1e6140;
`;
