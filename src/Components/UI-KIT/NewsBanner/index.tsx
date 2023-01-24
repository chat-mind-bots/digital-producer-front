import { FC } from 'react';
import Colors from 'Colors';
import Button from 'Components/UI-KIT/Atoms/Button';
import * as ST from './styled';

type NewsBannerProps = {
  title: string;
  description: string;
  urlButton: string;
  textButton: string;
  styleButton: string;
};

const NewsBanner: FC<NewsBannerProps> = ({
  title,
  description,
  textButton,
  styleButton,
  urlButton,
}) => (
  <ST.NewsBanner>
    <ST.WrapperInfo>
      <ST.Title>{title}</ST.Title>
      <ST.Description>{description}</ST.Description>
      <ST.WrapperButton>
        <Button
          title={textButton}
          padding={'13px 23px'}
          fontSize={'14px'}
          lineHeight={'20px'}
          fontWeight={'600'}
          background={Colors.TRANSPARENT}
          color={Colors.BLACK1}
          backgroundAnimation={Colors.BLACK1}
          colorHover={Colors.WHITE}
          border={`2px solid ${Colors.BLACK1}`}
          width={'max-content'}
        />
      </ST.WrapperButton>
    </ST.WrapperInfo>
    <ST.Image />
  </ST.NewsBanner>
);

export default NewsBanner;
