import React, { FC } from 'react';
import Box from '../Box/box';
import { BgImg, AboutSectionBox, Text, TextBox } from './aboutSection.style';
import Title from '../title/title';

type AboutSectionProps = {
  title: String;
  texts: Array<String>;
  bg: String;
};

const AboutSection: FC<AboutSectionProps> = ({ title, texts, bg }) => {
  return (
    <BgImg bg={bg}>
      <Box>
        <AboutSectionBox>
          <Title title={title} before color="#ffffff" />
          <TextBox>
            {texts.map((text, index) => (
              <Text key={index}>{text}</Text>
            ))}
          </TextBox>
        </AboutSectionBox>
      </Box>
    </BgImg>
  );
};

export default AboutSection;
