import { FC } from 'react';
import * as ST from './styled';

type ButtonProps = ButtonOtherStyles & {
  title: string;
};

export type ButtonOtherStyles = {
  padding: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
  background: string;
  color: string;
  backgroundAnimation: string;
  colorHover: string;
  border?: string;
};

const Button: FC<ButtonProps> = ({
  title,
  padding,
  fontSize,
  lineHeight,
  fontWeight,
  background,
  color,
  backgroundAnimation,
  colorHover,
  border,
}) => (
  <ST.Button
    padding={padding}
    fontSize={fontSize}
    lineHeight={lineHeight}
    fontWeight={fontWeight}
    background={background}
    color={color}
    backgroundAnimation={backgroundAnimation}
    colorHover={colorHover}
    border={border}
  >
    {title}
    <ST.AnimationWrapper background={background}>
      <ST.AnimationList>
        <ST.AnimationListItem backgroundAnimation={backgroundAnimation} />
        <ST.AnimationListItem backgroundAnimation={backgroundAnimation} />
        <ST.AnimationListItem backgroundAnimation={backgroundAnimation} />
        <ST.AnimationListItem backgroundAnimation={backgroundAnimation} />
      </ST.AnimationList>
    </ST.AnimationWrapper>
  </ST.Button>
);

export default Button;
