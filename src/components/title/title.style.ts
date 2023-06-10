import styled from 'styled-components';

type H2Props = {
  color?: string;
  before?: boolean;
  after?: boolean;
  center?: boolean;
};

export const H2 = styled.div<H2Props>`
  display: flex;
  justify-content: ${props => props.center && 'center'};
  gap: 10px;

  margin-left: 16px;
  margin-right: 16px;

  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  text-align: center;

  color: ${props => props.color || '#000000'};

  &::before {
    content: ' ';
    display: ${props => (props.before ? 'block' : 'none')};
    width: 14px;
    height: 11px;
    margin-top: 11px;
    background-image: url(${require(`../../img/accent.svg`).default});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (min-width: 1440px) {
      width: 32px;
      height: 25px;
      margin-top: 25px;
    }
  }

  &::after {
    content: ' ';
    display: ${props => (props.after ? 'block' : 'none')};
    width: 14px;
    height: 11px;
    margin-top: 11px;
    background-image: url(${require(`../../img/accent.svg`).default});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (min-width: 1440px) {
      width: 32px;
      height: 25px;
      margin-top: 25px;
    }
  }

  @media (min-width: 1440px) {
    font-size: 45px;
    line-height: 55px;
    gap: 18px;
  }

  @media (max-width: 480px) {
    & > h2 {
      display: block;
      max-width: calc(100% - 28px - 20px - 32px);
    }
  }
`;
