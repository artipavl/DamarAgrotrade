import styled from 'styled-components';

type MailListProps = {
  modal: boolean;
};
type MailContainerProps = {
  render?: boolean;
};

type MailDivProps = {
  modal: boolean;
  bgc: string;
  mailColor?: string;
};

export const MailContainer = styled.div<MailContainerProps>`
  position: relative;
  width: 280px;
  height: 41px;
  z-index: 1;
  @media (max-width: 1140px) {
    display: ${props => props.render === false && 'none'};
  }
`;
export const MailDiv = styled.div<MailDivProps>`
  position: ${props => (props.modal ? 'absolute' : 'static')};
  top: -10px;
  left: ${props => props.modal && '-10px'};
  display: flex;
  gap: 5px;
  width: 280px;
  padding: ${props => props.modal && '10px'};

  color: ${props => props.mailColor};

  background-color: ${props => props.modal && props.bgc};
  box-shadow: ${props => props.modal && `0px 0px 8px rgba(0, 0, 0, 0.15)`};
  border-radius: ${props => props.modal && `20px`};
`;

type MailSelectProps = {
  textColor: string;
};

export const MailSelect = styled.div<MailSelectProps>`
  display: flex;
  gap: 3px;
  margin-top: 10px;
  color: ${props => props.textColor};
`;

export const SelectButton = styled.button<MailListProps>`
  rotate: ${props => props.modal && `calc(180deg)`};
`;

export const MailList = styled.ul<MailListProps>`
  visibility: ${props => (props.modal ? 'visible' : 'hidden')};
  display: ${props => (props.modal ? 'flex' : 'none')};
  flex-direction: column;
  width: 100%;
  gap: 13px;
  margin-top: 17px;
`;

type MailItemProps = {
  active: boolean;
  textColor: string;
};

export const MailItem = styled.li<MailItemProps>`
  color: ${props => (props.active ? '#84be51' : props.textColor)};
  :hover,
  :focus {
    cursor: pointer;
    color: #84be51;
  }
`;
