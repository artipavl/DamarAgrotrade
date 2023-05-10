import styled from 'styled-components';

type ContentProps = {
  bgc?: string;
};

export const Content = styled.div<ContentProps>`
  max-width: 1140px;

  padding-left: 15px;
  padding-right: 15px;
  padding-top: 0px;
  padding-bottom: 0px;
  background-color: ${props => props.bgc};

  @media (min-width: 1140px) {
    margin: auto;
  }
`;
