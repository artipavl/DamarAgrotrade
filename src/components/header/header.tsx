import React, { useState } from 'react';
import Box from '../Box/box';
import {
  HeaderBox,
  MenuBtn,
  Nav,
  NavMenu,
  NavMenuLink,
  NavUser,
  LinkBox,
  BasketAmount,
  UserShopping,
  HeaderInform,
} from './header.style';

import { FaRegHeart } from 'react-icons/fa';

import { ReactComponent as Cancel } from '../../img/cancel.svg';
import { ReactComponent as Menu } from '../../img/menu.svg';
import { ReactComponent as Seeds } from '../../img/seeds.svg';
import { ReactComponent as Farmer } from '../../img/farmer.svg';
import { ReactComponent as Fertilizer } from '../../img/fertilizer.svg';
import { ReactComponent as Frame } from '../../img/frame.svg';
import { ReactComponent as Sapling } from '../../img/sapling.svg';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { ReactComponent as Shopping } from '../../img/shopping.svg';
import { ReactComponent as Comparison } from '../../img/comparison.svg';
import LinkButton from '../linkButton/linkButton';
import { Link } from 'react-router-dom';
import EllipseButton from '../ellipseButton/ellipseButton';
import PhoneBox from '../phoneBox/phoneBox';
import QueryForm from '../queryForm/queryForm';

function Header() {
  const [menu, setMenu] = useState(true);

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
      <Box>
        <HeaderInform>
          <Link to="/">
            <Logo />
          </Link>
          <QueryForm />
          <PhoneBox />
          <UserShopping>
            <li>
              <EllipseButton
                to="/"
                color="#8C3213"
                hovercolor="#fff"
                svg={FaRegHeart}
              />
            </li>
            <li>
              <EllipseButton
                to="/"
                color="#8C3213"
                hovercolor="#fff"
                svg={Comparison}
                numder={1}
              />
            </li>
            <li>
              <EllipseButton
                onClick={() => {}}
                color="#8C3213"
                hovercolor="#fff"
                svg={Shopping}
                numder={1}
              />
              <BasketAmount>0.25 грн</BasketAmount>
            </li>
          </UserShopping>
        </HeaderInform>
      </Box>
      <Box>
        <LinkBox>
          <li>
            <LinkButton to="/" img={Seeds} text="Насіння" />
          </li>
          <li>
            <LinkButton to="/" img={Sapling} text="Засоби захисту рослин" />
          </li>
          <li>
            <LinkButton to="/" img={Fertilizer} text="Добрива" />
          </li>
          <li>
            <LinkButton to="/" img={Frame} text="кормова група" />
          </li>
          <li>
            <LinkButton to="/" img={Farmer} text="Агроному в поміч" />
          </li>
        </LinkBox>
      </Box>
    </header>
  );
}

export default Header;
