import React, { FC } from 'react';
import { LinkBtn } from './linkButton.style';

type LinkButtonProps = {
  text: string;
  to: string;
};

const LinkButton: FC<LinkButtonProps> = ({ text, to }) => {
  return (
    <LinkBtn to={to}>
      <span>{text}</span>
    </LinkBtn>
  );
};

export default LinkButton;
