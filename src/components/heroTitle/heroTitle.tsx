import React, { FC } from 'react';
import { H1, HeroTitleBox, Span } from './heroTitle.style';

type HeroTitleProps = {
  title: String;
  span: String;
};

const HeroTitle: FC<HeroTitleProps> = ({ title, span }) => {
  return (
    <HeroTitleBox>
      <H1>
        {title}
        <Span>{span}</Span>
      </H1>
    </HeroTitleBox>
  );
};

export default HeroTitle;
