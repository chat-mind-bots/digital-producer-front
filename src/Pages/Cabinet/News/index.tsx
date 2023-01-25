import React from 'react';
import { BreadCrumbsArrayType } from 'Components/UI-KIT/BreadCrumbs';
import WrapperContent from 'Components/WrapperContent';
import AddBlock from 'Components/UI-KIT/AddBlock';
import NewsCard from 'Components/UI-KIT/NewsCard';
import { ReactComponent as IconForPlatformNewsCard } from 'Icons/IconForPlatformNewsCard.svg';
import Colors from 'Colors';
import * as ST from './styled';

const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
  { id: 1, name: 'Главная', url: '/main' },
  { id: 2, name: 'Новости платформы', url: '/news' },
];

const News = () => (
  <ST.News>
    <ST.WrapperNews>
      <WrapperContent header={[...defaultBreadCrumbs]}>
        <ST.Wrapper>
          <NewsCard
            name={'Выбор и анализ ниши'}
            description={
              'Встретитесь со своими глубинными страхами, пробьете свой финансовый потолок и научитесь получать ответы'
            }
            date={'18 января 2021'}
            timeRead={'1 мин'}
            image={<IconForPlatformNewsCard />}
            url={'/news/1'}
            tagsColors={false}
            tags={[
              {
                id: 1,
                name: 'обновления',
                background: Colors.WHITE3,
                color: Colors.GREY1,
              },
            ]}
          />
          <NewsCard
            name={'Выбор и анализ ниши'}
            description={
              'Встретитесь со своими глубинными страхами, пробьете свой финансовый потолок и научитесь получать ответы'
            }
            date={'18 января 2021'}
            timeRead={'1 мин'}
            image={<IconForPlatformNewsCard />}
            url={'/news/1'}
            tagsColors={false}
            tags={[
              {
                id: 1,
                name: 'обновления',
                background: Colors.WHITE3,
                color: Colors.GREY1,
              },
            ]}
          />
          <NewsCard
            name={'Выбор и анализ ниши'}
            description={
              'Встретитесь со своими глубинными страхами, пробьете свой финансовый потолок и научитесь получать ответы'
            }
            date={'18 января 2021'}
            timeRead={'1 мин'}
            image={<IconForPlatformNewsCard />}
            url={'/news/1'}
            tagsColors={false}
            tags={[
              {
                id: 1,
                name: 'обновления',
                background: Colors.WHITE3,
                color: Colors.GREY1,
              },
            ]}
          />
          <NewsCard
            name={'Выбор и анализ ниши'}
            description={
              'Встретитесь со своими глубинными страхами, пробьете свой финансовый потолок и научитесь получать ответы'
            }
            date={'18 января 2021'}
            timeRead={'1 мин'}
            image={<IconForPlatformNewsCard />}
            url={'/news/1'}
            tagsColors={false}
            tags={[
              {
                id: 1,
                name: 'обновления',
                background: Colors.WHITE3,
                color: Colors.GREY1,
              },
            ]}
          />
          <NewsCard
            name={'Выбор и анализ ниши'}
            description={
              'Встретитесь со своими глубинными страхами, пробьете свой финансовый потолок и научитесь получать ответы'
            }
            date={'18 января 2021'}
            timeRead={'1 мин'}
            image={<IconForPlatformNewsCard />}
            url={'/news/1'}
            tagsColors={false}
            tags={[
              {
                id: 1,
                name: 'обновления',
                background: Colors.WHITE3,
                color: Colors.GREY1,
              },
            ]}
          />
          <NewsCard
            name={'Выбор и анализ ниши'}
            description={
              'Встретитесь со своими глубинными страхами, пробьете свой финансовый потолок и научитесь получать ответы'
            }
            date={'18 января 2021'}
            timeRead={'1 мин'}
            image={<IconForPlatformNewsCard />}
            url={'/news/1'}
            tagsColors={false}
            tags={[
              {
                id: 1,
                name: 'обновления',
                background: Colors.WHITE3,
                color: Colors.GREY1,
              },
            ]}
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
