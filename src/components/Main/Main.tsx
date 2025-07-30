import { CardList, Pagination, Flyout } from '@/components';

import type { charactersRequestProps } from '@/types/types';

function Main(props: charactersRequestProps) {
  const { states, getByRequest, setState } = props;
  return (
    <main className="flex flex-col px-12">
      <Pagination
        setState={setState}
        states={states}
        getByRequest={getByRequest}
      />
      <CardList states={states} getByRequest={getByRequest} />
      <Flyout />
    </main>
  );
}

export default Main;
