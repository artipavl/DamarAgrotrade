import React, { FC } from 'react';
import Box from '../Box/box';
import Logo from '../logo/logo';
import UserShopping from '../userShopping/userShopping';
import EllipseButton from '../ellipseButton/ellipseButton';
import { FaRegHeart } from 'react-icons/fa';
import QueryForm from '../queryForm/queryForm';
import PhoneBox from '../phoneBox/phoneBox';
import { NavLink } from 'react-router-dom';
import {
  MobileBox,
  MobileComponent,
  NavLinkText,
  Nave,
  NaveList,
} from './mobileMenu.style';

type MobileMenuProps = {};

const MobileMenu: FC<MobileMenuProps> = props => {
  return (
    <MobileBox>
      <Box bgc="#1E6140">
        <>
          <MobileComponent>
            <Logo color="#ffffff" />
            <UserShopping color="#ffffff" hovercolor="#8C3213" />
          </MobileComponent>
          <MobileComponent>
            <EllipseButton
              to="/"
              color="#ffffff"
              hovercolor="#8C3213"
              svg={FaRegHeart}
            />
            <QueryForm width="230px" />
          </MobileComponent>
          <MobileComponent>
            <PhoneBox bgc="#1E6140" color="#ffffff" hovercolor="#8C3213" />
          </MobileComponent>
          <Nave>
            <NaveList>
              <li>
                <NavLinkText to="/">Про компанію</NavLinkText>
              </li>
              <li>
                <NavLinkText to="/k">Каталог продукції</NavLinkText>
              </li>
              <li>
                <NavLinkText to="/o">Оплата і доставка</NavLinkText>
              </li>
              <li>
                <NavLinkText to="/p">Партнери</NavLinkText>
              </li>
              <li>
                <NavLinkText to="/k">Контакти</NavLinkText>
              </li>
            </NaveList>
          </Nave>
        </>
      </Box>
    </MobileBox>
  );
};

export default MobileMenu;
