import { Link } from 'react-router-dom';
import styled from 'styled-components';
type FormProps = {
  width?: string;
};

export const Form = styled.form<FormProps>`
  position: relative;
  width: ${props => props.width || '342px'};
  height: 40px;
`;

export const QueryInput = styled.input`
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 90px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 50px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  ::placeholder {
    color: #484848;
  }
`;

export const QueryButton = styled(Link)`
  position: absolute;
  top: 6px;
  right: 22px;
  display: flex;
  align-items: center;
  color: #84be51;

  :hover,
  :focus {
    color: #e74e13;
  }

  ::before {
    content: '';
    display: block;
    height: 28px;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.2);
    margin-right: 15px;
  }
`;
