import { Link } from 'react-router-dom';
import styled from 'styled-components';

type PhoneListProps = {
  modal: boolean;
};
type PhoneContainerProps = {
  render?: boolean;
};

type PhoneDivProps = {
  modal: boolean;
  bgc: string;
  phoneColor?: string;
};

export const PhoneContainer = styled.div<PhoneContainerProps>`
  position: relative;
  width: 280px;
  height: 41px;
  @media (max-width: 1140px) {
    display: ${props => props.render === false && 'none'};
  }
`;
export const PhoneDiv = styled.div<PhoneDivProps>`
  position: ${props => (props.modal ? 'absolute' : 'static')};
  /* top: -30.5px; */
  top: -10px;
  left: ${props => props.modal && '-10px'};
  display: flex;
  gap: 5px;
  width: 280px;
  padding: ${props => props.modal && '10px'};

  color: ${props => props.phoneColor};

  background-color: ${props => props.modal && props.bgc};
  box-shadow: ${props => props.modal && `0px 0px 8px rgba(0, 0, 0, 0.15)`};
  border-radius: ${props => props.modal && `20px`};
`;

export const PhoneSelect = styled.div`
  display: flex;
  gap: 3px;
`;

export const LinkContakt = styled(Link)`
  margin-top: 3px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;

  text-decoration-line: underline;

  color: #84be51;

  :hover,
  :focus {
    color: rgb(231, 78, 19);
  }
`;

export const SelectButton = styled.button<PhoneListProps>`
  rotate: ${props => props.modal && `calc(180deg)`};
`;

export const PhoneList = styled.ul<PhoneListProps>`
  visibility: ${props => (props.modal ? 'visible' : 'hidden')};
  display: ${props => (props.modal ? 'flex' : 'none')};
  flex-direction: column;
  width: 100%;
  gap: 13px;
  margin-top: 17px;
`;
type PhoneItemProps = {
  active: boolean;
};
export const PhoneItem = styled.li<PhoneItemProps>`
  color: ${props => props.active && '#84be51'};
  :hover,
  :focus {
    cursor: pointer;
    color: #84be51;
  }
`;
