import styled from 'styled-components';

type HeroTitleBoxProps = {
  color?: string;
  before?: boolean;
  after?: boolean;
  center?: boolean;
};

export const HeroTitleBox = styled.div<HeroTitleBoxProps>`
  display: flex;
  align-items: center;

  &::before {
    content: ' ';
    display: block;
    width: 32px;
    height: 25px;
    margin-right: 10px;
    background-image: url(${require(`../../img/accent.svg`).default});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (min-width: 1924px) {
      margin-top: 27px;
    }
  }
  @media (min-width: 1924px) {
    align-items: start;
  }
`;

export const H1 = styled.h1`
  display: flex;

  flex-direction: column;
  font-weight: 700;
  font-size: 25px;
  line-height: 1.2;

  @media (min-width: 1924px) {
    font-size: 55px;
    line-height: 67px;
  }
`;

export const Span = styled.span`
  font-weight: 300;
  font-size: 25px;

  @media (min-width: 1924px) {
    font-size: 55px;
    line-height: 67px;
  }
`;
