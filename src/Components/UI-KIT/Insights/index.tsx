import { ReactComponent as IconForInsight1 } from 'Icons/IconForInsight1.svg';
import * as ST from './styled';

const Insights = () => {
  return (
    <ST.Insights>
      <ST.Title>Новости и инсайты из сферы инфопродуктов</ST.Title>
      <ST.WrapperInfo>
        <ST.WrapperContent>
          <ST.Tags>
            <ST.TagItem>Маркетинг</ST.TagItem>
            <ST.TagItem>дизайн</ST.TagItem>
          </ST.Tags>
          <ST.InsightTitle>
            Как распределить % между продюсером и экспертом?
          </ST.InsightTitle>
          <ST.Description>
            Пишем о том, что самое главное при формировании условий для каждого
            участника в проекте
          </ST.Description>
          <ST.Button>Читать статью</ST.Button>
        </ST.WrapperContent>
        <IconForInsight1 />
      </ST.WrapperInfo>
      <ST.Circles>
        {[false, true, false, false].map((item, index) => (
          <ST.CircleItem
            key={`List-items-for-CourseCard-${index}`}
            isActive={item}
          />
        ))}
      </ST.Circles>
    </ST.Insights>
  );
};

export default Insights;
