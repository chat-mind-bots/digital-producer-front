import React from 'react';
import { Languages } from '18n';
import { useTranslation } from 'react-i18next';
import toast, { Toaster } from 'react-hot-toast';
import * as ST from './styled';

const LanguageBar = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: Languages) => {
    i18n
      .changeLanguage(language)
      .then(() => {
        toast.success(
          language === Languages.RU
            ? 'Язык сменен на Русский'
            : 'Change language to English'
        );
      })
      .catch(() => {
        toast.error("This didn't work.");
      });
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
      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </ST.LanguageBar>
  );
};

export default LanguageBar;
