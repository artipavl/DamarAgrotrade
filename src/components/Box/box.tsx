import * as React from 'react';
import { Content } from './box.style';

export interface BoxProps {
  children: React.ReactElement;
  bgc?: string;
}

function Box({ children, bgc }: BoxProps) {
  return <Content bgc={bgc}>{children}</Content>;
}

export default Box;
