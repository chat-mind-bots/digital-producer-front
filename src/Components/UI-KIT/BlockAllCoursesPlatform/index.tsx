import { ReactComponent as IconForNavBar } from 'Icons/IconForNavBar.svg';
import Colors from 'Colors';
import Button from 'Components/UI-KIT/Atoms/Button';
import * as ST from './styled';

const BlockAllCoursesPlatform = () => (
  <ST.ComponentForNavBar>
    <IconForNavBar />
    <ST.WrapperButton>
      <Button
        title={'Курсы платформы'}
        padding={'11px 23px'}
        fontSize={'14px'}
        lineHeight={'20px'}
        fontWeight={'600'}
        background={Colors.WHITE}
        color={Colors.BLUE}
        backgroundAnimation={Colors.BLUE_DARK}
        colorHover={Colors.WHITE}
        width={'max-content'}
      />
    </ST.WrapperButton>
  </ST.ComponentForNavBar>
);

export default BlockAllCoursesPlatform;
