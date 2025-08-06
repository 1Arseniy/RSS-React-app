import { useState } from 'react';

import useLocalStorage from '@/hooks/useLocalStorage';

import { Button } from '@/components';
import { InputSearch } from '@/components';

import type { TypeTrigger } from '@/client/api';

import type { TypeSetUpdatePage } from '@/types/types';

interface TypePropsHeader {
  // getByRequest: TypeGetByRequest;
  trigger?: TypeTrigger;
  setUpdatePage: TypeSetUpdatePage;
}

function Header(props: TypePropsHeader) {
  const { setUpdatePage } = props;

  const [savedValue, setSavedValue] = useLocalStorage('name', '');

  const [inputValue, setInputValue] = useState(savedValue);

  // const [trigge, { data, isLoading }] = useLazyGetCharactersQuery();

  const trimText = async () => {
    const trimmedText = inputValue.trim();
    // console.log(trimmedText);
    setInputValue(trimmedText);
    setSavedValue(trimmedText);
    // console.log('LS', localStorage.getItem('name'));
    setUpdatePage((prev) => ({ ...prev, page: 1, name: trimmedText }));
    // await trigger({ name: trimmedText });
    // console.log('headr', data);
    // await getByRequest(trimmedText);
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
