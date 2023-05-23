import React, { FC } from 'react';

import Title from '../title/title';
import Slaider from '../slaider/slaider';
import { ActionsBox, Button } from './actions.style';
import LinkButton from '../linkButton/linkButton';

type ActionsProps = {};

const Actions: FC<ActionsProps> = props => {
  return (
    <ActionsBox>
      <Title title="Акції" color="#fff" before after />
      <Slaider />
      <Button>
        <LinkButton to="/" text="Дивитися усі товари" />
      </Button>
    </ActionsBox>
  );
};

export default Actions;
