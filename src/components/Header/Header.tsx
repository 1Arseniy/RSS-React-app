'use client';

import { useState } from 'react';

import useLocalStorage from '@/hooks/useLocalStorage';

import { Button } from '@/components';
import { InputSearch } from '@/components';

import type { TypeSetState } from '@/types/types';

interface TypePropsHeader {
  setState: TypeSetState;
}

function Header(props: TypePropsHeader) {
  const { setState } = props;

  const [savedValue, setSavedValue] = useLocalStorage('name', '');

  const [inputValue, setInputValue] = useState(savedValue);

  const trimText = async () => {
    const trimmedText = inputValue.trim();
    setInputValue(trimmedText);
    setSavedValue(trimmedText);
    setState((prev) => ({ ...prev, page: 1, name: trimmedText }));
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
