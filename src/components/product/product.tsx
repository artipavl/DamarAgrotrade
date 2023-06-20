import React, { FC, useEffect, useState } from 'react';

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
import { useAppDispatch } from '../../hooks';
import {
  addToСomparison,
  selectСomparison,
} from '../../redux/comparison/comparisonSlice';
import { useSelector } from 'react-redux';

type ProductProps = {
  product: product;
};

const Product: FC<ProductProps> = ({ product }) => {
  const [comparison, setСomparison] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const AllComparison = useSelector(selectСomparison);

  useEffect(() => {
    const find = AllComparison.find(item => item.id === product.id);

    find ? setСomparison(true) : setСomparison(false);
  }, [AllComparison, product.id]);

  return (
    <ProductBox>
      <ProductBoxComparison>
        <Button
          comparison={comparison}
          onClick={() => !comparison && dispatch(addToСomparison(product))}
        >
          <Comparison></Comparison>
          {AllComparison.length !== 0 && (
            <Number>
              <span>{AllComparison.length}</span>
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
