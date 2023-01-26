import { FC } from 'react';
import { Link } from 'react-router-dom';
import Date from 'Components/UI-KIT/Atoms/Date';
import Time from 'Components/UI-KIT/Atoms/Time';
import Tags, { TagType } from 'Components/UI-KIT/Atoms/Tags';
import * as ST from './styled';

type NewsCardProps = {
  name: string;
  description: string;
  timeRead: string;
  date: string;
  tags: TagType[];
  tagsColors: boolean;
  image: JSX.Element;
  url: string;
};

const NewsCard: FC<NewsCardProps> = ({
  name,
  description,
  timeRead,
  date,
  tags,
  tagsColors,
  image,
  url,
}) => (
  <Link to={url}>
    <ST.NewsCard>
      {image}
      <Tags
        tags={tags}
        tagsColors={tagsColors}
      />
      <ST.Title>{name}</ST.Title>
      <ST.Description>{description}</ST.Description>
      <ST.WrapperTime>
        <Time value={timeRead} />
      </ST.WrapperTime>
      <ST.WrapperDate>
        <Date value={date} />
      </ST.WrapperDate>
    </ST.NewsCard>
  </Link>
);

export default NewsCard;
