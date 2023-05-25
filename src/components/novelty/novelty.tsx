import React, { FC } from 'react';

import Title from '../title/title';
import Slaider from '../slaider/slaider';
import { NoveltyBox } from './novelty.style';

type NoveltyProps = {};

const Novelty: FC<NoveltyProps> = props => {
  return (
    <NoveltyBox>
      <Title title="Новинки" color="#000000" before after />
      <Slaider accent />
    </NoveltyBox>
  );
};

export default Novelty;
