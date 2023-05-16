import React, { FC } from 'react';
import { LinkBtn } from './linkImgButton.style';

type linkImgButtonProps = {
  text: string;
  to: string;
  img: React.FC<React.SVGProps<SVGSVGElement>>;
};

const linkImgButton: FC<linkImgButtonProps> = ({ text, to, img: Img }) => {
  return (
    <LinkBtn to={to}>
      <Img width="24" />
      <span>{text}</span>
    </LinkBtn>
  );
};

export default linkImgButton;
