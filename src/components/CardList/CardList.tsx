import { LuLoaderCircle } from 'react-icons/lu';

import { Card } from '@/components';

import type { TypeProps } from '@/types/types';

function CardList(props: TypeProps) {
  const { loading, characterByRequest, error } = props;

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
            states={props}
            character={character}
          />
        ))
      )}
    </div>
  );
}
export default CardList;
