import React, { FC, useMemo } from 'react';
import { NaveLineBox, NaveLineList, NaveLineitem } from './navLine.style';
import Box from '../Box/box';
import { useLocation } from 'react-router-dom';

type pathB = {
  path: Object;
  get: Function;
};

const pathBook: pathB = {
  path: {
    about: 'Про нас',
    team: 'Наша команда',
    partners: 'Партнери',
    dogovir: 'Договір публічної оферти',
    kodex: 'Корпоративний кодекс',
    policy: 'Політика конфіденційності',
    catalog: 'Каталог продукції',
    pay: 'Оплата і доставка',
    news: 'Новини',
    contacts: 'Контакти',
    logIn: 'Авторизація',
    registration: 'Реєстрація',
    cabinet: 'Особистий кабінет',
  },
  get: function (ownKey: string) {
    const arr = Object.values(this.path);
    const keys = Object.keys(this.path);
    const position = keys.indexOf(ownKey);
    return position > -1 ? arr[position] : undefined;
  },
};

type NavLineProps = {};

const NavLine: FC<NavLineProps> = props => {
  const nav = useLocation();

  const naveItems = useMemo(() => {
    return nav.pathname
      .split('/')
      .map(key => {
        const title = pathBook.get(key);
        return title;
      })
      .filter(path => path);
  }, [nav.pathname]);

  return (
    <Box>
      <NaveLineBox>
        <NaveLineList>
          <NaveLineitem>Головна</NaveLineitem>
          {naveItems.map(nav => (
            <NaveLineitem key={nav}>{nav}</NaveLineitem>
          ))}
        </NaveLineList>
      </NaveLineBox>
    </Box>
  );
};

export default NavLine;
