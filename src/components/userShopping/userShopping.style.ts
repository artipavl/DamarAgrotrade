import styled from 'styled-components';

type BasketAmountProps = {
  color?: string;
};

export const BasketAmount = styled.span<BasketAmountProps>`
  margin-left: 7px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  color: ${props => props.color};
`;

export const UserShoppingBox = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;

  > * {
    &:first-child {
      display: none;
      @media (min-width: 1140px) {
        display: block;
      }
    }
    &:last-child {
      display: flex;
      align-items: center;
    }
  }
`;
