import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import BlockRulesTest from 'Components/UI-KIT/BlockRulesTest';
import WrapperContent from 'Components/WrapperContent';
import Questions from 'Components/UI-KIT/Questions';
import Button from 'Components/UI-KIT/Atoms/Button';
import RoutesList from 'Router/routesList';
import { useGetTestIdQuery } from 'Store/api/test/test.api';
import WrapperRequest from 'Components/WrapperRequest';
import Colors from 'Colors';
import * as ST from './styled';

const TestId = () => {
  const [state, setState] = useState<boolean>(false);
  const result = useGetTestIdQuery(1);
  const { data, isError, isLoading } = result;

  return (
    <ST.Test>
      <WrapperContent header={data ? data.name : 'Загрузка'}>
        <WrapperRequest
          isError={isError}
          isLoading={isLoading}
        >
          <>
            {data && (
              <>
                <ST.Info>
                  <ST.Description>{data.description}</ST.Description>
                  <BlockRulesTest array={data.rules} />
                </ST.Info>
                <ST.WrapperQuestions isActive={state}>
                  <ST.ListTitle>Вопросы:</ST.ListTitle>
                  <Questions arrayQuestion={data.questions} />
                </ST.WrapperQuestions>
                <ST.WrapperButton>
                  <Link to={`${RoutesList.PRODUCER_COURSE_ID}1`}>
                    <Button
                      title={'Вернуться к курсу'}
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
            )}
          </>
        </WrapperRequest>
      </WrapperContent>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </ST.Test>
  );
};

export default TestId;
