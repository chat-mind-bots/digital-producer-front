import { FC } from 'react';
import * as ST from './styled';

type ButtonProps = ButtonOtherStyles & {
  title: string;
};

export type ButtonOtherStyles = {
  width: string;
  padding: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
  background: string;
  color: string;
  backgroundAnimation: string;
  colorHover: string;
  border?: string;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({
  title,
  width,
  padding,
  fontSize,
  lineHeight,
  fontWeight,
  background,
  color,
  backgroundAnimation,
  colorHover,
  border,
  onClick,
}) => (
  <ST.Button
    width={width}
    padding={padding}
    fontSize={fontSize}
    lineHeight={lineHeight}
    fontWeight={fontWeight}
    background={background}
    color={color}
    backgroundAnimation={backgroundAnimation}
    colorHover={colorHover}
    border={border}
    onClick={onClick}
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
