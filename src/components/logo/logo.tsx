import React, { FC } from 'react';
import { LogoLink } from './logo.style';
import { ReactComponent as LogoInc } from '../../img/logo.svg';

type LogoProps = { color?: string };

const Logo: FC<LogoProps> = ({ color }) => {
  return (
    <LogoLink to="/" color={color}>
      <LogoInc />
    </LogoLink>
  );
};

export default Logo;
