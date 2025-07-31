import { useEffect } from 'react';

import useLocalStorage from '@/hooks/useLocalStorage';

import { LuLoaderCircle } from 'react-icons/lu';

import { Card } from '@/components';

import type { charactersRequestProps } from '@/types/types';

function CardList(props: charactersRequestProps) {
  const { states, getByRequest } = props;
  const [value] = useLocalStorage('name', '');
  const { loading, characterByRequest, error } = states;

  useEffect(() => {
    getByRequest(value);
  }, []);

  return (
    <div className={`flex flex-wrap justify-center`} data-testid="cardList">
      {loading || !characterByRequest.length || error ? (
        <div className={`flex items-center h-[76vh] text-3xl text-center`}>
          {loading ? (
            <LuLoaderCircle
              data-testid="loader"
              className="size-24 animate-spin"
            />
          ) : !error ? (
            <h1>Сharacter with this name not found</h1>
          ) : (
            <h1>Server not responding, try later</h1>
          )}
        </div>
      ) : (
        characterByRequest.map((character) => (
          <Card
            key={crypto.randomUUID()}
            states={states}
            character={character}
          />
        ))
      )}
    </div>
  );
}
export default CardList;
