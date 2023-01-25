import { FC } from 'react';
import * as ST from './styled';

type ReadMoreCardProps = {
  nameTag: string;
  title: string;
  description: string;
};

const ReadMoreCard: FC<ReadMoreCardProps> = ({
  nameTag,
  title,
  description,
}) => (
  <ST.ReadMoreCard>
    <ST.Tags>
      <ST.Tag>{nameTag}</ST.Tag>
    </ST.Tags>
    <ST.Title>{title}</ST.Title>
    <ST.Description>{description}</ST.Description>
  </ST.ReadMoreCard>
);

export default ReadMoreCard;
