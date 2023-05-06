import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkBtn = styled(NavLink)`
  display: flex;
  width: 200px;
  height: 40px;
  padding: 0 15px;

  align-items: center;
  justify-content: center;
  gap: 10px;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #000000;

  border: 1px solid #1e6140;
  border-radius: 20px;
  :hover,
  :focus {
    color: #ffffff;
    background: #e74e13;
    border-color: #e74e13;
    svg {
      fill: '#fff';
    }
  }
  /* &.active {
    color: #000000;
  } */
`;
