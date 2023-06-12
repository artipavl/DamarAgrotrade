import React, { FC, useState } from 'react';
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
  Line,
  PayBox,
  TovarBox,
} from './tovar.style';

import { ReactComponent as Arrow } from '../../img/arrowSlaider.svg';
import { ReactComponent as Call } from '../../img/call.svg';

import Rectangle from '../../img/product/Rectangle.png';
import Check from '../../img/check.png';
import HeroTitle from '../../components/heroTitle/heroTitle';

const tovatImgs = [Rectangle, Rectangle, Check];

type TovarProps = {};

const Tovar: FC<TovarProps> = props => {
  const [image, setImage] = useState<number>(0);

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
                    <Line></Line>
                  </PayItem>
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
          </TovarBox>
        </TovarInformation>
      </Section>
    </Box>
  );
};

export default Tovar;
