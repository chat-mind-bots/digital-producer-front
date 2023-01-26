import React from 'react';
import { BreadCrumbsArrayType } from 'Components/UI-KIT/BreadCrumbs';
import WrapperContent from 'Components/WrapperContent';
import AddBlock from 'Components/UI-KIT/AddBlock';
import NewsView from 'Components/UI-KIT/NewsView';
import ReadMoreCard from 'Components/UI-KIT/ReadMoreCard';
import Colors from 'Colors';
import * as ST from './styled';

const defaultBreadCrumbs: BreadCrumbsArrayType[] = [
  { id: 1, name: 'Главная', url: '/Main' },
  { id: 2, name: 'Новости платформы', url: '/news' },
];

const News = () => (
  <ST.News>
    <ST.WrapperNews>
      <WrapperContent
        header={[
          ...defaultBreadCrumbs,
          { id: 11, name: 'Обновления', url: '/Updates' },
        ]}
      >
        <ST.Wrapper>
          <NewsView
            name={'«Вирусная» игра сыграна'}
            text={
              'Онлайн-образования на стыке пандемии.\n' +
              '        <br />\n' +
              '        <br />\n' +
              '        Полностью согласен с тем, что пандемия оказалось главным триггером,\n' +
              '        который ускорил процесс цифровизации обучения и в целом\n' +
              '        онлайн-образовании. Те, кто скептически относился к этому, осознали, что\n' +
              '        такой формат действительно работает и имеет очень много плюсов.\n' +
              '        <br />\n' +
              '        <br />\n' +
              '        Давайте честно признаемся, что онлайн-образование вписывается в\n' +
              '        повседневную жизнь намного проще, чем оффлайн.\n' +
              '        <br />\n' +
              '        <br />\n' +
              '        На этом все, хватит оптимизма. Давайте реалистично смотреть на эту\n' +
              '        картину. Наш рынок онлайн-образования ооочень далек от идеала.\n' +
              '        <br />\n' +
              '        <br />\n' +
              '        Если наш рынок онлайн-образования был бы человеком, то на мой вопрос\n' +
              '        “Кто считает, что онлайн образование это то же что и оффлайн, но только\n' +
              '        в зуме?” он бы поднял обе руки.\n' +
              '        <br />\n' +
              '        <br />\n' +
              '        Проблема в том, что мы перешли на онлайн-образование технологически, но\n' +
              '        не методологически. Когда держали фокус на быстром переходе в онлайн, мы\n' +
              '        потеряли самое главное - образовательный опыт, то бишь, результат\n' +
              '        конкретного обучающегося.\n' +
              '        <br />\n' +
              '        <br />\n' +
              '        Но все же повторюсь, люди будут видеть больше смысла в обучении, а\n' +
              '        значит, будут готовы вкладывать все больше средств в собственное\n' +
              '        образование. Обучение стало важной инвестицией, и тренды, над которыми\n' +
              '        сегодня экспериментируют, станут неотъемлемой частью удовлетворения\n' +
              '        потребностей.\n' +
              '        <br />\n' +
              '        <br />\n' +
              '        В связи с этим, начну серию постов и видео на тему онлайн-образования, о\n' +
              '        создании архитектуры обучения, а также техническая реализация запуска\n' +
              '        онлайн-школ.\n' +
              '        <br />\n' +
              '        <br />\n' +
              '        С сегодняшнего дня буду писать о важных инструментах и методах для\n' +
              '        создания онлайн-продукта, который заточен на конкретный конечный\n' +
              '        результат.\n' +
              '        <br />\n' +
              '        <br />\n' +
              '        Следующий пост на тему “персонализированные рабочие пространства”\n' +
              '        <br />\n' +
              '        <br />\n' +
              '        EdTech is the new Fintech...'
            }
            time={'Время чтения: 1 мин'}
            date={'18 января 2021'}
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
      <WrapperContent header={'Читать также'}>
        <ST.Wrapper>
          <ReadMoreCard
            name={'Выбор и анализ ниши'}
            description={
              'Встретитесь со своими глубинными страхами, пробьете свой финансовый потолок и научитесь получать ответы'
            }
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
          <ReadMoreCard
            name={'Выбор и анализ ниши'}
            description={
              'Встретитесь со своими глубинными страхами, пробьете свой финансовый потолок и научитесь получать ответы'
            }
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
          <ReadMoreCard
            name={'Выбор и анализ ниши'}
            description={
              'Встретитесь со своими глубинными страхами, пробьете свой финансовый потолок и научитесь получать ответы'
            }
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
          <ReadMoreCard
            name={'Выбор и анализ ниши'}
            description={
              'Встретитесь со своими глубинными страхами, пробьете свой финансовый потолок и научитесь получать ответы'
            }
            url={'/news/2'}
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
          <ReadMoreCard
            name={'Выбор и анализ ниши'}
            description={
              'Встретитесь со своими глубинными страхами, пробьете свой финансовый потолок и научитесь получать ответы'
            }
            url={'/news/2'}
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
          <ReadMoreCard
            name={'Выбор и анализ ниши'}
            description={
              'Встретитесь со своими глубинными страхами, пробьете свой финансовый потолок и научитесь получать ответы'
            }
            url={'/news/2'}
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
