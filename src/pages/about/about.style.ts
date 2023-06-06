import styled from 'styled-components';

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 25px;
  margin-bottom: 25px;

  color: rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 1110px) {
    margin-bottom: 110px;
  }
`;

export const AccentText = styled.span`
  font-weight: 700;
  color: #1e6140;
`;

export const AboutList = styled.ul`
  font-weight: 300;
  color: #000000;
`;
export const AboutItem = styled.li`
  display: flex;

  ::before {
    content: '·';
    display: block;
    margin-left: 16px;
    margin-right: 16px;
  }
`;
