import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type HeaderBoxProps = {
  menu: boolean;
};

export const HedetPosition = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
`;

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
  padding-left: 10px;
  padding-right: 10px;

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

export const NaveSelector = styled.li`
  position: relative;
  display: flex;
  gap: 5px;
  align-items: center;

  padding-right: 10px;
  :hover,
  :focus {
    background-color: #347153;
    & > ul {
      display: flex;
    }
    & > svg {
      rotate: calc(180deg);
    }
  }
`;

export const NaveSelectorList = styled.ul`
  position: absolute;
  z-index: 3;
  top: 50px;
  left: 0;
  display: none;
  flex-direction: column;
  gap: 5px;

  width: 220px;
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 15px;

  background-color: #347153;
  border-radius: 0px 0px 20px 20px;
`;

export const NaveSelectorLink = styled(NavLink)`
  display: flex;
  height: 50px;
  padding-left: 10px;

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

export const HeaderInform = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;
  margin-bottom: 20px;
`;
