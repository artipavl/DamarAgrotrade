import React, { FC, useState, useEffect } from 'react';
import Box from '../../components/Box/box';
import {
  CurrentImg,
  ImgButton,
  ImgItem,
  ImgList,
  Section,
  TovarInformation,
  BuyBox,
  Availability,
  ImgBox,
  Pay,
  PayItem,
  PayTitle,
  CollButton,
  PayBox,
  TovarBox,
  Amount,
  AmountPoint,
  AmountBox,
  EllipseButtonList,
  BuyOprion,
  Description,
  DescriptionBody,
  DescriptionList,
  DescriptionLink,
} from './tovar.style';

import { ReactComponent as Arrow } from '../../img/arrowSlaider.svg';
import { ReactComponent as Call } from '../../img/call.svg';
import { FaRegHeart } from 'react-icons/fa';
import { ReactComponent as Shopping } from '../../img/shopping.svg';
import { ReactComponent as Comparison } from '../../img/comparison.svg';

import Rectangle from '../../img/product/Rectangle.png';
import Check from '../../img/check.png';
import HeroTitle from '../../components/heroTitle/heroTitle';
import EllipseButton from '../../components/ellipseButton/ellipseButton';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const tovatImgs = [Rectangle, Rectangle, Check];

type TovarProps = {};

const Tovar: FC<TovarProps> = props => {
  const [image, setImage] = useState<number>(0);
  const [path, setPath] = useState<string | undefined>('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !location.pathname.includes('description') &&
      !location.pathname.includes('reviews')
    ) {
      navigate('description');
    }

    const Path = location.pathname.split('/').pop()?.toLocaleLowerCase();
    setPath(Path);
  }, [location.pathname, navigate]);

  const NextImg = (next: boolean, number?: number) => {
    if (number !== undefined) {
      return setImage(number);
    }

    if (next) {
      if (image === tovatImgs.length - 1) {
        return setImage(0);
      }
      return setImage(ima => ima + 1);
    } else {
      if (image === 0) {
        return setImage(tovatImgs.length - 1);
      }
      return setImage(ima => ima - 1);
    }
  };

  return (
    <Box>
      <Section>
        <TovarInformation>
          <ImgBox>
            <CurrentImg>
              <ImgButton type="button" onClick={() => NextImg(false)}>
                <Arrow />
              </ImgButton>
              <img
                src={tovatImgs[image]}
                alt="sdfsdf"
                width={93}
                height={127}
              />
              <ImgButton type="button" onClick={() => NextImg(true)} right>
                <Arrow />
              </ImgButton>
            </CurrentImg>
            <ImgList>
              {tovatImgs.map((Img, index) => (
                <ImgItem key={index} onClick={() => NextImg(true, index)}>
                  <img src={Img} alt="sdfsdf" width={43} height={195} />
                </ImgItem>
              ))}
            </ImgList>
          </ImgBox>
          <TovarBox>
            <HeroTitle title={'Гербіцид Комманд®, ФМС УКРАЇНА'} span={''} />
            <BuyBox>
              <Availability>
                <span>+ В найявності</span>
                <span>1 619,03 грн./л</span>
              </Availability>
              <PayBox>
                <Pay>
                  <PayItem>
                    <PayTitle>Виробник</PayTitle>
                    <span>ФМС Украина</span>
                  </PayItem>
                  <PayItem>
                    <PayTitle>Оплата</PayTitle>
                    <span>ФМС Украина</span>
                  </PayItem>
                </Pay>
                <Pay>
                  <PayItem>
                    <PayTitle>Доставка</PayTitle>
                    <span>Завтра відповідно до тарифів перевізника</span>
                  </PayItem>
                  <PayItem>
                    <CollButton to="/">
                      <Call />
                      Замовити дзвінок
                    </CollButton>
                  </PayItem>
                </Pay>
              </PayBox>
            </BuyBox>
            <BuyOprion>
              <AmountBox>
                <Amount>7814,63 грн</Amount>
                <AmountPoint>Ціна за 5 л</AmountPoint>
              </AmountBox>
              <EllipseButtonList>
                <li>
                  <EllipseButton
                    onClick={() => {}}
                    color="#8C3213"
                    hovercolor="#fff"
                    svg={Shopping}
                  />
                </li>
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
              </EllipseButtonList>
            </BuyOprion>
          </TovarBox>
        </TovarInformation>
        <Description>
          <DescriptionList>
            <li>
              <DescriptionLink to="description">Опис</DescriptionLink>
            </li>
            <li>
              <DescriptionLink to="reviews">Відгуки</DescriptionLink>
            </li>
          </DescriptionList>
          <DescriptionBody path={path}>
            <Outlet />
          </DescriptionBody>
        </Description>
      </Section>
    </Box>
  );
};

export default Tovar;
