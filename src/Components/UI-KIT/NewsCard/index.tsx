import { ReactComponent as IconForPlatformNewsCard } from 'Icons/IconForPlatformNewsCard.svg';
import Date from 'Components/UI-KIT/Atoms/Date';
import Time from 'Components/UI-KIT/Atoms/Time';
import * as ST from './styled';

const NewsCard = () => (
  <ST.NewsCard>
    <IconForPlatformNewsCard />
    <ST.Tags>
      <ST.Tag>обновления</ST.Tag>
      <ST.Tag>кейсы</ST.Tag>
    </ST.Tags>
    <ST.Title>Выбор и анализ ниши</ST.Title>
    <ST.Description>
      Встретитесь со своими глубинными страхами, пробьете свой финансовый
      потолок и научитесь получать ответы
    </ST.Description>
    <Time value="1 мин" />
    <Date value="18 января 2021" />
  </ST.NewsCard>
);

export default NewsCard;
