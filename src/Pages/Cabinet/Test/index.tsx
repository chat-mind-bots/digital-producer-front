import { FC } from 'react';
import BlockRulesTest from 'Components/UI-KIT/BlockRulesTest';
import WrapperContent from 'Components/WrapperContent';
import Questions, { QuestionData } from 'Components/UI-KIT/Questions';
import Button from 'Components/UI-KIT/Atoms/Button';
import Colors from 'Colors';
import * as ST from './styled';

type TestProps = {
  description: string;
};

const Test: FC<TestProps> = ({ description }) => (
  <ST.Test>
    <WrapperContent header={'Тест 31'}>
      <>
        <ST.Info>
          <ST.Description>{description}</ST.Description>
          <BlockRulesTest
            array={[
              { id: 1, rule: 'Тест состоит из 100 вопросов' },
              { id: 2, rule: 'Тест состоит из 100 вопросов' },
              { id: 3, rule: 'Тест состоит из 100 вопросов' },
            ]}
          />
        </ST.Info>
        <ST.WrapperQuestions>
          <ST.ListTitle>Вопросы:</ST.ListTitle>
          <Questions arrayQuestion={QuestionData} />
        </ST.WrapperQuestions>
        <ST.WrapperButton>
          <Button
            title={'Отправить'}
            padding={'14px 100px'}
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
      </>
    </WrapperContent>
  </ST.Test>
);

export default Test;
