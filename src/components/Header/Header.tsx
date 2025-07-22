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

  const [value, setValue] = useLocalStorage('name', '');

  const [state, setState] = useState({
    text: value,
  });

  const getText = async () => {
    const deleteSpaces = state.text.trim();
    setState({ text: deleteSpaces });
    setValue(deleteSpaces);
    setUpdatePage((prev) => ({ ...prev, page: 1 }));
    await getByRequest(deleteSpaces);
  };

  const setText = (name: string) => {
    setState({ text: name });
  };

  return (
    <header className="h-[10vh] flex justify-center items-center">
      <InputSearch setText={setText} inputValue={state.text} />
      <Button onClick={getText}>Search</Button>
    </header>
  );
}

export default Header;
