import React, { FC } from 'react';
import { H2 } from './title.style';

type TitleProps = {
  title: String;
  color?: string;
  before?: boolean;
  after?: boolean;
  center?: boolean;
};

const Title: FC<TitleProps> = ({ title, ...style }) => {
  return (
    <H2 {...style}>
      <h2>{title}</h2>
    </H2>
  );
};

export default Title;
