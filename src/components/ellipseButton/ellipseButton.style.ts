import { Link } from 'react-router-dom';
import styled from 'styled-components';

type StyleProps = {
  color: string;
  hoverColor: string;
};

export const LinkBtn = styled(Link)<StyleProps>`
  position: relative;
  display: flex;
  width: 41px;
  height: 41px;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  border-radius: 50%;

  :hover,
  :focus {
    background-color: ${props => props.color};
    color: ${props => props.hoverColor};
  }
`;

export const Button = styled.button<StyleProps>`
  position: relative;
  display: flex;
  width: 41px;
  height: 41px;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  border-radius: 50%;

  :hover,
  :focus {
    background-color: ${props => props.color};
    color: ${props => props.hoverColor};
  }
`;

export const Number = styled.div`
  position: absolute;
  top: -1px;
  right: -1px;
  display: flex;
  width: 14px;
  height: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #84be51;

  color: #fff;

  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
