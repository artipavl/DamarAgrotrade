import React, { FC } from 'react';

import Title from '../title/title';
import Slaider from '../slaider/slaider';
import { ActionsBox } from './actions.style';

type ActionsProps = {};

const Actions: FC<ActionsProps> = props => {
  return (
    <ActionsBox>
      <Title title="Акції" color="#fff" before after />
      <Slaider />
    </ActionsBox>
  );
};

export default Actions;
