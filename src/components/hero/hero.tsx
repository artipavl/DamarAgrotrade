import React, { FC } from 'react';
import Box from '../Box/box';
import HeroTitle from '../heroTitle/heroTitle';
import LinkButton from '../linkButton/linkButton';
import Heroimg from '../../img/hero.jpg';
import {
  HeroBox,
  HeroContent,
  Image,
  ImageBox,
  Information,
  Wing1,
  Wing2,
  Wing3,
} from './hero.style';

type HeroProps = {};

const Hero: FC<HeroProps> = props => {
  return (
    <Box>
      <HeroBox>
        <HeroContent>
          <HeroTitle title="Аграрний" span="інтернет-магазин" />
          <Information>
            Основна сфера діяльності – дистрибуція насіння, засобів захисту
            рослин, мінеральних макро - та мікродобрив
          </Information>
          <Image>
            <ImageBox>
              <img src={Heroimg} alt="man" width="100%" />
            </ImageBox>
            <Wing1></Wing1>
            <Wing2></Wing2>
            <Wing3></Wing3>
          </Image>
          <LinkButton to="/" text="Про компанію" />
        </HeroContent>
      </HeroBox>
    </Box>
  );
};

export default Hero;
