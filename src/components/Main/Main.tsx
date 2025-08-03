import { CardList, Pagination, Flyout } from '@/components';

import type { CharactersRequestProps } from '@/types/types';

function Main(props: CharactersRequestProps) {
  const { states, getByRequest, setState } = props;
  return (
    <main className="flex flex-col px-12">
      <Pagination
        setState={setState}
        states={states}
        getByRequest={getByRequest}
      />
      <CardList {...states} />
      <Flyout />
    </main>
  );
}

export default Main;
