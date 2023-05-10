import React, { FC } from 'react';

import { FaRegHeart } from 'react-icons/fa';
import { ReactComponent as Shopping } from '../../img/shopping.svg';
import { ReactComponent as Comparison } from '../../img/comparison.svg';

import EllipseButton from '../ellipseButton/ellipseButton';
import { BasketAmount, UserShoppingBox } from './userShopping.style';

type UserShoppingProps = {
  color: string;
  hovercolor: string;
  totalcolor?: string;
};

const UserShopping: FC<UserShoppingProps> = ({ totalcolor, ...props }) => {
  return (
    <UserShoppingBox>
      <li>
        <EllipseButton to="/" {...props} svg={FaRegHeart} />
      </li>
      <li>
        <EllipseButton to="/" {...props} svg={Comparison} numder={1} />
      </li>
      <li>
        <EllipseButton
          onClick={() => {}}
          {...props}
          svg={Shopping}
          numder={1}
        />
        <BasketAmount color={totalcolor}>0.25 грн</BasketAmount>
      </li>
    </UserShoppingBox>
  );
};

export default UserShopping;
