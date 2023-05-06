import React, { useState } from 'react';
import Box from '../Box/box';
import {
  HeaderBox,
  MenuBtn,
  Nav,
  NavMenu,
  NavMenuLink,
  NavUser,
} from './header.style';

import { ReactComponent as Cancel } from '../../img/cancel.svg';
import { ReactComponent as Menu } from '../../img/menu.svg';
import { ReactComponent as Seeds } from '../../img/seeds.svg';
import { ReactComponent as Farmer } from '../../img/farmer.svg';
import { ReactComponent as Fertilizer } from '../../img/fertilizer.svg';
import { ReactComponent as Frame } from '../../img/frame.svg';
import { ReactComponent as Sapling } from '../../img/sapling.svg';
import LinkButton from '../linkButton/linkButton';

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header>
      <HeaderBox>
        <Box>
          <Nav>
            <NavMenu>
              <li>
                <NavMenuLink to="/">Про нас</NavMenuLink>
              </li>
              <li>
                <NavMenuLink to="/">Каталог продукції</NavMenuLink>
              </li>
              <li>
                <NavMenuLink to="/">Оплата і доставка</NavMenuLink>
              </li>
              <li>
                <NavMenuLink to="/">Партнери</NavMenuLink>
              </li>
              <li>
                <NavMenuLink to="/">Новини</NavMenuLink>
              </li>
              <li>
                <NavMenuLink to="/">Контакти</NavMenuLink>
              </li>
            </NavMenu>
            <NavUser>
              <NavMenuLink to="/">Вхід</NavMenuLink>
              <span>|</span>
              <NavMenuLink to="/">Реестрація</NavMenuLink>
            </NavUser>
            <MenuBtn type="button" onClick={() => setMenu(menu => !menu)}>
              {menu ? <Cancel></Cancel> : <Menu></Menu>}
            </MenuBtn>
          </Nav>
        </Box>
      </HeaderBox>
      <LinkButton to="/" img={Seeds} text="Насіння" />
      <LinkButton to="/" img={Sapling} text="Засоби захисту рослин" />
      <LinkButton to="/" img={Fertilizer} text="Добрива" />
      <LinkButton to="/" img={Frame} text="кормова група" />
      <LinkButton to="/" img={Farmer} text="Агроному в поміч" />
    </header>
  );
}

export default Header;
