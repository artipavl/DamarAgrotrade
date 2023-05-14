import styled from 'styled-components';

export const ServicesBox = styled.div`
  position: relative;
  width: 200px;
  height: 40px;
  margin: auto;

  @media (min-width: 480px) {
    width: 100%;
    height: inherit;
  }
`;

type OpenProps = {
  open: Boolean;
};

export const SelectorBox = styled.div<OpenProps>`
  position: ${props => (props.open ? 'absolute' : 'static')};
  top: ${props => props.open && '-10px'};
  left: ${props => props.open && '-10px'};
  padding: ${props => props.open && '10px'};

  background-color: ${props => props.open && '#fff'};
  box-shadow: ${props => props.open && `0px 0px 8px rgba(0, 0, 0, 0.15)`};
  border-radius: ${props => props.open && `20px`};

  @media (min-width: 480px) {
    position: static;
    padding: 0;
    background: none;
    border: none;
    box-shadow: none;
  }
`;

export const ServicesSelector = styled.div<OpenProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 200px;
  height: 40px;
  background: #e74e13;

  padding: 0 15px;
  margin: auto;
  margin-bottom: 10px;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #ffffff;

  border: 1px solid #1e6140;
  border-radius: 20px;
  border-color: #e74e13;
  > svg {
    rotate: ${props => props.open && `calc(180deg)`};
  }
  :hover,
  :focus {
    color: #000000;
    background: #ffffff;
    border-color: rgb(30, 97, 64);
    > svg {
      color: #000000;
    }
  }
  @media (min-width: 480px) {
    display: none;
  }
`;

export const LinkBox = styled.ul<OpenProps>`
  display: ${props => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  gap: 10px;

  @media (min-width: 480px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
