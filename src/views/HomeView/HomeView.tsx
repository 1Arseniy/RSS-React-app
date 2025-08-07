import { useEffect, useState } from 'react';

import { Header, Main } from '@/components';

import type { TypeProps } from '@/types/types';

import { Outlet } from 'react-router-dom';

import { useGetCharactersQuery } from '@/client/api';

import useLocalStorage from '@/hooks/useLocalStorage';

function HomeView() {
  const [state, setState] = useState<TypeProps>({
    page: 1,
    name: '',
  });
  const [savedValue] = useLocalStorage('name', '');

  const { data, isError, error, isFetching, refetch } = useGetCharactersQuery({
    name: state.name,
    page: state.page,
  });
  const queryResult = { data, isError, error, isFetching, refetch };

  useEffect(() => {
    setState((prev) => ({ ...prev, name: savedValue || '' }));
  }, [savedValue]);

  return (
    <>
      <Outlet />
      <Header setState={setState} />
      <Main setState={setState} states={state} queryResult={queryResult} />
    </>
  );
}

export default HomeView;
