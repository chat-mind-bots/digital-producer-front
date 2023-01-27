import React, { FC } from 'react';
import { BreadCrumbsArrayType } from 'Components/UI-KIT/BreadCrumbs';
import WrapperContent from 'Components/WrapperContent';
import AddBlock from 'Components/UI-KIT/AddBlock';
import NewsCard from 'Components/UI-KIT/NewsCard';
import RoutesList from 'Router/routesList';
import { NewsType } from 'Types/News';
import * as ST from './styled';

const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
  { id: 1, name: 'Главная', url: RoutesList.MAIN },
  { id: 2, name: 'Новости платформы', url: RoutesList.NEWS },
];

const News: FC<NewsType> = ({ count, pageCount, currentPage, data }) => (
  <ST.News>
    <ST.WrapperNews>
      <WrapperContent header={[...defaultBreadCrumbs]}>
        <ST.Wrapper>
          {data.list.map((newsItem) => (
            <NewsCard
              key={`News-NewsCard-${newsItem.id}`}
              id={newsItem.id}
              name={newsItem.name}
              description={newsItem.description}
              date={newsItem.date}
              timeRead={`Время чтения: ${newsItem.timeRead} мин`}
              image={''}
              url={`${RoutesList.NEWS_ID}${newsItem.id}`}
              tagsColors={data.tagsColors}
              tags={newsItem.tags}
            />
          ))}
        </ST.Wrapper>
      </WrapperContent>
    </ST.WrapperNews>
    <AddBlock
      title={'Создайте свой курс'}
      description={
        'Станьте продюсером своего курса и проводите уроки на платформе'
      }
      textButton={'Создать курс'}
      urlButton={''}
      styleButton={''}
    />
  </ST.News>
);

export default News;
