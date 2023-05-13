import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type HeaderBoxProps = {
  menu: boolean;
};

export const HeaderBox = styled.div<HeaderBoxProps>`
  position: relative;
  background-color: ${props => (props.menu ? '#347053' : '#1e6140')};

  @media (min-width: 1140px) {
    background-color: #1e6140;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NavMenu = styled.ul`
  display: none;

  @media (min-width: 1140px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 20px;
  }
`;

export const NavMenuLink = styled(NavLink)`
  display: flex;
  height: 50px;

  align-items: center;

  font-weight: 300;
  font-size: 16px;
  line-height: 1.25;

  color: #ffffff;

  &.active,
  :hover,
  :focus {
    color: #84be51;
  }
`;

export const NavUser = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  color: #fff;

  @media (min-width: 1140px) {
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    padding-left: 54px;
    padding-right: 18px;
  }
`;

export const MenuBtn = styled.button`
  width: 50px;
  height: 50px;
  @media (min-width: 1140px) {
    display: none;
  }
`;

export const LinkBox = styled.ul`
  /* display: none; */

  /* @media (min-width: 1140px) { */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
  /* } */
`;

export const HeaderInform = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;
  margin-bottom: 20px;
`;
