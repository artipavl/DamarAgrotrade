import React, { FC } from 'react';
import { LinkBtn } from './linkButton.style';

type LinkButtonProps = {
  text: string;
  to: string;
  img: React.FC<React.SVGProps<SVGSVGElement>>;
};

const LinkButton: FC<LinkButtonProps> = ({ text, to, img: Img }) => {
  return (
    <LinkBtn to={to}>
      <Img width="24" />
      <span>{text}</span>
    </LinkBtn>
  );
};

export default LinkButton;
