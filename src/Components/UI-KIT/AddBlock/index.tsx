import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as IconForAddBlock } from 'Icons/IconForAddBlock.svg';
import Button from 'Components/UI-KIT/Atoms/Button';
import Colors from 'Colors';
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
      <ST.WrapperButton>
        <Button
          title={t('Components.UIKIT.AddBlock.Button')}
          padding={'11px 28px'}
          fontSize={'14px'}
          lineHeight={'20px'}
          fontWeight={'600'}
          background={Colors.BLUE}
          color={Colors.WHITE}
          backgroundAnimation={Colors.BLUE_DARK}
          colorHover={Colors.WHITE}
          width={'100%'}
        />
      </ST.WrapperButton>
    </ST.AddBlock>
  );
};

export default AddBlock;
