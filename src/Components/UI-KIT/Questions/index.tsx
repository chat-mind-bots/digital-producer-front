import { FC } from 'react';
import Radio from 'Components/UI-KIT/Atoms/Radio';
import * as ST from './styled';

export const QuestionData: QuestionType[] = [
  {
    id: 1,
    question: 'Что такое метаболическая внутриклеточная детоксикация:',
    answers: [
      {
        id: 1,
        name: 'это процесс выведение токсинов из клетки во внеклеточное пространство',
      },
      {
        id: 2,
        name:
          'это процесс преобразования специальными внутриклеточными молекулярными системами токсинов' +
          ' и эндогенных метаболитов в безвредные молекулы, которые могут быть выведены из организама',
      },
      {
        id: 3,
        name: 'трансформация токсичных веществ оброазующихся в результате жизнедеятельности клетки',
      },
    ],
  },
  {
    id: 2,
    question:
      'К основным клиническим паттернам хронических интоксикаций не относятся:',
    answers: [
      {
        id: 1,
        name: 'генотоксический/канцерогенный',
      },
      {
        id: 2,
        name: 'неврологический/психиатрический',
      },
    ],
  },
];

type QuestionType = {
  id: number;
  question: string;
  answers: {
    id: number;
    name: string;
  }[];
};

export type QuestionProps = {
  arrayQuestion: QuestionType[];
};

const Questions: FC<QuestionProps> = ({ arrayQuestion }) => (
  <ST.Questions>
    {arrayQuestion.map((question) => (
      <ST.Question key={`Question-${question.id}`}>
        <ST.Text>{question.question}</ST.Text>
        <ST.Answers>
          {question.answers.map((answer) => (
            <ST.AnswerWrapper key={`Answer-${answer.id}`}>
              <Radio isActive={false} />
              <ST.Answer>{answer.name}</ST.Answer>
            </ST.AnswerWrapper>
          ))}
        </ST.Answers>
      </ST.Question>
    ))}
  </ST.Questions>
);

export default Questions;
