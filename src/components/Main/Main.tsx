import { CardList, Flyout } from '@/components';

import type { CharactersRequestProps } from '@/types/types';

function Main(props: CharactersRequestProps) {
  const { states, queryResult } = props;
  return (
    <main className="flex flex-col px-12">
      {/* <Pagination
        setState={setState}
        states={states}
        // getByRequest={getByRequest}
      /> */}
      <CardList {...states} queryResult={queryResult} />
      <Flyout />
    </main>
  );
}

export default Main;
