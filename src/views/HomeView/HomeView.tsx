import { useState } from 'react';

import { Header, Main } from '@/components';

import type { TypeProps } from '@/types/types';

import { Outlet } from 'react-router-dom';

import { useGetCharactersQuery } from '@/client/api';

import useLocalStorage from '@/hooks/useLocalStorage';

function HomeView() {
  const [savedValue] = useLocalStorage('name', '');
  const [state, setState] = useState<TypeProps>({
    page: 1,
    name: savedValue || '',
  });

  const { data, error, isFetching, refetch } = useGetCharactersQuery({
    name: state.name,
    page: state.page,
  });

  const queryResult = { data, error, isFetching, refetch };

  return (
    <>
      <Outlet />
      <Header setState={setState} />
      <Main setState={setState} states={state} queryResult={queryResult} />
    </>
  );
}

export default HomeView;
