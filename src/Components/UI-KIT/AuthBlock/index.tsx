import { ReactComponent as ArrowDown } from 'Icons/ArrowDown.svg';
import { ReactComponent as IconAvatar } from 'Icons/IconAvatar.svg';
import * as ST from './styled';

const AuthBlock = () => (
  <ST.AuthBlock>
    <ST.WrapperAvatar>
      <IconAvatar />
    </ST.WrapperAvatar>
    <ST.WrapperInfo>
      <ST.Name>Adilet</ST.Name>
      <ST.Mail>adilet@gmail.com</ST.Mail>
    </ST.WrapperInfo>
    <ST.WrapperArrowDown>
      <ArrowDown />
    </ST.WrapperArrowDown>
  </ST.AuthBlock>
);

export default AuthBlock;
