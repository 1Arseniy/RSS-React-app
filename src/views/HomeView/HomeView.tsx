import { useEffect, useState } from 'react';

import { Header, Main } from '@/components';

import type { TypeProps } from '@/types/types';

import { Outlet } from 'react-router-dom';

import { useGetCharactersQuery } from '@/client/api';

import useLocalStorage from '@/hooks/useLocalStorage';

function HomeView() {
  const [state, setState] = useState<TypeProps>({
    // characters: [],
    // loading: true,
    // error: false,
    page: 1,
    name: '',
  });
  const [savedValue] = useLocalStorage('name', '');
  const { data, isLoading, isError, error, isFetching } = useGetCharactersQuery(
    { name: state.name, page: state.page }
  );
  const queryResult = { data, isLoading, isError, error, isFetching };
  // const getByRequest = (name?: string, page? ) => {

  // }

  useEffect(() => {
    setState((prev) => ({ ...prev, name: savedValue || '' }));
  }, [savedValue]);

  return (
    <>
      <Outlet />
      <Header setUpdatePage={setState} />
      <Main
        setState={setState}
        states={state}
        queryResult={queryResult}
        // trigger={trigger}
      />
    </>
  );
}

export default HomeView;
