import styled from 'styled-components';
import { Form, Field } from 'formik';

export const AuthorizationBox = styled.div`
  padding-top: 20px;
  padding-bottom: 40px;

  @media screen and (min-width: 1140px) {
    padding-top: 8px;
    padding-bottom: 100px;
  }
`;

export const Text = styled.p`
  display: block;
  margin-top: 12px;

  font-size: 14px;
  line-height: 17px;
  text-align: center;
`;

export const TextOverflow = styled.span`
  display: none;

  @media screen and (min-width: 1110px) {
    display: inline;
  }
`;

export const RegForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 14px;
  gap: 20px;

  @media screen and (min-width: 570px) {
    width: 543px;
    margin-left: auto;
    margin-right: auto;
  }
`;

type InputPrpos = {
  errors: string;
};

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 100%;
`;
export const Input = styled(Field)<InputPrpos>`
  position: relative;
  display: inline-block;
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-color: ${props => props.errors && 'red'};
  border-radius: 90px;

  padding: 10px 20px;

  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */

    color: #484848;
  }
`;

export const Errors = styled.span`
  position: absolute;
  transform: translateY(+100%);
  bottom: 0;
  left: 20px;

  font-size: 14px;
  line-height: 17px;
  color: red;
`;

export const Button = styled.button`
  background-color: #e74e13;
  border-radius: 90px;
  min-height: 47px;

  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #ffffff;

  :hover,
  :focus {
    color: #e74e13;
    background-color: #ffffff;
  }
`;
