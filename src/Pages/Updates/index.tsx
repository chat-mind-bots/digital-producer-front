import React from 'react';
import { BreadCrumbsArrayType } from 'Components/UI-KIT/BreadCrumbs';
import WrapperContent from 'Components/WrapperContent';
import AddBlock from 'Components/UI-KIT/AddBlock';
import NewsView from 'Components/UI-KIT/NewsView';
import NewsCardSmall from 'Components/UI-KIT/NewsCardSmall';
import * as ST from './styled';

const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
  { id: 1, name: 'Главная', url: '/Main' },
  { id: 2, name: 'Новости платформы', url: '/PlatformNews' },
  { id: 11, name: 'Обновления', url: '/Updates' },
];

const News = () => (
  <ST.News>
    <ST.WrapperNews>
      <WrapperContent header={[...defaultBreadCrumbs]}>
        <ST.Wrapper>
          <NewsView />
        </ST.Wrapper>
      </WrapperContent>
      <WrapperContent header={'Читать также'}>
        <ST.Wrapper>
          <NewsCardSmall />
          <NewsCardSmall />
          <NewsCardSmall />
          <NewsCardSmall />
          <NewsCardSmall />
          <NewsCardSmall />
        </ST.Wrapper>
      </WrapperContent>
    </ST.WrapperNews>
    <ST.WrapperAddBlock>
      <AddBlock />
    </ST.WrapperAddBlock>
  </ST.News>
);

export default News;
