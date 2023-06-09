import React, { FC } from 'react';
import Box from '../../components/Box/box';
import {
  DogovirConteiner,
  TexstTitle,
  Text,
  TextItem,
  TextItemSecond,
  TextList,
  TextListSecond,
} from './dogovir.style';
import Title from '../../components/title/title';

type DogovirProps = {};

const Dogovir: FC<DogovirProps> = props => {
  return (
    <Box>
      <DogovirConteiner>
        <Title title={'Договір публічної оферти'} before after center />
        <Text>
          Документ, положення якого викладені нижче по тексту, є публічною
          офертою та публічним договором. Згідно із положеннями ст.ст. 633, 641
          Цивільного кодексу України умови публічної оферти та публічного
          договору є однаковими для всіх Замовників (Замовників). У
          відповідності до ч. 2 ст. 642 Цивільного кодексу України, реєстрація
          на web-сайті zakononline.com.ua є акцептом даної оферти, що
          прирівнюється до укладення договору на умовах викладених нижче по
          тексту, а також положення Політики конфіденційності. Політика
          конфіденційності регулює особливості обробки Замовником персональних
          даних Замовників. Ознайомитися із положеннями Політики
          конфіденційності Компанії можна за посиланням. Політика
          конфіденційності є невід’ємною частиною цих Умов.
          <br></br>
          <br></br>
          Дана публічна оферта адресована всім фізичним та юридичним особам, що
          бажають скористатися послугою і мають технічну можливість одержання
          послуги.
          <br></br>
          <br></br>
          <br></br>
          ТОВ «ІНФОРМАЦІЙНО-ПРАВОВІ СИСТЕМИ» - код ЄДРПОУ 41616222, (далі –
          Виконавець) з однієї сторони, керуючись чинним законодавством України
          пропонує (публічна оферта) фізичній особі та/або юридичній особі (далі
          – Замовнику), в подальшому разом – Сторони, а кожен окремо – Сторона,
          укласти публічний договір про надання послуг (далі – Договір) на
          наступних умовах:
        </Text>
        <TextList>
          <TextItem>
            <TexstTitle>ТЕРМІНИ ТА ВИЗНАЧЕННЯ</TexstTitle>
            <TextListSecond>
              <TextItemSecond>
                Публічна оферта (договір) – пропозиція Виконавця, адресована
                будь-якій фізичній та/або юридичній особі, у відповідності зі
                статтею 633 Цивільного кодексу України, укласти з ним публічний
                договір про надання послуг доступу до сервісу
                zakononline.com.ua.
              </TextItemSecond>
              <TextItemSecond>
                Акцепт – повна й безумовна згода Замовника на укладення даного
                Договору на умовах, визначених даним Договором.
              </TextItemSecond>
              <TextItemSecond>
                Виконавець – ТОВ «ІНФОРМАЦІЙНО-ПРАВОВІ СИСТЕМИ» - код ЄДРПОУ
                41616222.
              </TextItemSecond>
              <TextItemSecond>
                Сервіс – аналітично-правова пошукова система zakononline.com.ua.
              </TextItemSecond>
              <TextItemSecond>
                Замовник – фізична та/або юридична особа, Замовник сервісу, яка
                погодилася з Умовами та Політикою конфіденційності Виконавця, та
                зареєструвалась у встановлений на сервісі zakononline.cm.ua
                спосіб, якій Виконавець надає послуги у відповідності до умов
                даного Договору.
              </TextItemSecond>
              <TextItemSecond>
                Послуга – це надання Виконавцем Замовнику доступу до сервісу
                zakononline.com.ua на платній або безкоштовній основі, після
                проходження Замовником реєстрації в порядку встановленому даним
                Договором.
              </TextItemSecond>
              <TextItemSecond>
                Платні послуги (професійний тариф) – надання за певну плату, у
                грошовому виразі, Виконавцем Замовнику послуги в об’ємі
                передбаченому даним Договором, який Замовник обирає самостійно.
              </TextItemSecond>
              <TextItemSecond>
                Безкоштовні послуги (відкритий тариф) – надання Виконавцем
                Замовнику послуги обмеженого доступу, тобто до обмеженої
                інформації за пошуком, яка міститься на сервісі
                zakononline.com.ua. Обсяг обмеженого доступу визначається
                Виконавцем на власний розсуд та може змінюватись без погодження
                з Замовником.
              </TextItemSecond>
              <TextItemSecond>
                Тестовий період – це період, який складається з 1 (одного)
                календарного дня після реєстрації Замовника на сервісі
                Виконавця, протягом якого Замовник отримує на безкоштовній
                основі доступ до сервісу. Обсяг інформації за пошуком під час
                тестового періоду, визначається Виконавцем на власний розсуд та
                може змінюватись без погодження з Замовником.
              </TextItemSecond>
              <TextItemSecond>
                Вартість послуг (тариф) – платіж, розмір якого встановлюється
                Виконавцем за надання певного обсягу послуг для Замовника за
                доступ до сервісу zakononline.com.ua
              </TextItemSecond>
              <TextItemSecond>
                Обсяг послуг – це можливості, функціонал, контент, які є
                доступними для Замовника на умовах певного Тарифного плану та
                визначають обсяг прав Замовника на використання Сервісу.
              </TextItemSecond>
              <TextItemSecond>
                Тарифний план – це умови, які визначають обсяг послуг, доступних
                Замовнику протягом певного терміну (1 місяць, 3 місяця, 6
                місяців), а також розмір оплати, яку повинен здійснити Замовник
                для отримання доступу до таких Ресурсів.
              </TextItemSecond>
              <TextItemSecond>
                Персональні дані – відомості чи сукупність відомостей про
                фізичну особу, яка ідентифікована або може бути конкретно
                ідентифікована.
              </TextItemSecond>
              <TextItemSecond>
                Суб'єкт персональних даних – фізична особа, стосовно якої
                відповідно до чинного законодавства здійснюється обробка її
                персональних даних.
              </TextItemSecond>
              <TextItemSecond>
                Згода суб'єкта персональних даних – будь-яке добровільне
                волевиявлення фізичної особи щодо надання дозволу на обробку її
                персональних даних відповідно до сформульованої мети їх обробки.
                Реєстрація на сервісі zakononline.com.ua передбачає надання
                згоди суб’єктом персональних даних на їх обробку.
              </TextItemSecond>
              <TextItemSecond>
                1.16. Акаунт – сукупність інформації про Замовника, що ним
                надана.
              </TextItemSecond>
            </TextListSecond>
          </TextItem>
          <TextItem>
            <TexstTitle>ЗАГАЛЬНІ ПОЛОЖЕННЯ</TexstTitle>
            <TextListSecond>
              <TextItemSecond>
                На підставі та умовах визначених даним Договором Виконавець
                надає Замовнику, а Замовник приймає послуги з доступу до сервісу
                zakononline.com.ua лише після здійснення Замовником реєстрації
                на сайті zakononline.com.ua та створення акаунту.
              </TextItemSecond>
              <TextItemSecond>
                Послуга надається на платній або безкоштовній основі за вибором
                Замовника шляхом надання доступу до сервісу zakononline.com.ua
              </TextItemSecond>
              <TextItemSecond>
                Всі зміни й доповнення до даного Договору опубліковуються на
                сайті Виконавця.
              </TextItemSecond>
              <TextItemSecond>
                Всі умови даного Договору є обов'язковими як для Замовника, так
                і для Виконавця. Перед початком користування Послугою Замовник
                зобов'язаний ознайомитися з умовами даного Договору. Якщо
                Замовник не згодний з умовами даного Договору, він не вправі
                користуватися послугами.
              </TextItemSecond>
              <TextItemSecond>
                У разі незгоди Замовника зі змінами, внесеними Виконавцем у
                даний Договір або з новими тарифами на Послугу Замовник повинен
                припинити користування сервісом.
              </TextItemSecond>
              <TextItemSecond>
                Замовник — суб'єкт персональних даних, який пройшовши реєстрацію
                на сервісі, надає згоду на обробку його персональних даних в
                базі персональних даних Виконавця, а також погоджується
                отримувати регулярні електронні листи та інші повідомлення від
                сервісу.
              </TextItemSecond>
            </TextListSecond>
          </TextItem>
          <TextItem>
            <TexstTitle>ПОРЯДОК НАДАННЯ ПОСЛУГ</TexstTitle>
            <TextListSecond>
              <TextItemSecond>
                Замовник самостійно реєструється в сервісі на сайті
                zakononline.com.ua в розділі "Реєстрація" та автоматично отримує
                «Відкритий» доступ.
              </TextItemSecond>
              <TextItemSecond>
                Використання платного доступу є можливим після реєстрації
                Замовником та вибору платного періоду у порядку, передбаченому
                цими Умовами.
              </TextItemSecond>
              <TextItemSecond>
                У випадку, якщо оплата не була здійснена або продовжена після
                платного періоду, доступ здійснюється у рамках «Відкритого»
                доступу.
              </TextItemSecond>
              <TextItemSecond>
                Замовник має право оплатити доступ до сервісу авансовим платежем
                на 6 (шість) місяців наперед, отримавши при цьому знижку у
                розмірі, вказаному у сервісі, якщо така знижка передбачена
                Тарифним планом.
              </TextItemSecond>
              <TextItemSecond>
                Доступ до сервісу, як комп’ютерної програми, є постачанням
                програмної продукції в розумінні пункту 26¹ підрозділу 2 розділу
                ХХ «Перехідні положення» Податкового кодексу України, та
                звільняється від оподаткування ПДВ.
              </TextItemSecond>
              <TextItemSecond>
                Виконавець може на свій розсуд встановити додаткову
                функціональність, яка може надати Замовнику доступ до додаткових
                ресурсів сервісу. Ресурси, отримані Замовником на умовах
                додаткової пропозиції, не залежать від Тарифного плану Замовника
                та не впливають на обсяг послуг, доступних у рамках відповідного
                Тарифного плану. Умови додаткових пропозицій розміщуються у
                Сервісі і становлять невід’ємну частину цих Умов.
              </TextItemSecond>
              <TextItemSecond>
                Виконавець залишає за собою право на свій розсуд і у будь-який
                час змінювати умови Тарифних планів. При цьому, Замовник у
                будь-який час може замінити свій Тарифний план на інший з тих,
                що пропонуються Виконавцем на відповідний момент. Зміни Тарифних
                планів не поширюються на періоди, які були оплачені Замовником,
                а набувають чинності після спливу оплаченого періоду
                користування сервісу.
              </TextItemSecond>
              <TextItemSecond>
                Умови Тарифних планів та умови Обсягу послуг становлять
                невід’ємну частину цих Умов та є обов’язковими для усіх
                Замовників. Крім того, у Сервсі можуть бути розміщені додаткові
                положення, що стосуються доступу до Сервсіу. Такі положення
                також є невід’ємною частиною цих Умов.
              </TextItemSecond>
            </TextListSecond>
          </TextItem>
          <TextItem>
            <TexstTitle>АКАУНТ</TexstTitle>
            <TextListSecond>
              <TextItemSecond>
                Для використання функціоналу Сервісу, Замовнику необхідно
                зареєструвати Акаунт. Для реєстрації Акаунту Замовнику
                необхідно: (а) надати ім’я, прізвище, адресу електронної пошти,
                номер телефона та вибрати вид своєї діяльності; або (б)
                авторизуватись через Facebook, Google.
              </TextItemSecond>
              <TextItemSecond>
                Реєструючись в Сервісі, ви підтверджуєте, що ви є дієздатною
                фізичною особою, яка діє від власного імені або на законних
                підставах від імені юридичної особи. Ви також підтверджуєте, що
                вся інформація, надана в ході реєстрації, є достовірною, точною
                і актуальною.
              </TextItemSecond>
              <TextItemSecond>
                Порядок зберігання та обробки персональних даних фізичних осіб
                Замовником встановлено в Політиці конфіденційності.
              </TextItemSecond>
            </TextListSecond>
          </TextItem>
        </TextList>
      </DogovirConteiner>
    </Box>
  );
};

export default Dogovir;
