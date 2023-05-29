import React, { useState } from 'react';
import Box from '../Box/box';
import {
  HeaderBox,
  MenuBtn,
  Nav,
  NavMenu,
  NavMenuLink,
  NavUser,
  HeaderInform,
  NaveSelector,
  NaveSelectorList,
  NaveSelectorLink,
  HedetPosition,
} from './header.style';

import { ReactComponent as Cancel } from '../../img/cancel.svg';
import { ReactComponent as Menu } from '../../img/menu.svg';

import { ReactComponent as Arrow } from '../../img/arrow.svg';

import PhoneBox from '../phoneBox/phoneBox';
import QueryForm from '../queryForm/queryForm';
import UserShopping from '../userShopping/userShopping';
import Logo from '../logo/logo';
import MobileMenu from '../mobileMenu/mobileMenu';
import Services from '../services/services';

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <HedetPosition>
      <HeaderBox menu={menu}>
        <Box>
          <Nav>
            <NavMenu>
              <NaveSelector>
                <NaveSelectorLink to="/about">Про нас</NaveSelectorLink>{' '}
                <Arrow color="#84BE51" />
                <NaveSelectorList>
                  <li>
                    <NavMenuLink to="/team">Наша команда</NavMenuLink>
                  </li>
                  <li>
                    <NavMenuLink to="/partners">Партнери</NavMenuLink>
                  </li>
                  <li>
                    <NavMenuLink to="/dogovir">Договір</NavMenuLink>
                  </li>
                </NaveSelectorList>
              </NaveSelector>
              <li>
                <NavMenuLink to="/catalog">Каталог продукції</NavMenuLink>
              </li>
              <li>
                <NavMenuLink to="/pay">Оплата і доставка</NavMenuLink>
              </li>
              <li>
                <NavMenuLink to="/partners">Партнери</NavMenuLink>
              </li>
              <li>
                <NavMenuLink to="/news">Новини</NavMenuLink>
              </li>
              <li>
                <NavMenuLink to="/contacts">Контакти</NavMenuLink>
              </li>
            </NavMenu>
            <NavUser>
              <NavMenuLink to="/logIn">Вхід</NavMenuLink>
              <span>|</span>
              <NavMenuLink to="/registration">Реестрація</NavMenuLink>
            </NavUser>
            <MenuBtn type="button" onClick={() => setMenu(menu => !menu)}>
              {menu ? <Cancel></Cancel> : <Menu></Menu>}
            </MenuBtn>
          </Nav>
        </Box>
        {menu && <MobileMenu />}
      </HeaderBox>
      <Box>
        <HeaderInform>
          <Logo />
          <QueryForm render={false} />
          <PhoneBox
            render={false}
            color="#8C3213"
            hovercolor="#fff"
            bgc="#ffffff"
            textColor="#000000"
          />
          <UserShopping color="#8C3213" hovercolor="#fff" />
        </HeaderInform>
      </Box>
      <Box>
        <Services />
      </Box>
    </HedetPosition>
  );
}

export default Header;
