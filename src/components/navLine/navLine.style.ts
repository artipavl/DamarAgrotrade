import styled from 'styled-components';

export const NaveLineBox = styled.div`
  margin-top: 205.5px;
  padding-top: 46px;
  padding-bottom: 8px;
`;

export const NaveLineList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;

  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  text-align: center;

  color: rgba(0, 0, 0, 0.5);
`;
export const NaveLineitem = styled.li`
  display: flex;

  align-items: center;
  :last-child {
    font-weight: 700;
  }

  :not(:first-child) {
    ::before {
      display: inline-block;
      content: ' ';
      width: 6px;
      height: 6px;
      margin-right: 8px;
      background-color: #84c551;
      border-radius: 50%;
    }
  }
`;
