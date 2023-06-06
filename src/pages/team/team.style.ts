import styled from 'styled-components';

export const TeamConteiner = styled.div`
  padding-bottom: 50px;

  @media screen and (min-width: 1110px) {
    padding-bottom: 125px;
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 25px;
  margin-bottom: 25px;

  color: rgba(0, 0, 0, 0.5);

`;

export const AccentText = styled.span`
  font-weight: 700;
  color: #1e6140;
`;

export const TeamList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
`;
export const TeamItem = styled.li`
  display: block;
  width: 350px;
`;

export const TeamItemImg = styled.img`
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.15));
  border-radius: 20px;
`;

export const TeamItemName = styled.p`
  margin-top: 15px;
  width: 100%;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  text-align: center;

  color: #000000;
`;
