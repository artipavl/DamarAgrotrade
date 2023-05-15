import React, { FC, useState } from 'react';
import EllipseButton from '../ellipseButton/ellipseButton';

import { ReactComponent as Mail } from '../../img/mail.svg';
import { ReactComponent as Arrow } from '../../img/arrow.svg';
import {
  MailContainer,
  MailDiv,
  MailItem,
  MailList,
  MailSelect,
  SelectButton,
} from './mailBox.style';

const Mails = ['DAT@gmail.com'];

type MailBoxProps = {
  color: string;
  hovercolor: string;
  bgc: string;
  mailColor?: string;
  textColor: string;
  render?: boolean;
};

const MailBox: FC<MailBoxProps> = ({
  render,
  bgc,
  mailColor,
  hovercolor,
  textColor,
  ...buttonStyle
}) => {
  const [currentMail, setCurrentMail] = useState(Mails[0]);
  const [modal, setModal] = useState(false);

  return (
    <MailContainer render={render} modal={modal}>
      <MailDiv modal={modal} bgc={bgc} mailColor={mailColor}>
        <EllipseButton
          {...buttonStyle}
          to={`mailto:${currentMail}`}
          hovercolor={hovercolor}
          svg={Mail}
        />
        <div>
          <MailSelect
            textColor={textColor}
            onClick={() => Mails.length > 1 && setModal(modal => !modal)}
          >
            {currentMail}
            {Mails.length > 1 && (
              <SelectButton type="button" modal={modal}>
                <Arrow color="#84BE51" />
              </SelectButton>
            )}
          </MailSelect>
          {Mails.length > 1 && (
            <MailList modal={modal}>
              {Mails.map((Mail, index) => (
                <MailItem
                  active={currentMail === Mail}
                  textColor={textColor}
                  key={index}
                  onClick={() => {
                    setCurrentMail(Mail);
                    setModal(modal => !modal);
                  }}
                >
                  {Mail}
                </MailItem>
              ))}
            </MailList>
          )}
        </div>
      </MailDiv>
    </MailContainer>
  );
};

export default MailBox;
