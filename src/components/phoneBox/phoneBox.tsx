import React, { FC, useState } from 'react';
import EllipseButton from '../ellipseButton/ellipseButton';

import { ReactComponent as Call } from '../../img/call.svg';
import { ReactComponent as Arrow } from '../../img/arrow.svg';
import {
  LinkContakt,
  PhoneContainer,
  PhoneDiv,
  PhoneItem,
  PhoneList,
  PhoneSelect,
  SelectButton,
} from './phoneBox.style';

const phones = [
  '+38 (067) 115 00 58',
  '+38 (097) 115 00 74',
  '+38 (067) 784 45 89',
];

type PhoneBoxProps = {
  color: string;
  hovercolor: string;
  bgc: string;
  phoneColor?: string;
  textColor: string;
  render?: boolean;
};

const PhoneBox: FC<PhoneBoxProps> = ({
  render,
  bgc,
  phoneColor,
  hovercolor,
  textColor,
  ...buttonStyle
}) => {
  const [currentPhone, setCurrentPhone] = useState(phones[0]);
  const [modal, setModal] = useState(false);

  return (
    <PhoneContainer render={render}>
      <PhoneDiv modal={modal} bgc={bgc} phoneColor={phoneColor}>
        <EllipseButton
          {...buttonStyle}
          to={`tel:${currentPhone}`}
          hovercolor={hovercolor}
          svg={Call}
        />
        <div>
          <PhoneSelect textColor={textColor}>
            {currentPhone}
            <SelectButton
              type="button"
              modal={modal}
              onClick={() => setModal(modal => !modal)}
            >
              <Arrow color="#84BE51" />
            </SelectButton>
          </PhoneSelect>

          <LinkContakt to="/">Замовити зворотній зв’язок</LinkContakt>
          <PhoneList modal={modal}>
            {phones.map((phone, index) => (
              <PhoneItem
                active={currentPhone === phone}
                textColor={textColor}
                key={index}
                onClick={() => {
                  setCurrentPhone(phone);
                  setModal(modal => !modal);
                }}
              >
                {phone}
              </PhoneItem>
            ))}
          </PhoneList>
        </div>
      </PhoneDiv>
    </PhoneContainer>
  );
};

export default PhoneBox;
