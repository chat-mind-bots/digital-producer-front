import { FC } from 'react';
import * as ST from './styled';

type NewsCardSmallProps = {
  nameTag: string;
  title: string;
  description: string;
};

const NewsCardSmall: FC<NewsCardSmallProps> = ({
  nameTag,
  title,
  description,
}) => (
  <ST.NewsCardSmall>
    <ST.Tags>
      <ST.Tag>{nameTag}</ST.Tag>
    </ST.Tags>
    <ST.Title>{title}</ST.Title>
    <ST.Description>{description}</ST.Description>
  </ST.NewsCardSmall>
);

export default NewsCardSmall;
