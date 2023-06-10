import styled from 'styled-components';

export const DogovirConteiner = styled.div`
  padding-bottom: 40px;

  @media screen and (min-width: 1110px) {
    padding-bottom: 109px;
  }
`;

export const Text = styled.p`
  color: #000000;
  padding-top: 25px;
  @media screen and (min-width: 1110px) {
    padding-top: 32px;
  }
`;

export const TexstTitle = styled.h2`
  display: inline;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  color: #1e6140;
`;

export const TextList = styled.ol`
  counter-reset: ol-number;
`;

export const TextItem = styled.li`
  margin-top: 40px;

  ::before {
    counter-increment: ol-number;
    content: counter(ol-number) '.';
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;

    margin-right: 9px;
    color: #1e6140;
  }
`;

export const TextListSecond = styled.ol`
  counter-reset: ol-number-second;
`;

export const TextItemSecond = styled.li`
  margin-top: 16px;

  ::before {
    counter-increment: ol-number-second;
    content: counter(ol-number) '.' counter(ol-number-second) '.';
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    margin-right: 8px;
    color: #000000;
  }
`;
