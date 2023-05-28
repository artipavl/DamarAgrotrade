import React, { FC, useEffect, useState } from 'react';
import {
  FooterBox,
  FooterInform,
  FooterLink,
  FooterLinkList,
  FooterMain,
  FooterTitle,
  Inform,
  UpButton,
} from './footer.style';
import Logo from '../logo/logo';

import PhoneBox from '../phoneBox/phoneBox';
import Box from '../Box/box';
import MailBox from '../mailBox/mailBox';

import { ReactComponent as Arrow } from '../../img/arrowSlaider.svg';

type FooterProps = {};

const Footer: FC<FooterProps> = props => {
  const [opascityButton, setOpascityButton] = useState<number>(0);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 500) {
        setOpascityButton(1);
      } else {
        setOpascityButton(0);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      <UpButton
        type="button"
        opacity={opascityButton}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
      >
        <Arrow style={{ transform: 'rotate(90deg)' }} />
      </UpButton>
    </FooterBox>
  );
};

export default Footer;
