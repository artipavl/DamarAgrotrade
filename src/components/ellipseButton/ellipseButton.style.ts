import { Link } from 'react-router-dom';
import styled from 'styled-components';

type StyleProps = {
  color: string;
  hovercolor: string;
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
    color: ${props => props.hovercolor};

    box-shadow: 0px 5px 14px rgba(140, 50, 19, 0.3);
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
    color: ${props => props.hovercolor};

    box-shadow: 0px 5px 14px rgba(140, 50, 19, 0.3);
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
