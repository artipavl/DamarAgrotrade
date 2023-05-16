import React, { FC, useState } from 'react';

import { ReactComponent as Seeds } from '../../img/seeds.svg';
import { ReactComponent as Farmer } from '../../img/farmer.svg';
import { ReactComponent as Fertilizer } from '../../img/fertilizer.svg';
import { ReactComponent as Frame } from '../../img/frame.svg';
import { ReactComponent as Sapling } from '../../img/sapling.svg';
import { ReactComponent as Arrow } from '../../img/arrow.svg';

import LinkImgButton from '../linkImgButton/linkImgButton';
import {
  LinkBox,
  ServicesSelector,
  ServicesBox,
  SelectorBox,
} from './services.style';

type ServicesProps = {};

const Services: FC<ServicesProps> = props => {
  const [open, setOpen] = useState(false);

  return (
    <ServicesBox>
      <SelectorBox open={open}>
        <ServicesSelector open={open} onClick={() => setOpen(open => !open)}>
          <span>Послуги</span>
          <Arrow />
        </ServicesSelector>
        <LinkBox open={open}>
          <li>
            <LinkImgButton to="/" img={Seeds} text="Насіння" />
          </li>
          <li>
            <LinkImgButton to="/" img={Sapling} text="Засоби захисту рослин" />
          </li>
          <li>
            <LinkImgButton to="/" img={Fertilizer} text="Добрива" />
          </li>
          <li>
            <LinkImgButton to="/" img={Frame} text="кормова група" />
          </li>
          <li>
            <LinkImgButton to="/" img={Farmer} text="Агроному в поміч" />
          </li>
        </LinkBox>
      </SelectorBox>
    </ServicesBox>
  );
};

export default Services;
