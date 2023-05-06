import * as React from 'react';
import { Content } from './box.style';

export interface BoxProps {
  children: React.ReactElement;
}

function Box({ children }: BoxProps) {

  return <Content>{children}</Content>;
}

export default Box;
