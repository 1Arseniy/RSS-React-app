import { useState } from 'react';

import { Header, Main } from '@/components';

import { getCharacters } from '@/client/getCharacters';

import type { TypeProps } from '@/types/types';

import { Outlet } from 'react-router-dom';

function HomeView() {
  const [state, setState] = useState<TypeProps>({
    characterByRequest: [],
    loading: true,
    error: false,
    page: 1,
  });

  const getByRequest = async (name?: string, page?: number) => {
    try {
      setState((prev) => ({ ...prev, loading: true }));
      const result = await getCharacters(name, page);
      setState((prev) => ({
        ...prev,
        characterByRequest: result,
      }));
    } catch {
      setState((prev) => ({ ...prev, error: true }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  };

  return (
    <>
      <Outlet />
      <Header setUpdatePage={setState} getByRequest={getByRequest} />
      <Main setState={setState} states={state} getByRequest={getByRequest} />
    </>
  );
}

export default HomeView;
