import * as ST from './styled';
import { FC } from 'react';

type TestCardProps = {
  onClick: () => void;
};

const TestCard: FC<TestCardProps> = ({ onClick }) => (
  <ST.TestCardProducer onClick={onClick}>+</ST.TestCardProducer>
);

export default TestCard;
