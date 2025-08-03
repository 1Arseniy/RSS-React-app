import { useState } from 'react';

import useLocalStorage from '@/hooks/useLocalStorage';

import { Button } from '@/components';
import { InputSearch } from '@/components';

import type { TypeGetByRequest, TypeSetUpdatePage } from '@/types/types';

interface TypePropsHeader {
  getByRequest: TypeGetByRequest;
  setUpdatePage: TypeSetUpdatePage;
}

function Header(props: TypePropsHeader) {
  const { getByRequest, setUpdatePage } = props;

  const [savedValue, setSavedValue] = useLocalStorage('name', '');

  const [inputValue, setInputValue] = useState(savedValue);

  const trimText = async () => {
    const trimmedText = inputValue.trim();
    setInputValue(trimmedText);
    setSavedValue(trimmedText);
    setUpdatePage((prev) => ({ ...prev, page: 1 }));
    await getByRequest(trimmedText);
  };

  const setText = (name: string) => {
    setInputValue(name);
  };

  return (
    <header className="h-[10vh] flex justify-center items-center">
      <InputSearch setText={setText} inputValue={inputValue} />
      <Button onClick={trimText}>Search</Button>
    </header>
  );
}

export default Header;
