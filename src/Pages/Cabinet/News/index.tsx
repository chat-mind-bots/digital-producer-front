import React from 'react';
import { BreadCrumbsArrayType } from 'Components/UI-KIT/BreadCrumbs';
import WrapperContent from 'Components/WrapperContent';
import AddBlock from 'Components/UI-KIT/AddBlock';
import NewsCard from 'Components/UI-KIT/NewsCard';
import * as ST from './styled';

const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
  { id: 1, name: 'Главная', url: '/Main' },
  { id: 2, name: 'Новости платформы', url: '/PlatformNews' },
];

const News = () => (
  <ST.News>
    <ST.WrapperNews>
      <WrapperContent header={[...defaultBreadCrumbs]}>
        <ST.Wrapper>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </ST.Wrapper>
      </WrapperContent>
    </ST.WrapperNews>
    <ST.WrapperAddBlock>
      <AddBlock />
    </ST.WrapperAddBlock>
  </ST.News>
);

export default News;
