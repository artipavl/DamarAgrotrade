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

import { useNavigate } from 'react-router-dom';
import { product } from '../../BD/BD';

type ProductProps = {
  numder?: number;
  product: product;
};

const Product: FC<ProductProps> = ({ numder = 0, product }) => {
  const navigate = useNavigate();
  console.log(product);

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
        <img src={product.imgs[0]} alt="asdas" height="132" width="97" />
      </ImgBox>
      <InfoBox>
        <InfoBoxTitle>{product.title}</InfoBoxTitle>
        <InfoBoxKeality>
          {product.availability ? 'В наявності' : 'Не в наявності'}
        </InfoBoxKeality>

        <InfoBoxPay>
          <div>
            <InfoBoxPrice>{product.price} грн</InfoBoxPrice>
            <InfoBoxValue>
              {product.value} {product.unit}
            </InfoBoxValue>
          </div>
          <EllipseButton
            color="#8C3213"
            hovercolor="#fff"
            svg={Shopping}
            onClick={() => navigate(`/tovar/${product.id}`)}
          />
        </InfoBoxPay>
      </InfoBox>
    </ProductBox>
  );
};

export default Product;
