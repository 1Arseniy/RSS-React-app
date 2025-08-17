'use client';
import { useEffect, useState } from 'react';

import { Header, Main } from '@/components';

import type { TypeCharacter, TypeProps } from '@/types/types';

import { useGetCharactersQuery } from '@/client/api';

import useLocalStorage from '@/hooks/useLocalStorage';

import { useSearchParams } from 'next/navigation';

function HomeView({ initialData }: { initialData: TypeCharacter[] }) {
  const [savedValue] = useLocalStorage('name', '');
  const searchParams = useSearchParams();

  const [state, setState] = useState<TypeProps>({
    page: Number(searchParams.get('page')) || 1,
    name: savedValue || '',
    characters: initialData,
  });

  const { data, error, isFetching, refetch } = useGetCharactersQuery({
    name: state.name,
    page: state.page,
  });

  useEffect(() => {
    setState((prev) => ({ ...prev, characters: data }));
  }, [data, setState]);

  const queryResult = { data, error, isFetching, refetch };
  return (
    <>
      <Header setState={setState} />
      <Main setState={setState} states={state} queryResult={queryResult} />
    </>
  );
}

export default HomeView;
