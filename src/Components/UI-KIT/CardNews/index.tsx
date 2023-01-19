import Colors from 'Colors';
import Button from 'Components/UI-KIT/Atoms/Button';
import * as ST from './styled';

const CardNews = () => (
  <ST.CardNews>
    <ST.WrapperInfo>
      <ST.Title>Новости платформы</ST.Title>
      <ST.Description>
        Самые последние и актуальные новости и обновления платформы
      </ST.Description>
      <ST.WrapperButton>
        <Button
          title={'Читать статью'}
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
  </ST.CardNews>
);

export default CardNews;
