import { FC } from 'react';
import { Link } from 'react-router-dom';
import * as ST from './styled';
import Colors from 'Colors';

type ReadMoreCardProps = {
  name: string;
  tags: TagType[];
  tagsColors: boolean;
  url: string;
  description: string;
};

export interface TagType {
  id: number;
  name: string;
  background: string;
  color: string;
}

const ReadMoreCard: FC<ReadMoreCardProps> = ({
  name,
  description,
  tagsColors,
  tags,
  url,
}) => (
  <Link to={url}>
    <ST.ReadMoreCard>
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
      <ST.Name>{name}</ST.Name>
      <ST.Description>{description}</ST.Description>
    </ST.ReadMoreCard>
  </Link>
);

export default ReadMoreCard;
