import { ReactComponent as Calendar } from 'Icons/Calendar.svg';
import { ReactComponent as IconForPlatformNewsCard } from 'Icons/IconForPlatformNewsCard.svg';
import { ReactComponent as Clock } from 'Icons/Clock.svg';
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
    <ST.Time>
      <Clock />
      Время чтения: 1 мин
    </ST.Time>
    <ST.Date>
      <Calendar />
      Дата: 18 января 2021
    </ST.Date>
  </ST.NewsCard>
);

export default NewsCard;
