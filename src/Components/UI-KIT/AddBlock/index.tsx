import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as IconForAddBlock } from 'Icons/IconForAddBlock.svg';
import * as ST from './styled';

const AddBlock = () => {
  const { t } = useTranslation();

  return (
    <ST.AddBlock>
      <IconForAddBlock />
      <ST.Title>{t('Components.UIKIT.AddBlock.Title')}</ST.Title>
      <ST.Description>
        {t('Components.UIKIT.AddBlock.Description')}
      </ST.Description>
      <ST.Button> {t('Components.UIKIT.AddBlock.Button')}</ST.Button>
    </ST.AddBlock>
  );
};

export default AddBlock;
