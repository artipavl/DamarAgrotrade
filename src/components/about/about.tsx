import React, { FC } from 'react';
import Box from '../Box/box';
import {
  AboutBox,
  Image,
  ImageBox,
  AboutContent,
  Text,
  TextAccent,
} from './about.style';
import Title from '../title/title';

import Aboutimg from '../../img/about.png';
import LinkButton from '../linkButton/linkButton';

type AboutProps = {};

const About: FC<AboutProps> = props => {
  return (
    <Box wh={1410}>
      <AboutBox>
        <ImageBox>
          <Image src={Aboutimg} alt="представлення" />
        </ImageBox>
        <AboutContent>
          <Title title="О компанії" before />
          <Text>
            Це <TextAccent>високоякісний сервіс та консультації</TextAccent>, це
            інноваційні технології і широкий асортимент товарів, які
            відповідають сучасним вимогам сільгоспвиробників. Це згуртована
            команда професіоналів високого класу, працюючих для зростання і
            розвитку аграрного бізнесу в Україні.
          </Text>
          <Text>
            Так як ми є <TextAccent>національною компанією</TextAccent>, це дає
            нам певні переваги. З географічним покриттям усієї території України
            та кількістю продавців більш ніж 120 менеджерів та директорів ми
            володіємо глобальним розмахом і можемо відповідати потребам наших
            клієнтів.
          </Text>
          <Text>
            Як справжня національна компанія,{' '}
            <TextAccent>
              керується сформованими цінностями етики бізнесу
            </TextAccent>{' '}
            та здійснює вагомий вплив на суспільство. Наша стратегія
            партнерства, заснованого на довірі та безумовному виконанні
            забов´язань, надає нам унікальний потенціал для{' '}
            <TextAccent>безпосереднього сприяння</TextAccent> ефективному та
            екологічно-раціональному розвитку сільського господарства України та
            етичному веденню бізнесу.
          </Text>
          <LinkButton to="/" text="Докладніше" />
        </AboutContent>
      </AboutBox>
    </Box>
  );
};

export default About;
