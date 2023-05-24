import React, { FC } from 'react';

import EllipseButton from '../ellipseButton/ellipseButton';

import { ReactComponent as Shopping } from '../../img/shopping.svg';
import { ReactComponent as Comparison } from '../../img/comparison.svg';
import {
  Button,
  ImgBox,
  InfoBox,
  InfoBoxKeality,
  InfoBoxPay,
  InfoBoxPrice,
  InfoBoxTitle,
  InfoBoxValue,
  Number,
  ProductBox,
  ProductBoxComparison,
} from './product.styly';

import Rectangle from '../../img/product/Rectangle.png';

type ProductProps = {
  numder?: number;
};

const Product: FC<ProductProps> = ({ numder = 0 }) => {
  return (
    <ProductBox>
      <ProductBoxComparison>
        <Button>
          <Comparison></Comparison>
          {numder !== 0 && (
            <Number>
              <span>{numder}</span>
            </Number>
          )}
        </Button>
      </ProductBoxComparison>
      <ImgBox>
        <img src={Rectangle} alt="asdas" height="132" width="97" />
      </ImgBox>
      <InfoBox>
        <InfoBoxTitle>Скор 250 ЕС к.э.</InfoBoxTitle>
        <InfoBoxKeality>В наявності</InfoBoxKeality>

        <InfoBoxPay>
          <div>
            <InfoBoxPrice>200 грн</InfoBoxPrice>
            <InfoBoxValue>1 шт</InfoBoxValue>
          </div>
          <EllipseButton color="#8C3213" hovercolor="#fff" svg={Shopping} />
        </InfoBoxPay>
      </InfoBox>
    </ProductBox>
  );
};

export default Product;
