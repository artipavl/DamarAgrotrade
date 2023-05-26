import React, { FC } from 'react';

import Title from '../title/title';
import Slaider from '../slaider/slaider';
import { PartnersBox } from './partners.style';

type PartnersProps = {};

const Partners: FC<PartnersProps> = props => {
  return (
    <PartnersBox>
      <Title title="Партнери" before after />
      <Slaider accent overflow="visible" />
    </PartnersBox>
  );
};

export default Partners;
