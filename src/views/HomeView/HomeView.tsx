import { useEffect, useState } from 'react';

import { Header, Main } from '@/components';

import type { TypeProps } from '@/types/types';

import { Outlet } from 'react-router-dom';

import { useLazyGetCharactersQuery } from '@/client/api';

import useLocalStorage from '@/hooks/useLocalStorage';

function HomeView() {
  const [state, setState] = useState<TypeProps>({
    // characterByRequest: [],
    // loading: true,
    // error: false,
    page: 1,
  });
  const [savedValue] = useLocalStorage('name', '');
  const [trigger, { data, isLoading, isError, error, isFetching }] =
    useLazyGetCharactersQuery();
  const queryResult = { data, isLoading, isError, error, isFetching };

  useEffect(() => {
    trigger(savedValue);
  }, [savedValue, trigger]);

  return (
    <>
      <Outlet />
      <Header setUpdatePage={setState} trigger={trigger} />
      <Main setState={setState} states={state} queryResult={queryResult} />
    </>
  );
}

export default HomeView;
