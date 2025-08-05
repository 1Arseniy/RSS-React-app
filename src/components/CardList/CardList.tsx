import { LuLoaderCircle } from 'react-icons/lu';

import { Card } from '@/components';

import type { TypeQueryResult } from '@/types/types';

interface TypePropsCardList {
  queryResult: TypeQueryResult;
  page: number;
}

function CardList(props: TypePropsCardList) {
  const { data, error, isFetching } = props.queryResult;

  if (error) {
    if ('status' in error) {
      const errorMessage =
        error.status === 404
          ? 'Сharacter with this name not found'
          : 'Server not responding, try later';
      return <h1>{errorMessage}</h1>;
    }
  }

  if (isFetching)
    return (
      <LuLoaderCircle data-testid="loader" className="size-24 animate-spin" />
    );

  return (
    <>
      <div className={`flex flex-wrap justify-center`} data-testid="cardList">
        {data?.results.map((character) => (
          <Card
            key={crypto.randomUUID()}
            states={props}
            character={character}
          />
        ))}
      </div>
    </>
  );
}
export default CardList;
