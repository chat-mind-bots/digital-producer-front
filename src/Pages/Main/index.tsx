import React, { useState } from 'react';
import Input from 'Components/UI-KIT/Input';

const Main = () => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <Input
      value={inputValue}
      setValue={setInputValue}
      placeholder={'Введите имя'}
      isError={true}
      errorText={'ошибка'}
    />
  );
};

export default Main;
