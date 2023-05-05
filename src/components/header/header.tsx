import React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '../Box/box';

function Header() {
  return (
    <header>
      <Box paddingTop={0} paddingBottom={0}>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Про нас</NavLink>
            </li>
            <li>
              <NavLink to="/">Каталог продукції</NavLink>
            </li>
            <li>
              <NavLink to="/">Оплата і доставка</NavLink>
            </li>
            <li>
              <NavLink to="/">Партнери</NavLink>
            </li>
            <li>
              <NavLink to="/">Новини</NavLink>
            </li>
            <li>
              <NavLink to="/">Контакти</NavLink>
            </li>
          </ul>

          <NavLink to="/">Вхід</NavLink>
          <NavLink to="/">Реестрація</NavLink>
          <button type="button">|||</button>
        </nav>
      </Box>
    </header>
  );
}

export default Header;
