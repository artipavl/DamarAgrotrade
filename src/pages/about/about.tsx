import React, { FC } from 'react';

import Box from '../../components/Box/box';
import Title from '../../components/title/title';
import {
  AccentText,
  AboutText,
  AboutList,
  AboutItem,
  AboutConteiner,
} from './about.style';

type AboutProps = {};

const About: FC<AboutProps> = props => {
  return (
    <Box>
      <AboutConteiner>
        <Title title={'Про нас'} before after center />
        <AboutText>
          <p>
            <AccentText>«Компанія ТОВ “ДАМАР АГРОТРЕЙД”</AccentText> — молода
            команда, яка з’явилась на аграрному ринку у 2020 році. Ми не боїмось
            труднощів і викликів. Тому навіть складний ковідний період, світова
            пандемія не стали на заваді успішному старту. Отже,{' '}
            <AccentText>ми — сміливі, ми — драйвові</AccentText>, ми — ті, що
            розвивають рослинництво та допомагають ставати успішними тисячам
            вітчизняних аграріїв.
          </p>
          <p>
            <AccentText>Бачення:</AccentText> компанія ТОВ “ДАМАР АГРОТРЕЙД”
            тримає курс на підвищення престижності, довіри до засобів захисту
            рослин made in UA. Прагнемо, аби в кожному регіоні України наш
            споживач мав доступ до якісної продукції та консалтингу від фахівців
            команди.
          </p>
          <p>
            <AccentText>Місія:</AccentText> усе продуктове портфоліо,
            консультативні послуги ТОВ “ДАМАР АГРОТРЕЙД” направлені на
            підвищення рентабельності рослинництва в мінливих кліматичних умовах
            України. Також ставимо собі завдання підвищувати обізнаність
            клієнтів щодо сучасних методів ведення рослинництва...
          </p>
          <AccentText>Цінності:</AccentText>
          <AboutList>
            <AboutItem>
              прозорість ділових стосунків з колегами, контрагентами, клієнтами;
            </AboutItem>
            <AboutItem>
              однаково висококласний сервіс для невеликого фермера та потужного
              холдингу;
            </AboutItem>
            <AboutItem>покращення якості товарів та послуг;</AboutItem>
            <AboutItem>
              постійна підтримка партнера на усіх етапах виробництва продукції
              рослинництва;
            </AboutItem>
            <AboutItem>екологічність у роботі, думках та цілях; </AboutItem>
            <AboutItem>
              підтримка вітчизняного продукту та вітчизняного виробника;
            </AboutItem>
            <AboutItem>постійний саморозвиток.…»</AboutItem>
          </AboutList>
        </AboutText>
      </AboutConteiner>
    </Box>
  );
};

export default About;
