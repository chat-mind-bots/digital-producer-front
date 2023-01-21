import React, { useState } from 'react';
import Input from 'Components/UI-KIT/Input';
import Search from 'Components/UI-KIT/Search';

const Main = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <>
      <Input
        value={inputValue}
        setValue={setInputValue}
        placeholder={'Введите имя'}
        isError={true}
        errorText={'ошибка'}
      />
      <Search
        value={searchValue}
        setValue={setSearchValue}
        placeholder={'Поиск'}
      />
    </>
  );
};

export default Main;
