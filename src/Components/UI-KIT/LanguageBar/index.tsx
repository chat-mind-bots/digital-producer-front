import React from 'react';
import { Languages } from '18n';
import { useTranslation } from 'react-i18next';
import * as ST from './styled';

const LanguageBar = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: Languages) => {
    i18n.changeLanguage(language);
  };

  return (
    <ST.LanguageBar>
      <ST.Button
        onClick={() => {
          changeLanguage(Languages.RU);
        }}
      >
        RU
      </ST.Button>
      <ST.Button
        onClick={() => {
          changeLanguage(Languages.EN);
        }}
      >
        EN
      </ST.Button>
    </ST.LanguageBar>
  );
};

export default LanguageBar;
