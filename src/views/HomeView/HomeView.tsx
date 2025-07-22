import { useState } from 'react';

import { Header, Main } from '@/components';

import { getCharacters } from '@/client/getCharacters';

import type { typeProps } from '@/types/types';

function HomeView() {
  const [state, setState] = useState<typeProps>({
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
      setTimeout(() => setState((prev) => ({ ...prev, loading: false })), 300);
    }
  };
  return (
    <>
      <Header setUpdatePage={setState} getByRequest={getByRequest} />
      <Main
        setUpdatePage={setState}
        states={state}
        getByRequest={getByRequest}
      />
    </>
  );
}

export default HomeView;
