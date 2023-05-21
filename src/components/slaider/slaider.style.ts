import styled from 'styled-components';

export const SliderBox = styled.div`
  position: relative;
  width: 100%;
  height: 355px;
  overflow: hidden;
`;

type SliderListProps = {
  left: number;
};

// export const SliderList = styled.ul<SliderListProps>`
//   /* left: ${props => props.left}px; */

//   display: flex;
//   width: 100%;
//   scroll-snap-type: x proximity;
//   overflow-x: scroll;

//   & > li {
//     padding-left: 60px;
//     margin-left: -30px;
//     scroll-snap-align: start;
//     :first-of-type {
//       margin-left: 60px;
//     }
//     :last-of-type {
//       margin-right: 60px;
//     }
//   }
// `;

export const SliderList = styled.ul<SliderListProps>`
  position: absolute;
  left: ${props => props.left}px;

  display: flex;
  width: 100%;
  gap: 20px;
  & > li {
    :first-of-type {
      margin-left: 32.5px;
    }
    :last-of-type {
      margin-right: 32.5px;
    }
  }
`;
