import { FC } from 'react';
import { ReactComponent as IconForPlatformNewsCard } from 'Icons/IconForPlatformNewsCard.svg';
import Date from 'Components/UI-KIT/Atoms/Date';
import Time from 'Components/UI-KIT/Atoms/Time';
import * as ST from './styled';

type NewsCardProps = {
  nameTag: string;
  title: string;
  description: string;
  time: string;
  date: string;
};

const NewsCard: FC<NewsCardProps> = ({
  nameTag,
  title,
  description,
  time,
  date,
}) => (
  <ST.NewsCard>
    <IconForPlatformNewsCard />
    <ST.Tags>
      <ST.Tag>{nameTag}</ST.Tag>
    </ST.Tags>
    <ST.Title>{title}</ST.Title>
    <ST.Description>{description}</ST.Description>
    <ST.WrapperTime>
      <Time value={time} />
    </ST.WrapperTime>
    <ST.WrapperDate>
      <Date value={date} />
    </ST.WrapperDate>
  </ST.NewsCard>
);

export default NewsCard;
