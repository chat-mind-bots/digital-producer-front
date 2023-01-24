import { useState } from 'react';
import Search from 'Components/UI-KIT/Search';
import AuthBlock from 'Components/UI-KIT/AuthBlock';
import * as ST from './styled';

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <ST.Header>
      <Search
        value={searchValue}
        setValue={setSearchValue}
        placeholder={'Поиск'}
      />
      <AuthBlock
        name={'Adilet'}
        mail={'adilet@gmail.com'}
      />
    </ST.Header>
  );
};
export default Header;
