import * as React from 'react';
import { Content } from './box.style';

export interface BoxProps {
  children: React.ReactElement;
  bgc?: string;
  wh?: number;
}

function Box({ children, bgc, wh }: BoxProps) {
  return (
    <Content bgc={bgc} wh={wh}>
      {children}
    </Content>
  );
}

export default Box;
