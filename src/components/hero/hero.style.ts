import styled from 'styled-components';

import BG from '../../img/maskHero.png';

export const HeroBg = styled.div`
  position: relative;
  width: 100%;
  padding-top: 205.5px;
  overflow: hidden;

  background-color: #fff;

  background-image: url(${BG});
  background-repeat: no-repeat;
  background-position: left bottom;

  @media (min-width: 1924px) {
    background-size: cover;
  }
`;

export const Bg = styled.div``;

export const HeroBox = styled.div`
  @media (max-width: 1439px) {
    position: relative;
  }

  /* @media (min-width: 720px) {
    height: 320px;
  } */

  @media (min-width: 1440px) {
    height: 780px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  padding-top: 25px;
  padding-bottom: 40px;

  & > a {
    margin: auto;
    @media (min-width: 1440px) {
      margin: 0;
      margin-left: 45px;
    }
  }

  /* @media (min-width: 720px) {
    max-width: 50%;
    padding-top: 60px;
  } */
  @media (min-width: 1440px) {
    position: relative;

    max-width: 605px;
    padding-top: 182px;
    padding-bottom: 336px;
  }
`;

export const Information = styled.p`
  margin-left: 45px;

  color: rgba(0, 0, 0, 0.5);

  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Image = styled.div`
  position: relative;
  margin: auto;

  /* @media (min-width: 720px) {
    margin: 0;
    position: absolute;
    right: 0;
    bottom: 0;

    width: 290px;
    height: 249.86px;
  } */
  /* @media (min-width: 1440px) {
    position: absolute;
    right: 0;
    top: 292px;

    width: 802px;
    height: 691px;
  } */
  @media (min-width: 1440px) {
    width: 802px;
    height: 691px;

    /* transform: translate(+100%, +100%); */
    position: absolute;
    top: 89px;
    left: 711px;
  }
`;

export const ImageBox = styled.div`
  border-radius: 30% 0 30% 0;
  overflow: hidden;
`;

export const Wing1 = styled.div`
  position: absolute;
  top: 0;
  right: 20px;
  width: 102px;
  height: 83px;
  transform: translate(-0%, -50%);
  background-image: url(${require(`../../img/wing/wing.png`)});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 1440px) {
    width: 246px;
    height: 178px;
    background-image: url(${require(`../../img/wing/wingBig.png`)});
  }
`;

export const Wing2 = styled.div`
  position: absolute;
  bottom: -12px;
  left: -33px;
  width: 60px;
  height: 44px;
  background-image: url(${require(`../../img/wing/wing2.png`)});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 1440px) {
    bottom: 76px;
    left: -110px;
    width: 152px;
    height: 110px;
    background-image: url(${require(`../../img/wing/wingBig2.png`)});
  }
`;

export const Wing3 = styled.div`
  position: absolute;
  bottom: 0;
  left: -52px;
  width: 98px;
  height: 71px;
  background-image: url(${require(`../../img/wing/wing1.png`)});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 1440px) {
    bottom: 107px;
    left: -157px;

    width: 246px;
    height: 178px;
    background-image: url(${require(`../../img/wing/wingBig1.png`)});
  }
`;
