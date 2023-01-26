import React, { FC } from 'react';
import { BreadCrumbsArrayType } from 'Components/UI-KIT/BreadCrumbs';
import WrapperContent from 'Components/WrapperContent';
import NewsView from 'Components/UI-KIT/NewsView';
import ReadMoreCard from 'Components/UI-KIT/ReadMoreCard';
import AddBlock from 'Components/UI-KIT/AddBlock';
import RoutesList from 'Router/routesList';
import { NewsIdType } from 'Types/NewsId';
import * as ST from './styled';

const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
  { id: 1, name: 'Главная', url: RoutesList.MAIN },
  { id: 2, name: 'Новости платформы', url: RoutesList.NEWS },
];

const NewsId: FC<NewsIdType> = ({
  id,
  name,
  description,
  timeRead,
  data,
  image,
  tagsColors,
  tags,
  readAlsoList,
}) => (
  <ST.News>
    <ST.WrapperNews>
      <WrapperContent
        header={[
          ...defaultBreadCrumbs,
          { id: 11, name: name, url: `${RoutesList.NEWS_ID}${id}` },
        ]}
      >
        <ST.Wrapper>
          <NewsView
            name={name}
            text={description}
            time={`Время чтения: ${timeRead} мин`}
            date={data}
            tagsColors={tagsColors}
            tags={tags}
          />
        </ST.Wrapper>
      </WrapperContent>
      <WrapperContent header={'Читать также'}>
        <ST.Wrapper>
          {readAlsoList.map((readMoreCardItem) => (
            <ReadMoreCard
              key={`News-readMoreCard-item-${readMoreCardItem.id}`}
              name={readMoreCardItem.name}
              description={readMoreCardItem.description}
              url={`${RoutesList.NEWS_ID}${readMoreCardItem.id}`}
              tagsColors={tagsColors}
              tags={readMoreCardItem.tags}
            />
          ))}
        </ST.Wrapper>
      </WrapperContent>
    </ST.WrapperNews>
    <ST.WrapperAddBlock>
      <AddBlock
        title={'Создайте свой курс'}
        description={
          'Станьте продюсером своего курса и проводите уроки на платформе'
        }
        textButton={'Создать курс'}
        urlButton={''}
        styleButton={''}
      />
    </ST.WrapperAddBlock>
  </ST.News>
);

export default NewsId;
