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
          <NewsCard
            nameTag={'обновления'}
            title={'Выбор и анализ ниши'}
            description={
              'Встретитесь со своими глубинными страхами, пробьете свой финансовый потолок и научитесь получать ответы'
            }
            date={'18 января 2021'}
            time={'1 мин'}
          />
          <NewsCard
            nameTag={'Новое'}
            title={'Выбор и анализ ниши'}
            description={
              'Встретитесь со своими глубинными страхами, пробьете свой финансовый потолок и научитесь получать ответы'
            }
            date={'18 января 2021'}
            time={'1 мин'}
          />
          <NewsCard
            nameTag={'обновления'}
            title={'Выбор и анализ ниши'}
            description={
              'Встретитесь со своими глубинными страхами, пробьете свой финансовый потолок и научитесь получать ответы'
            }
            date={'18 января 2021'}
            time={'1 мин'}
          />
          <NewsCard
            nameTag={'обновления'}
            title={'Выбор и анализ ниши'}
            description={
              'Встретитесь со своими глубинными страхами, пробьете свой финансовый потолок и научитесь получать ответы'
            }
            date={'18 января 2021'}
            time={'1 мин'}
          />
          <NewsCard
            nameTag={'обновления'}
            title={'Выбор и анализ ниши'}
            description={
              'Встретитесь со своими глубинными страхами, пробьете свой финансовый потолок и научитесь получать ответы'
            }
            date={'18 января 2021'}
            time={'1 мин'}
          />
          <NewsCard
            nameTag={'обновления'}
            title={'Выбор и анализ ниши'}
            description={
              'Встретитесь со своими глубинными страхами, пробьете свой финансовый потолок и научитесь получать ответы'
            }
            date={'18 января 2021'}
            time={'1 мин'}
          />
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

export default News;
