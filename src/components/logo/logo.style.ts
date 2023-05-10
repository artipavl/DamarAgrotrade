import { Link } from 'react-router-dom';
import styled from 'styled-components';

type LogoLinkProps = {
  color?: string;
};

export const LogoLink = styled(Link)<LogoLinkProps>`
  color: ${props => props.color || '#1F1B1C'};
`;
