import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import BlockRulesTest from 'Components/UI-KIT/BlockRulesTest';
import WrapperContent from 'Components/WrapperContent';
import Questions from 'Components/UI-KIT/Questions';
import Button from 'Components/UI-KIT/Atoms/Button';
import { TestIdType } from 'Types/TestId';
import RoutesList from 'Router/routesList';
import Colors from 'Colors';
import * as ST from './styled';

const Test: FC<TestIdType> = ({
  id,
  name,
  description,
  status,
  countQuestions,
  minCountForSuccess,
  currentResult,
  transitTime,
  levelDifficulty,
  rules,
  questions,
}) => {
  const [state, setState] = useState<boolean>(false);

  return (
    <ST.Test>
      <WrapperContent header={name}>
        <>
          <ST.Info>
            <ST.Description>{description}</ST.Description>
            <BlockRulesTest array={rules} />
          </ST.Info>
          <ST.WrapperQuestions isActive={state}>
            <ST.ListTitle>Вопросы:</ST.ListTitle>
            <Questions arrayQuestion={questions} />
          </ST.WrapperQuestions>
          <ST.WrapperButton>
            <Link to={RoutesList.COURSES}>
              <Button
                title={'Вернуться к тесту'}
                padding={'11px 0'}
                fontSize={'14px'}
                lineHeight={'20px'}
                fontWeight={'600'}
                background={Colors.TRANSPARENT}
                color={Colors.BLACK1}
                backgroundAnimation={Colors.BLACK1}
                colorHover={Colors.WHITE}
                border={`2px solid ${Colors.BLACK1}`}
                width={'max-content'}
              />
            </Link>
            <Button
              title={!state ? 'Начать тест' : 'Отправить тест'}
              padding={'11px 0'}
              fontSize={'14px'}
              lineHeight={'20px'}
              fontWeight={'600'}
              background={Colors.BLUE}
              color={Colors.WHITE}
              backgroundAnimation={Colors.BLUE_DARK}
              colorHover={Colors.WHITE}
              width={'max-content'}
              onClick={() =>
                !state ? setState(true) : toast.success('Тест отправлен')
              }
            />
          </ST.WrapperButton>
        </>
      </WrapperContent>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </ST.Test>
  );
};

export default Test;
