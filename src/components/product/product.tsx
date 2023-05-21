import React, { FC } from 'react';

import EllipseButton from '../ellipseButton/ellipseButton';

import { ReactComponent as Shopping } from '../../img/shopping.svg';
import { ReactComponent as Comparison } from '../../img/comparison.svg';
import {
  ImgBox,
  InfoBox,
  InfoBoxKeality,
  InfoBoxPay,
  InfoBoxPrice,
  InfoBoxTitle,
  InfoBoxValue,
  ProductBox,
  ProductBoxComparison,
} from './product.styly';

import Rectangle from '../../img/product/Rectangle.png';

type ProductProps = {};

const Product: FC<ProductProps> = props => {
  return (
    <ProductBox>
      <ProductBoxComparison>
        <EllipseButton color="#8C3213" hovercolor="#fff" svg={Comparison} />
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
