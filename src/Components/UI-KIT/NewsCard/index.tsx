import { FC } from 'react';
import { Link } from 'react-router-dom';
import Date from 'Components/UI-KIT/Atoms/Date';
import Time from 'Components/UI-KIT/Atoms/Time';
import Colors from 'Colors';
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

export interface TagType {
  id: number;
  name: string;
  background: string;
  color: string;
}

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
      <ST.Tags>
        {tags.map((tag) => (
          <ST.Tag
            key={`NewsCard-tag-${tag.id}`}
            background={tagsColors ? tag.background : Colors.WHITE3}
            color={tagsColors ? tag.color : Colors.GREY4}
          >
            {tag.name}
          </ST.Tag>
        ))}
      </ST.Tags>
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
