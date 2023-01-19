import { ReactComponent as IconForInsight1 } from 'Icons/IconForInsight1.svg';
import { ReactComponent as IconForInsight2 } from 'Icons/IconForInsight2.svg';
import { ReactComponent as IconForInsight3 } from 'Icons/IconForInsight3.svg';
import { ReactComponent as IconForInsight4 } from 'Icons/IconForInsight4.svg';
import { useState } from 'react';
import Button from 'Components/UI-KIT/Atoms/Button';
import Colors from 'Colors';
import * as ST from './styled';

type NumberPositionType = 1 | 2 | 3 | 4;

const dataInsights = [
  {
    id: 1,
    tags: [
      { id: 0, name: 'финансы' },
      { id: 1, name: 'дизайн' },
    ],
    title: 'Как распределить % между продюсером и экспертом?',
    description:
      'Пишем о том, что самое главное при формировании условий для каждого участника в проекте',
    Icon: <IconForInsight1 />,
  },
  {
    id: 2,
    tags: [{ id: 1, name: 'Шрифты' }],
    title: 'Что нужно для создании дизайн концепции?',
    description:
      'Дизайн-коцепция - визуальный набросок того как будет или должен выглядеть логотип...',
    Icon: <IconForInsight2 />,
  },
  {
    id: 3,
    tags: [{ id: 2, name: 'Маркетинг' }],
    title: 'Что такое customer journey map?',
    description:
      'Читайте, что такое customer journey, почему его важно учитывать и как составить карту клиентского пути',
    Icon: <IconForInsight3 />,
  },
  {
    id: 4,
    tags: [
      { id: 1, name: 'дизайн' },
      { id: 2, name: 'Маркетинг' },
    ],
    title: 'Кто такой Product Manager и чем он занимается?',
    description:
      'Сегодня разберём новую профессию - кто такой Product Manager и чем он занимается',
    Icon: <IconForInsight4 />,
  },
];

const Insights = () => {
  const [numberPosition, setNumberPosition] = useState<NumberPositionType>(1);
  const currentObject = dataInsights.filter(
    (item) => item.id === numberPosition
  )[0];

  return (
    <ST.Insights>
      <ST.Title>Новости и инсайты из сферы инфопродуктов</ST.Title>
      <ST.WrapperInfo>
        <ST.WrapperContent>
          <ST.WrapperInfoContent>
            <ST.Tags>
              {currentObject.tags.map((tag) => (
                <ST.Tag key={`TagItem-${tag.id}`}>{tag.name}</ST.Tag>
              ))}
            </ST.Tags>
            <ST.WrapperText>
              <ST.Name>{currentObject.title}</ST.Name>
              <ST.Description>{currentObject.description}</ST.Description>
            </ST.WrapperText>
          </ST.WrapperInfoContent>
          <ST.WrapperButton>
            <Button
              title={'Читать статью'}
              padding={'11px 28px'}
              fontSize={'14px'}
              lineHeight={'20px'}
              fontWeight={'600'}
              background={Colors.BLUE}
              color={Colors.WHITE}
              backgroundAnimation={Colors.BLUE_DARK}
              colorHover={Colors.WHITE}
              width={'max-content'}
            />
          </ST.WrapperButton>
        </ST.WrapperContent>
        <ST.IconWrapper>{currentObject.Icon}</ST.IconWrapper>
      </ST.WrapperInfo>
      <ST.Circles>
        {dataInsights.map((_, index) => (
          <ST.CircleItem
            onClick={() => setNumberPosition((index + 1) as NumberPositionType)}
            key={`List-items-for-CourseCard-${index}`}
            isActive={index + 1 === numberPosition}
          />
        ))}
      </ST.Circles>
    </ST.Insights>
  );
};

export default Insights;
