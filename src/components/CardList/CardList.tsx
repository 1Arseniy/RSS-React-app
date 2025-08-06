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
      return (
        <div className="flex h-[65vh] justify-center items-center">
          <h1 className="text-3xl">{errorMessage}</h1>
        </div>
      );
    }
  }

  if (isFetching)
    return (
      <div className="flex h-[65vh] justify-center items-center">
        <LuLoaderCircle data-testid="loader" className="size-24 animate-spin" />
      </div>
    );

  return (
    <>
      <div className={`flex flex-wrap justify-center`} data-testid="cardList">
        {data?.map((character) => (
          <Card
            key={crypto.randomUUID()}
            page={props.page}
            character={character}
          />
        ))}
      </div>
    </>
  );
}
export default CardList;
