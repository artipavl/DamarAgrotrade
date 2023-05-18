import styled from 'styled-components';

type ContentProps = {
  bgc?: string;
  wh?: number;
};

export const Content = styled.div<ContentProps>`
  /* max-width: 1140px; */
  max-width: ${props => (props.wh ? props.wh + 30 : 1140)}px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 0px;
  padding-bottom: 0px;
  background-color: ${props => props.bgc};

  @media (min-width: 1140px) {
    margin: auto;
  }
`;
