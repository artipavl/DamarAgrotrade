import React, { FC, useState, useEffect, useMemo } from 'react';
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
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { BD } from '../../BD/BD';
import { useAppDispatch } from '../../hooks';
import { addToBasket } from '../../redux/basket/basketSlice';

const tovatImgs = [Rectangle, Rectangle, Check];

type TovarProps = {};

const Tovar: FC<TovarProps> = props => {
  const [image, setImage] = useState<number>(0);
  const [path, setPath] = useState<string | undefined>('');
  const { id } = useParams();

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const tovar = useMemo(() => {
    return BD.find(item => item.id === id);
  }, [id]);

  useEffect(() => {
    // if (
    //   !location.pathname.includes('description') &&
    //   !location.pathname.includes('reviews')
    // ) {
    //   navigate('description');
    // }

    const Path = location.pathname.split('/').pop()?.toLocaleLowerCase();
    Path === 'reviews' ? setPath(Path) : setPath('');
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

  if (!tovar) {
    return <></>;
  }

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
                src={tovar?.imgs[image]}
                alt="sdfsdf"
                width={93}
                height={127}
              />
              <ImgButton type="button" onClick={() => NextImg(true)} right>
                <Arrow />
              </ImgButton>
            </CurrentImg>
            <ImgList>
              {tovar?.imgs.map(
                (Img, index) =>
                  index < 3 && (
                    <ImgItem key={index} onClick={() => NextImg(true, index)}>
                      <img
                        src={Img}
                        alt={tovar.title}
                        width={43}
                        height={195}
                      />
                    </ImgItem>
                  )
              )}
            </ImgList>
          </ImgBox>
          <TovarBox>
            <HeroTitle
              title={`${
                tovar.title
              }, ${tovar.producer.name.toLocaleUpperCase()}`}
              span={''}
            />
            <BuyBox>
              <Availability>
                <span>
                  {tovar.availability ? '+В наявності' : '-Не в наявності'}
                </span>
                {/* <span>1 619,03 грн./л</span> */}
              </Availability>
              <PayBox>
                <Pay>
                  <PayItem>
                    <PayTitle>Виробник</PayTitle>
                    <span>{tovar.producer.name}</span>
                  </PayItem>
                  <PayItem>
                    <PayTitle>Оплата</PayTitle>
                    <span>-</span>
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
                <Amount>{tovar.price} грн</Amount>
                <AmountPoint>
                  Ціна за {tovar.value} {tovar.unit}
                </AmountPoint>
              </AmountBox>
              <EllipseButtonList>
                <li>
                  <EllipseButton
                    onClick={() => {dispatch(
                      addToBasket(tovar)
                    );}}
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
              <DescriptionLink active={path !== 'reviews' ? 1 : 0} to="">
                Опис
              </DescriptionLink>
            </li>
            <li>
              <DescriptionLink active={path === 'reviews' ? 1 : 0} to="reviews">
                Відгуки
              </DescriptionLink>
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
