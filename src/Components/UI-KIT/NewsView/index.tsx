import { FC } from 'react';
import { ReactComponent as IconForNewsView } from 'Icons/IconForNewsView.svg';
import Date from 'Components/UI-KIT/Atoms/Date';
import Time from 'Components/UI-KIT/Atoms/Time';
import * as ST from './styled';

type NewsCardSmallProps = {
  nameTag: string;
  title: string;
  text: string;
  time: string;
  date: string;
};

const NewsView: FC<NewsCardSmallProps> = ({
  nameTag,
  title,
  text,
  time,
  date,
}) => (
  <ST.NewsView>
    <IconForNewsView />
    <ST.WrapperInfo>
      <ST.WrapperDateInfo>
        <Time value={time} />
        <Date value={date} />
      </ST.WrapperDateInfo>
      <ST.Tags>
        <ST.Tag>{nameTag}</ST.Tag>
      </ST.Tags>
      <ST.Title>{title}</ST.Title>
      <ST.WrapperText dangerouslySetInnerHTML={{ __html: text }} />
    </ST.WrapperInfo>
  </ST.NewsView>
);

export default NewsView;
