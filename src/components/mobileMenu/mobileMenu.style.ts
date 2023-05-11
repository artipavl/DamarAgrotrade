import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MobileBox = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  z-index: 1;

  width: 100%;
  min-height: calc(100vh - 50px);

  background-color: #1e6140;
`;

export const MobileComponent = styled.div`
  display: flex;
  width: 290px;
  justify-content: space-between;
  margin: auto;
  :first-child {
    margin-bottom: 10px;
  }
  :not(:first-child) {
    margin-bottom: 20px;
  }
`;

export const Nave = styled.nav`
  display: block;
  padding-top: 60px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: auto;
`;

export const NaveList = styled.nav`
  display: flex;
  width: 290px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin: auto;
`;

export const NavLinkText = styled(NavLink)`
  font-weight: 300;
  font-size: 22px;
  line-height: 2.86;
  color: #ffffff;

  &.active,
  :hover,
  :focus {
    color: #84be51;
  }
`;
