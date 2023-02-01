import React from 'react';
import { useGetNewsQuery } from 'Store/api/news/news.api';
import { BreadCrumbsArrayType } from 'Components/UI-KIT/BreadCrumbs';
import WrapperContent from 'Components/WrapperContent';
import AddBlock from 'Components/UI-KIT/AddBlock';
import NewsCard from 'Components/UI-KIT/NewsCard';
import RoutesList from 'Router/routesList';
import WrapperRequest from 'Components/WrapperRequest';
import * as ST from './styled';

const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
  { id: 1, name: 'Главная', url: RoutesList.MAIN },
  { id: 2, name: 'Новости платформы', url: RoutesList.NEWS },
];

const News = () => {
  const result = useGetNewsQuery('myNewsUser');
  const { data, isError, isLoading } = result;

  return (
    <ST.News>
      <ST.WrapperNews>
        <WrapperContent header={[...defaultBreadCrumbs]}>
          <ST.Wrapper>
            <WrapperRequest
              isError={isError}
              isLoading={isLoading}
            >
              <>
                {data &&
                  data.list.map((newsItem) => (
                    <NewsCard
                      key={`News-NewsCard-${newsItem.id}`}
                      id={newsItem.id}
                      name={newsItem.name}
                      description={newsItem.description}
                      date={newsItem.date}
                      timeRead={`Время чтения: ${newsItem.timeRead} мин`}
                      image={''}
                      url={`${RoutesList.PRODUCER_NEWS_ID}${newsItem.id}`}
                      tagsColors={data.tagsColors}
                      tags={newsItem.tags}
                    />
                  ))}
              </>
            </WrapperRequest>
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
};

export default News;
