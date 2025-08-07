import { CardList, Flyout, Pagination } from '@/components';

import type { CharactersRequestProps } from '@/types/types';

function Main(props: CharactersRequestProps) {
  const { states, setState, queryResult } = props;
  return (
    <main className="flex flex-col px-12">
      <Pagination
        setState={setState}
        states={states}
        queryResult={queryResult}
      />
      <CardList {...states} queryResult={queryResult} />
      <Flyout />
    </main>
  );
}

export default Main;
