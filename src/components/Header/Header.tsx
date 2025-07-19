import { useState } from 'react';

import { Button } from '@/components';
import { InputSearch } from '@/components';

import type { typeGetByRequest } from '@/types/types';

function Header({ getByRequest }: { getByRequest: typeGetByRequest }) {
  const [state, setState] = useState({
    text: localStorage.getItem('name') || '',
  });

  const getText = async () => {
    const deleteSpaces = state.text.trim();
    setState({ text: deleteSpaces });
    localStorage.setItem('name', deleteSpaces);
    await getByRequest(deleteSpaces);
  };

  const setText = (name: string) => {
    setState({ text: name });
  };

  return (
    <header className="h-[12vh] flex justify-center items-center">
      <InputSearch setText={setText} InputValue={state.text} />
      <Button onClick={getText}>Search</Button>
    </header>
  );
}

export default Header;
