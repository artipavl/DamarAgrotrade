import styled from 'styled-components';

export const AboutConteiner = styled.div`
  padding-bottom: 25px;

  @media screen and (min-width: 1110px) {
    padding-bottom: 110px;
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 25px;

  color: rgba(0, 0, 0, 0.5);
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
