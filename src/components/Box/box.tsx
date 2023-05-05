import * as React from 'react';
import { Content } from './box.style';

export interface BoxProps {
  paddingTop: number;
  paddingBottom: number;
  children: React.ReactElement;
}

function Box({ children, ...props }: BoxProps) {
  return <Content {...props}>{children}</Content>;
}

export default Box;
