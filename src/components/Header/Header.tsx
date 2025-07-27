import { useState } from 'react';

import useLocalStorage from '@/hooks/useLocalStorage';

import { Button } from '@/components';
import { InputSearch } from '@/components';

import type { typeGetByRequest, typeSetUpdatePage } from '@/types/types';

interface typePropsHeader {
  getByRequest: typeGetByRequest;
  setUpdatePage: typeSetUpdatePage;
}

function Header(props: typePropsHeader) {
  const { getByRequest, setUpdatePage } = props;

  const [savedValue, setSavedValue] = useLocalStorage('name', '');

  const [inputValue, setInputValue] = useState(savedValue);

  const trimmedText = async () => {
    const deleteSpaces = inputValue.trim();
    setInputValue(deleteSpaces);
    setSavedValue(deleteSpaces);
    setUpdatePage((prev) => ({ ...prev, page: 1 }));
    await getByRequest(deleteSpaces);
  };

  const setText = (name: string) => {
    setInputValue(name);
  };

  return (
    <header className="h-[10vh] flex justify-center items-center">
      <InputSearch setText={setText} inputValue={inputValue} />
      <Button onClick={trimmedText}>Search</Button>
    </header>
  );
}

export default Header;
