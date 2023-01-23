import React from 'react';
import WrapperContent from 'Components/WrapperContent';
import AddBlock from 'Components/UI-KIT/AddBlock';
import NewsBanner from 'Components/UI-KIT/NewsBanner';
import CourseCard from 'Components/UI-KIT/CourseCard';
import Insights from 'Components/UI-KIT/Insights';
import * as ST from './styled';

const Main = () => (
  <ST.Main>
    <NewsBanner />
    <ST.WrapperMain>
      <Insights />
      <WrapperContent header={'Рекомендованные курсы'}>
        <ST.Wrapper>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </ST.Wrapper>
      </WrapperContent>
    </ST.WrapperMain>
    <ST.WrapperAddBlock>
      <AddBlock />
    </ST.WrapperAddBlock>
  </ST.Main>
);

export default Main;
