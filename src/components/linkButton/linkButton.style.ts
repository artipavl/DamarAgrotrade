import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkBtn = styled(NavLink)`
  display: flex;
  width: 290px;
  height: 47px;
  padding: 0 15px;

  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;

  color: #ffffff;

  background: #e74e13;

  border: 1px solid #e74e13;
  border-radius: 20px;

  :hover,
  :focus {
    color: #e74e13;
    background: #ffffff;
  }
`;
