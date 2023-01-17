import React from 'react';
import { ReactComponent as IconForAddBlock } from 'Icons/IconForAddBlock.svg';
import * as ST from './styled';

const AddBlock = () => (
  <ST.AddBlock>
    <IconForAddBlock />
    <ST.Title>Создайте свой курс</ST.Title>
    <ST.Description>
      Станьте продюсером своего курса и проводите уроки на платформе
    </ST.Description>
    <ST.Button>Создать курс</ST.Button>
  </ST.AddBlock>
);

export default AddBlock;
