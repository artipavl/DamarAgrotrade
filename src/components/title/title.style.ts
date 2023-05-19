import styled from 'styled-components';

type H2Props = {
  color?: string;
  before?: boolean;
  after?: boolean;
  center?: boolean;
};

export const H2 = styled.h2<H2Props>`
  display: flex;
  align-items: end;
  justify-content: ${props => props.center && 'center'};

  font-weight: 700;
  font-size: 22px;
  line-height: 27px;

  color: ${props => props.color || '#000000'};

  &::before {
    content: ' ';
    display: ${props => (props.before ? 'block' : 'none')};
    width: 14px;
    height: 11px;
    margin-bottom: 5px;
    margin-right: 10px;
    background-image: url(${require(`../../img/accent.svg`).default});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media (min-width: 1440px) {
      width: 32px;
      height: 25px;
      margin-right: 17px;
      margin-bottom: 12.5px;
    }
  }

  &::after {
    content: ' ';
    display: ${props => (props.after ? 'block' : 'none')};
    width: 14px;
    height: 11px;
    margin-bottom: 5px;
    margin-left: 10px;
    background-image: url(${require(`../../img/accent.svg`).default});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media (min-width: 1440px) {
      width: 32px;
      height: 25px;
      margin-left: 17px;
      margin-bottom: 12.5px;
    }
  }

  @media (min-width: 1440px) {
    font-size: 45px;
    line-height: 55px;
  }
`;