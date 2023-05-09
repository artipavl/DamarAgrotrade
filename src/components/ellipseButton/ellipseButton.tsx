import React, { FC } from 'react';

import { LinkBtn, Button, Number } from './ellipseButton.style';

type EllipseButtonProps = {
  numder?: number;
  onClick?: Function;
  color: string;
  hovercolor: string;
  to?: string;
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
};

const EllipseButton: FC<EllipseButtonProps> = ({
  onClick = () => {},
  to,
  svg: Svg,
  numder,
  ...style
}) => {
  return to ? (
    <LinkBtn to={to} {...style}>
      <Svg></Svg>
      {numder && (
        <Number>
          <span>{numder}</span>
        </Number>
      )}
    </LinkBtn>
  ) : (
    <Button type="button" {...style} onClick={e => onClick(e)}>
      <Svg></Svg>
      {numder && (
        <Number>
          <span>{numder}</span>
        </Number>
      )}
    </Button>
  );
};

export default EllipseButton;
