import React, { FC } from 'react';
import {
  FooterBox,
  FooterInform,
  FooterLink,
  FooterLinkList,
  FooterMain,
  FooterTitle,
  Inform,
} from './footer.style';
import Logo from '../logo/logo';

import PhoneBox from '../phoneBox/phoneBox';
import Box from '../Box/box';
import MailBox from '../mailBox/mailBox';

type FooterProps = {};

const Footer: FC<FooterProps> = props => {
  return (
    <FooterBox>
      <Box>
        <>
          <FooterMain>
            <div>
              <Logo />
              <p>Пропонуємо покупцям широкий вибір насіння овочів</p>
            </div>
            <FooterInform>
              <div>
                <FooterTitle>Товари</FooterTitle>
                <FooterLinkList>
                  <li>
                    <FooterLink to="/">Каталог продукції</FooterLink>
                  </li>
                  <li>
                    <FooterLink to="/">Засоби захисту рослин</FooterLink>
                  </li>
                  <li>
                    <FooterLink to="/">Насіння</FooterLink>
                  </li>
                  <li>
                    <FooterLink to="/">Добрива</FooterLink>
                  </li>
                  <li>
                    <FooterLink to="/">Агроному в поміч</FooterLink>
                  </li>
                </FooterLinkList>
              </div>
              <div>
                <FooterTitle>Інформація</FooterTitle>
                <FooterLinkList>
                  <li>
                    <FooterLink to="/">Про компанію</FooterLink>
                  </li>
                  <li>
                    <FooterLink to="/">Оплата i доставка</FooterLink>
                  </li>
                  <li>
                    <FooterLink to="/">Партнери</FooterLink>
                  </li>
                </FooterLinkList>
              </div>
            </FooterInform>
            <div>
              <FooterTitle>Контакти</FooterTitle>
              <FooterLinkList>
                <li>
                  <PhoneBox
                    color="#8C3213"
                    hovercolor="#fff"
                    bgc="#ffffff"
                    textColor="#000000"
                  />
                </li>
                <li>
                  <MailBox
                    color="#8C3213"
                    hovercolor="#fff"
                    bgc="#ffffff"
                    textColor="#000000"
                  />
                </li>
              </FooterLinkList>
            </div>
          </FooterMain>
          <Inform>© 2022 DAT</Inform>
        </>
      </Box>
    </FooterBox>
  );
};

export default Footer;
