import React, { FC } from 'react';
import Box from '../../components/Box/box';
import Title from '../../components/title/title';
import {
  AboutText,
  AccentText,
  TeamConteiner,
  TeamItem,
  TeamItemImg,
  TeamItemName,
  TeamList,
} from './team.style';

import Owner from '../../img/happyFarmer.jpg';

type TeamProps = {};

const Team: FC<TeamProps> = props => {
  return (
    <Box>
      <TeamConteiner>
        <Title title={'Наша команда'} before after center />
        <AboutText>
          <p>
            <AccentText>Наша команда</AccentText> – це талановитий колектив
            професіоналів, об'єднаний спільними цілями та цінностями. Кожен із
            співробітників є важливою ланкою в загальній роботі компанії, робить
            свій внесок у її розвиток та успіх. Ми відповідаємо за результати
            нашої діяльності перед клієнтами та за виконання своїх зобов'язань
            перед діловими партнерами. Стараємось максимально заощадити Ваш час
            та гроші і гарантуємо, що з нашою командою професійних менеджерів Ви
            вирішите усі питання за мінімальний проміжок часу. во та допомагають
            ставати успішними тисячам вітчизняних аграріїв.
          </p>
          <p>
            <AccentText>Наш досвід роботи</AccentText>, орієнтація на результат,
            відповідальність, відданість справі допомагають нам краще розуміти
            ринкові потреби і підтримувати високі стандарти якості
            обслуговування клієнтів та партнерів...
          </p>
        </AboutText>
        <Title title={'З вами працюють'} before after center />
        <TeamList>
          <TeamItem>
            <TeamItemImg
              src={Owner}
              alt="owner1"
              width="350px"
              height="224px"
            />
            <TeamItemName>Евгения Флор</TeamItemName>
          </TeamItem>
          <TeamItem>
            <TeamItemImg
              src={Owner}
              alt="owner1"
              width="350px"
              height="224px"
            />
            <TeamItemName>Евгения Флор</TeamItemName>
          </TeamItem>
          <TeamItem>
            <TeamItemImg
              src={Owner}
              alt="owner1"
              width="350px"
              height="224px"
            />
            <TeamItemName>Евгения Флор</TeamItemName>
          </TeamItem>
        </TeamList>
      </TeamConteiner>
    </Box>
  );
};

export default Team;
